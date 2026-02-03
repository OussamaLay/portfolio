/* ============================================================
   CERTIFICATIONS.JS — Génération dynamique des cartes de certifications
   ============================================================
   VERSION CORRIGÉE avec wrapper interne pour grid-template-rows
   ============================================================ */

(function() {
  'use strict';

  let currentLang = 'fr';

  function getCertificationsForLanguage(lang) {
    if (!window.i18nData || !window.i18nData[lang] || !window.i18nData[lang].certifications) {
      console.warn(`[certifications.js] Pas de certifications pour la langue ${lang}`);
      return [];
    }

    const allCertifications = window.i18nData[lang].certifications.items;
    return allCertifications.filter(cert => 
      cert.showIn && cert.showIn.includes(lang)
    );
  }

  function createCertificationCard(cert, lang) {
    const labels = window.i18nData[lang].certifications;
    const contentId = `cert-content-${cert.id}`;
    
    const skillsHTML = cert.skills
      .map(skill => `<span class="certification-card__skill">${escapeHtml(skill)}</span>`)
      .join('');

    return `
      <article class="certification-card" role="listitem" data-cert-id="${escapeHtml(cert.id)}">
        
        <!-- HEADER (toujours visible) -->
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
        
        <!-- META (toujours visible) -->
        <div class="certification-card__meta">
          <span class="certification-card__date">📅 ${escapeHtml(cert.date)}</span>
          <span class="certification-card__expiration">⏱️ ${escapeHtml(cert.expirationStatus)}</span>
        </div>
        
        <!-- CONTENU DÉPLIÉ (masqué par défaut) -->
        <div class="certification-card__expandable" 
             id="${contentId}"
             aria-hidden="true">
          
          <!-- WRAPPER INTERNE (FIX pour grid-template-rows) -->
          <div class="certification-card__expandable-inner">
            
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
              tabindex="-1"
              aria-label="${escapeHtml(labels.credentialLabel)} - ${escapeHtml(cert.name)}"
            >
              ${escapeHtml(labels.credentialLabel)} →
            </a>
            
          </div>
          <!-- FIN WRAPPER INTERNE -->
          
        </div>
        
        <!-- BOUTON TOGGLE -->
        <button 
          class="certification-card__toggle" 
          aria-expanded="false" 
          aria-controls="${contentId}"
          type="button">
          <span class="certification-card__toggle-text">${escapeHtml(labels.showMore)}</span>
          <svg class="certification-card__toggle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </article>
    `;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function setupToggleListeners(lang) {
    const labels = window.i18nData[lang].certifications;
    const toggleButtons = document.querySelectorAll('.certification-card__toggle');
    
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const targetId = btn.getAttribute('aria-controls');
        const target = document.getElementById(targetId);
        const textSpan = btn.querySelector('.certification-card__toggle-text');
        const link = target?.querySelector('.certification-card__link');
        
        if (!target || !textSpan) return;
        
        if (isExpanded) {
          // PLIER
          btn.setAttribute('aria-expanded', 'false');
          target.setAttribute('aria-hidden', 'true');
          textSpan.textContent = labels.showMore;
          if (link) link.setAttribute('tabindex', '-1');
        } else {
          // DÉPLIER
          btn.setAttribute('aria-expanded', 'true');
          target.setAttribute('aria-hidden', 'false');
          textSpan.textContent = labels.showLess;
          if (link) link.setAttribute('tabindex', '0');
        }
      });
      
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  function renderCertifications(lang) {
    currentLang = lang;

    const container = document.getElementById('certifications-container');
    if (!container) {
      console.warn('[certifications.js] Conteneur #certifications-container introuvable');
      return;
    }

    const certifications = getCertificationsForLanguage(lang);

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

    setupToggleListeners(lang);

    console.log(`[certifications.js] ${certifications.length} certification(s) affichée(s) (mode compact FIXED)`);
  }

  function init() {
    const lang = window.i18n?.currentLang() || 'fr';
    currentLang = lang;
    renderCertifications(lang);
    console.log('[certifications.js] Initialisé (FIXED avec wrapper interne)');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.certifications = {
    render: function(lang) {
      renderCertifications(lang);
    }
  };

})();