export const config = { runtime: "edge" };

function pickFirstIp(xff) {
  if (!xff) return "unknown";
  return xff.split(",")[0].trim();
}

export default async function handler(request, context) {
  const url = new URL(request.url);

  const destinationUrl = (process.env.DEST_URL || "https://oussamalayaidi.vercel.app").trim();
  const endpoint = (process.env.TRACKING_GAS_ENDPOINT || "").trim();

  const src = url.searchParams.get("src") || "unknown";
  const utm_source = url.searchParams.get("utm_source") || "";
  const utm_medium = url.searchParams.get("utm_medium") || "";
  const utm_campaign = url.searchParams.get("utm_campaign") || "";

  const h = request.headers;

  const payload = {
    timestamp: new Date().toISOString(),
    src,
    request_path: url.pathname + url.search,
    referrer: h.get("referer") || h.get("referrer") || "direct",
    ip: pickFirstIp(h.get("x-forwarded-for")),
    user_agent: h.get("user-agent") || "unknown",
    accept_language: h.get("accept-language") || "",

    country: h.get("x-vercel-ip-country") || "",
    region: h.get("x-vercel-ip-country-region") || "",
    city: h.get("x-vercel-ip-city") || "",
    latitude: h.get("x-vercel-ip-latitude") || "",
    longitude: h.get("x-vercel-ip-longitude") || "",
    timezone: h.get("x-vercel-ip-timezone") || "",

    client_hint_mobile: h.get("sec-ch-ua-mobile") || "",
    client_hint_platform: h.get("sec-ch-ua-platform") || "",

    utm_source,
    utm_medium,
    utm_campaign
  };

  // Logging en arrière-plan (ne bloque pas la redirection)
  if (endpoint) {
    context.waitUntil(
      fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow"
      }).catch(() => {})
    );
  }

  // Redirection immédiate
  return new Response(null, {
    status: 302,
    headers: {
      Location: destinationUrl,
      "Cache-Control": "no-store"
    }
  });
}
