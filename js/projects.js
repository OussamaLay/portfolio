/* ============================================================
   PROJECTS.JS — Génération dynamique des cartes de projets
   ============================================================
   Responsabilités :
   - Générer les cartes de projets selon la langue active
   - Générer les filtres par techno (tags)
   - Filtrer les projets selon le tag sélectionné
   - Se mettre à jour automatiquement lors du changement de langue
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // ÉTAT GLOBAL
  // ─────────────────────────────────────────────────────────
  let currentFilter = 'all';  // Tag actuellement sélectionné
  let currentLang = 'fr';     // Langue active (mise à jour par i18n)


  // ─────────────────────────────────────────────────────────
  // RÉCUPÉRATION DES PROJETS POUR UNE LANGUE
  // Filtre les projets selon showIn: ["fr","en"]
  // ─────────────────────────────────────────────────────────
  function getProjectsForLanguage(lang) {
    if (!window.i18nData || !window.i18nData[lang] || !window.i18nData[lang].projects) {
      console.warn(`[projects.js] Pas de projets pour la langue ${lang}`);
      return [];
    }

    const allProjects = window.i18nData[lang].projects.items;

    // Filtre uniquement les projets qui doivent être affichés dans cette langue
    return allProjects.filter(project => 
      project.showIn && project.showIn.includes(lang)
    );
  }


  // ─────────────────────────────────────────────────────────
  // EXTRACTION DE TOUS LES TAGS UNIQUES
  // Pour générer les boutons de filtre
  // ─────────────────────────────────────────────────────────
  function getAllTags(projects) {
    const tagsSet = new Set();

    projects.forEach(project => {
      if (project.tags && Array.isArray(project.tags)) {
        project.tags.forEach(tag => tagsSet.add(tag));
      }
    });

    return Array.from(tagsSet).sort();
  }


  // ─────────────────────────────────────────────────────────
  // GÉNÉRATION D'UNE CARTE DE PROJET (HTML)
  // Retourne une string HTML (sécurisé — pas d'injection)
  // ─────────────────────────────────────────────────────────
  function createProjectCard(project) {
    const featuredBadge = project.featured 
      ? `<span class="project-card__tag-featured">Featured</span>` 
      : '';

    const tagsHTML = project.tags
      .map(tag => `<span class="project-card__tag">${escapeHtml(tag)}</span>`)
      .join('');

    return `
      <article class="project-card" role="listitem" data-project-id="${escapeHtml(project.id)}">
        ${featuredBadge}
        <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
        <p class="project-card__description">${escapeHtml(project.description)}</p>
        <div class="project-card__tags">
          ${tagsHTML}
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
  // RENDU DES CARTES DE PROJETS
  // Fonction principale appelée au chargement et au changement de langue
  // ─────────────────────────────────────────────────────────
  function renderProjects(lang) {
    currentLang = lang;

    const container = document.getElementById('projects-container');
    if (!container) {
      console.warn('[projects.js] Conteneur #projects-container introuvable');
      return;
    }

    // Récupère les projets de la langue active
    let projects = getProjectsForLanguage(lang);

    // Applique le filtre actif (si différent de "all")
    if (currentFilter !== 'all') {
      projects = projects.filter(project => 
        project.tags && project.tags.includes(currentFilter)
      );
    }

    // Génère le HTML
    if (projects.length === 0) {
      container.innerHTML = `
        <p class="projects__empty" style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted);">
          Aucun projet disponible.
        </p>
      `;
      return;
    }

    const cardsHTML = projects.map(project => createProjectCard(project)).join('');
    container.innerHTML = cardsHTML;
  }


  // ─────────────────────────────────────────────────────────
  // RENDU DES FILTRES PAR TECHNO
  // Génère les boutons de filtre selon les tags disponibles
  // ─────────────────────────────────────────────────────────
  function renderFilters(lang) {
    const filtersContainer = document.querySelector('.projects__filters');
    if (!filtersContainer) {
      console.warn('[projects.js] Conteneur .projects__filters introuvable');
      return;
    }

    const projects = getProjectsForLanguage(lang);
    const tags = getAllTags(projects);

    // Bouton "Tous" (toujours présent)
    const allText = window.i18nData[lang]?.projects?.filter?.all || 'All';
    let filtersHTML = `
      <button class="projects__filter ${currentFilter === 'all' ? 'projects__filter--active' : ''}"
              data-filter="all">
        ${escapeHtml(allText)}
      </button>
    `;

    // Boutons par tag
    tags.forEach(tag => {
      filtersHTML += `
        <button class="projects__filter ${currentFilter === tag ? 'projects__filter--active' : ''}"
                data-filter="${escapeHtml(tag)}">
          ${escapeHtml(tag)}
        </button>
      `;
    });

    filtersContainer.innerHTML = filtersHTML;

    // Attache les event listeners
    setupFilterListeners();
  }


  // ─────────────────────────────────────────────────────────
  // EVENT LISTENERS SUR LES BOUTONS DE FILTRE
  // ─────────────────────────────────────────────────────────
  function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.projects__filter');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Met à jour le filtre actif
        currentFilter = filter;
        
        // Re-génère les projets et les filtres
        renderProjects(currentLang);
        renderFilters(currentLang);
      });
    });
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION AU CHARGEMENT
  // ─────────────────────────────────────────────────────────
  function init() {
    // Récupère la langue active (depuis i18n.js)
    const lang = window.i18n?.currentLang() || 'fr';
    currentLang = lang;

    // Génère les filtres et les projets
    renderFilters(lang);
    renderProjects(lang);

    // console.log('[projects.js] Initialisé');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  // ─────────────────────────────────────────────────────────
  // EXPOSITION GLOBALE
  // Permet à i18n.js d'appeler renderProjects() au changement de langue
  // ─────────────────────────────────────────────────────────
  window.projects = {
    render: function(lang) {
      currentFilter = 'all'; // Réinitialise le filtre
      renderProjects(lang);
      renderFilters(lang);
    },
    reset: function() {
      currentFilter = 'all';
    }
  };

})();