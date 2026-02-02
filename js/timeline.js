/* ============================================================
   TIMELINE.JS - Rendu des timelines Education & Experience
   ============================================================
   Responsabilites :
   - Generer les items de timeline pour Education
   - Generer les items de timeline pour Experience
   - Se mettre a jour au changement de langue
   ============================================================ */

(function() {
  'use strict';

  // Echappement HTML (protection XSS)
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Generation d'un item de timeline Education
  function createEducationItem(item) {
    return `
      <article class="timeline__item" role="listitem">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <time class="timeline__date">${escapeHtml(item.dates)}</time>
          <h3 class="timeline__title">${escapeHtml(item.degree)}</h3>
          <p class="timeline__subtitle">${escapeHtml(item.school)}</p>
          <p class="timeline__location">${escapeHtml(item.location)}</p>
          <p class="timeline__description">${escapeHtml(item.description)}</p>
        </div>
      </article>
    `;
  }

  // Generation d'un item de timeline Experience
  function createExperienceItem(item) {
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
          <h3 class="timeline__title">${escapeHtml(item.role)}</h3>
          <p class="timeline__subtitle">${escapeHtml(item.company)}</p>
          <p class="timeline__location">${escapeHtml(item.location)}</p>
          <p class="timeline__description">${escapeHtml(item.description)}</p>
          ${tagsHTML}
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
      container.innerHTML = '<p class="timeline__empty">Aucune experience disponible.</p>';
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
    console.log('[timeline.js] Initialise');
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