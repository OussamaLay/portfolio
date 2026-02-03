/* ============================================================
   TIMELINE.JS - Rendu des timelines Education & Experience
   ============================================================
   Responsabilités :
   - Générer les items de timeline pour Education
   - Générer les items de timeline pour Experience
   - Afficher les logos des écoles/entreprises (cliquables)
   - Support flexible des noms de champs (logoPath/schoolLogoPath/companyLogoPath)
   - Se mettre à jour au changement de langue
   ============================================================ */

(function() {
  'use strict';

  // Échappement HTML (protection XSS)
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Récupération du chemin du logo (support multiple conventions)
  function getLogoPath(item) {
    return item.logoPath || item.schoolLogoPath || item.companyLogoPath || null;
  }

  // Récupération de l'URL du site (support multiple conventions)
  function getWebsiteUrl(item) {
    return item.websiteUrl || item.schoolUrl || item.companyUrl || null;
  }

  // Génération du placeholder adapté
  function getPlaceholderPath(type) {
    return type === 'education' 
      ? 'assets/images/placeholder.svg'
      : 'assets/images/placeholder.svg';
  }

  // Génération d'un item de timeline Education
  function createEducationItem(item) {
    const logoPath = getLogoPath(item);
    const websiteUrl = getWebsiteUrl(item);

    // Logo de l'école (si disponible)
    const logoHTML = logoPath 
      ? `<a href="${escapeHtml(websiteUrl || '#')}" 
            class="timeline__logo-link" 
            ${websiteUrl ? 'target="_blank" rel="noopener noreferrer"' : ''}
            aria-label="Visiter le site de ${escapeHtml(item.school)}">
          <img 
            src="${escapeHtml(logoPath)}" 
            alt="Logo ${escapeHtml(item.school)}" 
            class="timeline__logo"
            onerror="this.src='${getPlaceholderPath('education')}'; this.classList.add('timeline__logo--fallback');"
          />
        </a>`
      : '';

    return `
      <article class="timeline__item" role="listitem">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <time class="timeline__date">${escapeHtml(item.dates)}</time>
          
          <div class="timeline__header">
            ${logoHTML}
            <div class="timeline__header-info">
              <h3 class="timeline__title">${escapeHtml(item.degree)}</h3>
              <p class="timeline__subtitle">${escapeHtml(item.school)}</p>
              <p class="timeline__location">${escapeHtml(item.location)}</p>
            </div>
          </div>
          
          <div class="timeline__content-body">
            <p class="timeline__description">${escapeHtml(item.description)}</p>
          </div>
        </div>
      </article>
    `;
  }

  // Génération d'un item de timeline Experience
  function createExperienceItem(item) {
    const logoPath = getLogoPath(item);
    const websiteUrl = getWebsiteUrl(item);

    // Logo de l'entreprise (si disponible)
    const logoHTML = logoPath 
      ? `<a href="${escapeHtml(websiteUrl || '#')}" 
            class="timeline__logo-link" 
            ${websiteUrl ? 'target="_blank" rel="noopener noreferrer"' : ''}
            aria-label="Visiter le site de ${escapeHtml(item.company)}">
          <img 
            src="${escapeHtml(logoPath)}" 
            alt="Logo ${escapeHtml(item.company)}" 
            class="timeline__logo"
            onerror="this.src='${getPlaceholderPath('experience')}'; this.classList.add('timeline__logo--fallback');"
          />
        </a>`
      : '';

    const tagsHTML = item.tags && item.tags.length > 0
      ? `<div class="timeline__tags">
          ${item.tags.map(tag => `<span class="timeline__tag">${escapeHtml(tag)}</span>`).join('')}
         </div>`
      : '';

    return `
      <article class="timeline__item" role="listitem">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <time class="timeline__date">${escapeHtml(item.dates)}</time>
          
          <div class="timeline__header">
            ${logoHTML}
            <div class="timeline__header-info">
              <h3 class="timeline__title">${escapeHtml(item.role)}</h3>
              <p class="timeline__subtitle">${escapeHtml(item.company)}</p>
              <p class="timeline__location">${escapeHtml(item.location)}</p>
            </div>
          </div>
          
          <div class="timeline__content-body">
            <p class="timeline__description">${escapeHtml(item.description)}</p>
            ${tagsHTML}
          </div>
        </div>
      </article>
    `;
  }

  // Rendu de la timeline Education
  function renderEducation(lang) {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    const data = window.i18nData?.[lang]?.education;
    if (!data || !data.items || data.items.length === 0) {
      container.innerHTML = '<p class="timeline__empty">Aucune formation disponible.</p>';
      return;
    }

    const itemsHTML = data.items.map(item => createEducationItem(item)).join('');
    container.innerHTML = itemsHTML;
  }

  // Rendu de la timeline Experience
  function renderExperience(lang) {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    const data = window.i18nData?.[lang]?.experience;
    if (!data || !data.items || data.items.length === 0) {
      container.innerHTML = '<p class="timeline__empty">Aucune expérience disponible.</p>';
      return;
    }

    const itemsHTML = data.items.map(item => createExperienceItem(item)).join('');
    container.innerHTML = itemsHTML;
  }

  // Initialisation
  function init() {
    const lang = window.i18n?.currentLang() || 'fr';
    renderEducation(lang);
    renderExperience(lang);
    console.log('[timeline.js] Initialisé avec logos');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposition globale
  window.timeline = {
    render: function(lang) {
      renderEducation(lang);
      renderExperience(lang);
    }
  };

})();