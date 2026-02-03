/* ============================================================
   CERTIFICATIONS.JS — Génération dynamique des cartes de certifications
   ============================================================
   Responsabilités :
   - Générer les cartes de certifications selon la langue active
   - Afficher le logo de l'organisme
   - Gérer les images fallback
   - Se mettre à jour automatiquement lors du changement de langue
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // ÉTAT GLOBAL
  // ─────────────────────────────────────────────────────────
  let currentLang = 'fr';  // Langue active (mise à jour par i18n)


  // ─────────────────────────────────────────────────────────
  // RÉCUPÉRATION DES CERTIFICATIONS POUR UNE LANGUE
  // Filtre les certifications selon showIn: ["fr","en"]
  // ─────────────────────────────────────────────────────────
  function getCertificationsForLanguage(lang) {
    if (!window.i18nData || !window.i18nData[lang] || !window.i18nData[lang].certifications) {
      console.warn(`[certifications.js] Pas de certifications pour la langue ${lang}`);
      return [];
    }

    const allCertifications = window.i18nData[lang].certifications.items;

    // Filtre uniquement les certifications qui doivent être affichées dans cette langue
    return allCertifications.filter(cert => 
      cert.showIn && cert.showIn.includes(lang)
    );
  }


  // ─────────────────────────────────────────────────────────
  // GÉNÉRATION D'UNE CARTE DE CERTIFICATION (HTML)
  // Retourne une string HTML (sécurisé — pas d'injection)
  // ─────────────────────────────────────────────────────────
  function createCertificationCard(cert, lang) {
    const labels = window.i18nData[lang].certifications;
    
    // Génération des tags de compétences
    const skillsHTML = cert.skills
      .map(skill => `<span class="certification-card__skill">${escapeHtml(skill)}</span>`)
      .join('');

    return `
      <article class="certification-card" role="listitem" data-cert-id="${escapeHtml(cert.id)}">
        <div class="certification-card__header">
          <img 
            src="${escapeHtml(cert.logoPath)}" 
            alt="Logo ${escapeHtml(cert.organization)}" 
            class="certification-card__logo"
            onerror="this.src='assets/images/placeholder.svg'; this.classList.add('certification-card__logo--fallback');"
          />
          <div class="certification-card__header-info">
            <h3 class="certification-card__name">${escapeHtml(cert.name)}</h3>
            <p class="certification-card__organization">${escapeHtml(cert.organization)}</p>
          </div>
        </div>
        
        <div class="certification-card__meta">
          <span class="certification-card__date">📅 ${escapeHtml(cert.date)}</span>
          <span class="certification-card__expiration">⏱️ ${escapeHtml(cert.expirationStatus)}</span>
        </div>
        
        <div class="certification-card__learned">
          <h4 class="certification-card__learned-title">${escapeHtml(labels.whatILearnedLabel)}</h4>
          <p class="certification-card__learned-text">${escapeHtml(cert.whatILearned)}</p>
        </div>
        
        <div class="certification-card__skills">
          ${skillsHTML}
        </div>
        
        <a 
          href="${escapeHtml(cert.credentialUrl)}" 
          class="certification-card__link" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="${escapeHtml(labels.credentialLabel)} - ${escapeHtml(cert.name)}"
        >
          ${escapeHtml(labels.credentialLabel)} →
        </a>
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
  // RENDU DES CARTES DE CERTIFICATIONS
  // Fonction principale appelée au chargement et au changement de langue
  // ─────────────────────────────────────────────────────────
  function renderCertifications(lang) {
    currentLang = lang;

    const container = document.getElementById('certifications-container');
    if (!container) {
      console.warn('[certifications.js] Conteneur #certifications-container introuvable');
      return;
    }

    // Récupère les certifications de la langue active
    const certifications = getCertificationsForLanguage(lang);

    // Génère le HTML
    if (certifications.length === 0) {
      container.innerHTML = `
        <p class="certifications__empty" style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted);">
          Aucune certification disponible.
        </p>
      `;
      return;
    }

    const cardsHTML = certifications.map(cert => createCertificationCard(cert, lang)).join('');
    container.innerHTML = cardsHTML;

    console.log(`[certifications.js] ${certifications.length} certification(s) affichée(s)`);
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION AU CHARGEMENT
  // ─────────────────────────────────────────────────────────
  function init() {
    // Récupère la langue active (depuis i18n.js)
    const lang = window.i18n?.currentLang() || 'fr';
    currentLang = lang;

    // Génère les certifications
    renderCertifications(lang);

    console.log('[certifications.js] Initialisé');
  }

  // Attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  // ─────────────────────────────────────────────────────────
  // EXPOSITION GLOBALE
  // Permet à i18n.js d'appeler renderCertifications() au changement de langue
  // ─────────────────────────────────────────────────────────
  window.certifications = {
    render: function(lang) {
      renderCertifications(lang);
    }
  };

})();