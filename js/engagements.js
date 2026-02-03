/* ============================================================
   ENGAGEMENTS.JS — Génération dynamique des items d'engagements
   ============================================================
   Responsabilités :
   - Générer les blocs d'engagements selon la langue active
   - Layout vertical (blocs pleine largeur empilés)
   - Support bullets OU paragraphe
   - Se mettre à jour automatiquement lors du changement de langue
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // ÉTAT GLOBAL
  // ─────────────────────────────────────────────────────────
  let currentLang = 'fr';


  // ─────────────────────────────────────────────────────────
  // RÉCUPÉRATION DES ENGAGEMENTS POUR UNE LANGUE
  // Filtre les engagements selon showIn: ["fr","en"]
  // ─────────────────────────────────────────────────────────
  function getEngagementsForLanguage(lang) {
    if (!window.i18nData || !window.i18nData[lang] || !window.i18nData[lang].engagements) {
      console.warn(`[engagements.js] Pas d'engagements pour la langue ${lang}`);
      return [];
    }

    const allEngagements = window.i18nData[lang].engagements.items;

    // Filtre uniquement les engagements qui doivent être affichés dans cette langue
    return allEngagements.filter(eng => 
      eng.showIn && eng.showIn.includes(lang)
    );
  }


  // ─────────────────────────────────────────────────────────
  // GÉNÉRATION D'UN ITEM D'ENGAGEMENT (HTML)
  // Support type: "bullets" OU "paragraph"
  // ─────────────────────────────────────────────────────────
  function createEngagementItem(eng) {
    // Génération du contenu selon le type
    let contentHTML = '';
    
    if (eng.type === 'bullets' && Array.isArray(eng.content)) {
      // Liste à puces
      const bulletsHTML = eng.content
        .map(bullet => `<li class="engagement-item__bullet">${escapeHtml(bullet)}</li>`)
        .join('');
      contentHTML = `<ul class="engagement-item__bullets">${bulletsHTML}</ul>`;
    } else {
      // Paragraphe simple
      contentHTML = `<p class="engagement-item__text">${escapeHtml(eng.content)}</p>`;
    }

    return `
      <article class="engagement-item" role="listitem" tabindex="0">
        <div class="engagement-item__header">
          <h3 class="engagement-item__title">${escapeHtml(eng.title)}</h3>
          <p class="engagement-item__meta">
            <span class="engagement-item__location">${escapeHtml(eng.location)}</span>
            <span class="engagement-item__separator" aria-hidden="true">•</span>
            <span class="engagement-item__dates">${escapeHtml(eng.dates)}</span>
          </p>
        </div>
        <div class="engagement-item__content">
          ${contentHTML}
        </div>
      </article>
    `;
  }


  // ─────────────────────────────────────────────────────────
  // ÉCHAPPEMENT HTML (protection XSS)
  // ─────────────────────────────────────────────────────────
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }


  // ─────────────────────────────────────────────────────────
  // RENDU DES ENGAGEMENTS
  // Fonction principale appelée au chargement et au changement de langue
  // ─────────────────────────────────────────────────────────
  function renderEngagements(lang) {
    currentLang = lang;

    const container = document.getElementById('engagements-container');
    if (!container) {
      console.warn('[engagements.js] Conteneur #engagements-container introuvable');
      return;
    }

    // Récupère les engagements de la langue active
    const engagements = getEngagementsForLanguage(lang);

    // Génère le HTML
    if (engagements.length === 0) {
      container.innerHTML = `
        <p class="engagements__empty" style="text-align: center; color: var(--color-text-muted);">
          Aucun engagement disponible.
        </p>
      `;
      return;
    }

    const itemsHTML = engagements.map(eng => createEngagementItem(eng)).join('');
    container.innerHTML = itemsHTML;

    console.log(`[engagements.js] ${engagements.length} engagement(s) affiché(s)`);
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION AU CHARGEMENT
  // ─────────────────────────────────────────────────────────
  function init() {
    // Récupère la langue active (depuis i18n.js)
    const lang = window.i18n?.currentLang() || 'fr';
    currentLang = lang;

    // Génère les engagements
    renderEngagements(lang);

    console.log('[engagements.js] Initialisé');
  }

  // Attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  // ─────────────────────────────────────────────────────────
  // EXPOSITION GLOBALE
  // Permet à i18n.js d'appeler renderEngagements() au changement de langue
  // ─────────────────────────────────────────────────────────
  window.engagements = {
    render: function(lang) {
      renderEngagements(lang);
    }
  };

})();