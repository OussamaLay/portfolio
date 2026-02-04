/* ============================================================
   /api/r.js — Vercel Serverless Function
   ============================================================
   Endpoint de tracking pour les clics externes.
   
   Usage :
   https://oussamalayaidi.vercel.app/api/r?src=linkedin
   https://oussamalayaidi.vercel.app/api/r?src=apec&utm_source=email
   
   Fonctionnement :
   1. Redirection IMMÉDIATE (302) vers DEST_URL
   2. Logging asynchrone vers Google Apps Script (non-bloquant)
   3. Si le logging échoue, la redirection fonctionne quand même
   
   Variables d'environnement requises :
   - TRACKING_GAS_ENDPOINT : URL du Google Apps Script Web App
   - DEST_URL : URL de destination (ex: https://oussamalayaidi.vercel.app)
   ============================================================ */

/**
 * Handler principal
 * @param {Request} req - Requête HTTP
 * @param {Response} res - Réponse HTTP
 */
export default async function handler(req, res) {
  // ──────────────────────────────────────────────────────
  // 1. EXTRACTION DES PARAMÈTRES
  // ──────────────────────────────────────────────────────
  const {
    src = 'unknown',
    utm_source,
    utm_medium,
    utm_campaign,
    ...otherParams
  } = req.query;
  
  const destinationUrl = process.env.DEST_URL || 'https://oussamalayaidi.vercel.app';
  
  // ──────────────────────────────────────────────────────
  // 2. REDIRECTION IMMÉDIATE
  // ──────────────────────────────────────────────────────
  res.writeHead(302, {
    'Location': destinationUrl,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  res.end();
  
  // ──────────────────────────────────────────────────────
  // 3. LOGGING ASYNCHRONE (fire-and-forget)
  // L'utilisateur a déjà été redirigé, on log en arrière-plan
  // ──────────────────────────────────────────────────────
  
  // Ne pas bloquer si pas d'endpoint configuré
  if (!process.env.TRACKING_GAS_ENDPOINT) {
    console.warn('[TRACKING] TRACKING_GAS_ENDPOINT not configured, skipping log');
    return;
  }
  
  try {
    await logClick(req, {
      src,
      utm_source,
      utm_medium,
      utm_campaign,
      otherParams
    });
  } catch (error) {
    // On log l'erreur mais on ne crash pas
    console.error('[TRACKING] Failed to log click:', error.message);
  }
}


/**
 * Fonction de logging vers Google Apps Script
 * @param {Request} req - Requête HTTP
 * @param {Object} params - Paramètres extraits
 */
async function logClick(req, params) {
  const { src, utm_source, utm_medium, utm_campaign, otherParams } = params;
  
  // ──────────────────────────────────────────────────────
  // COLLECTE DES DONNÉES
  // ──────────────────────────────────────────────────────
  
  // Request path complet (pathname + querystring)
  const requestPath = req.url || '/api/r';
  
  // Headers Vercel GeoIP (automatiques)
  const country = req.headers['x-vercel-ip-country'] || '';
  const region = req.headers['x-vercel-ip-country-region'] || '';
  const city = req.headers['x-vercel-ip-city'] || '';
  const latitude = req.headers['x-vercel-ip-latitude'] || '';
  const longitude = req.headers['x-vercel-ip-longitude'] || '';
  const timezone = req.headers['x-vercel-ip-timezone'] || '';
  
  // IP complète (via x-forwarded-for)
  const ip = getClientIP(req);
  
  // User Agent
  const userAgent = req.headers['user-agent'] || 'unknown';
  
  // Referrer
  const referrer = req.headers['referer'] || req.headers['referrer'] || 'direct';
  
  // Accept-Language
  const acceptLanguage = req.headers['accept-language'] || '';
  
  // Client Hints (si disponibles)
  const clientHintMobile = req.headers['sec-ch-ua-mobile'] || '';
  const clientHintPlatform = req.headers['sec-ch-ua-platform'] || '';
  
  // ──────────────────────────────────────────────────────
  // CONSTRUCTION DU PAYLOAD
  // ──────────────────────────────────────────────────────
  const payload = {
    timestamp: new Date().toISOString(),
    src,
    request_path: requestPath,
    referrer,
    ip,
    user_agent: userAgent,
    accept_language: acceptLanguage,
    country,
    region,
    city,
    latitude,
    longitude,
    timezone,
    utm_source: utm_source || '',
    utm_medium: utm_medium || '',
    utm_campaign: utm_campaign || '',
    client_hint_mobile: clientHintMobile,
    client_hint_platform: clientHintPlatform
  };
  
  // ──────────────────────────────────────────────────────
  // ENVOI VERS GOOGLE APPS SCRIPT
  // ──────────────────────────────────────────────────────
  const response = await fetch(process.env.TRACKING_GAS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    // Timeout de 5 secondes pour ne pas bloquer trop longtemps
    signal: AbortSignal.timeout(5000)
  });
  
  const result = await response.json();
  
  // Log le résultat (visible dans Vercel logs)
  if (result.status === 'ok') {
    console.log(`[TRACKING] ✓ Click logged: ${src} from ${ip}`);
  } else if (result.status === 'duplicate') {
    console.log(`[TRACKING] ⊘ Duplicate ignored: ${src} from ${ip}`);
  } else {
    console.log(`[TRACKING] ? Unknown status: ${result.status}`);
  }
}


/**
 * Extrait l'IP réelle du client
 * @param {Request} req - Requête HTTP
 * @returns {string} IP du client
 */
function getClientIP(req) {
  // Vercel met l'IP dans x-forwarded-for
  const forwardedFor = req.headers['x-forwarded-for'];
  
  if (forwardedFor) {
    // x-forwarded-for peut contenir plusieurs IPs séparées par des virgules
    // La première est celle du client original
    const ips = forwardedFor.split(',').map(ip => ip.trim());
    return ips[0];
  }
  
  // Fallback sur x-real-ip (certains proxys)
  const realIp = req.headers['x-real-ip'];
  if (realIp) {
    return realIp;
  }
  
  // Fallback ultime
  return req.connection?.remoteAddress || 'unknown';
}