/* ============================================================
   ANIMATIONS.JS — Animations au scroll & micro-interactions
   ============================================================
   Responsabilités :
   - IntersectionObserver pour reveals au scroll
   - Détection et respect de prefers-reduced-motion
   - Animations fluides sur les sections, cartes, badges
   
   FIX v2: Correction complète - gère les cartes PRÉSENTES + FUTURES
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // DÉTECTION PREFERS-REDUCED-MOTION
  // Respecte les préférences utilisateur d'accessibilité
  // ─────────────────────────────────────────────────────────
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Si l'utilisateur préfère réduire les animations, on arrête ici
  if (prefersReducedMotion) {
    console.log('[animations.js] prefers-reduced-motion détecté — animations désactivées');
    return;
  }

  // Observer global pour éviter les duplications
  let scrollObserver = null;
  let projectsMutationObserver = null;


  // ─────────────────────────────────────────────────────────
  // INTERSECTION OBSERVER
  // Détecte quand les éléments entrent dans le viewport
  // ─────────────────────────────────────────────────────────
  function createScrollObserver() {
    // Déconnecte l'ancien observer s'il existe
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger un peu avant que l'élément soit visible
      threshold: 0.15 // 15% de l'élément visible
    };

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajoute la classe visible
          entry.target.classList.add('reveal--visible');
          
          // Optionnel : ne plus observer après la première apparition
          // scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe tous les éléments avec la classe 'reveal'
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => scrollObserver.observe(el));

    console.log(`[animations.js] ScrollObserver créé pour ${elementsToReveal.length} éléments`);

    return scrollObserver;
  }


  // ─────────────────────────────────────────────────────────
  // AJOUT DES CLASSES REVEAL SUR LES ÉLÉMENTS À ANIMER
  // ─────────────────────────────────────────────────────────
  function setupRevealElements() {
    // Sections principales
    const sections = document.querySelectorAll('.about, .education, .experience, .skills, .projects, .contact');
    sections.forEach(section => {
      section.classList.add('reveal');
    });

    // Cards de projets (après leur génération dynamique)
    // On observe le conteneur et on ajoute les classes aux cartes une fois générées
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      // Fonction pour ajouter les classes reveal aux cartes
      const setupProjectCards = () => {
        const cards = projectsContainer.querySelectorAll('.project-card');
        console.log(`[animations.js] Setup de ${cards.length} cartes de projets`);
        
        cards.forEach((card, index) => {
          if (!card.classList.contains('reveal')) {
            card.classList.add('reveal');
            // Décalage de l'animation pour un effet en cascade
            card.style.transitionDelay = `${index * 0.1}s`;
            console.log(`[animations.js] Carte "${card.dataset.projectId}" → classe .reveal ajoutée`);
          }
        });
      };

      // 1. IMPORTANT: Ajouter les classes aux cartes DÉJÀ PRÉSENTES (au chargement initial)
      setupProjectCards();

      // 2. Observer les FUTURS changements (langue/filtre)
      // Déconnecte l'ancien observer s'il existe
      if (projectsMutationObserver) {
        projectsMutationObserver.disconnect();
      }

      projectsMutationObserver = new MutationObserver(() => {
        console.log('[animations.js] MutationObserver: changement détecté dans projects-container');
        setupProjectCards();
        // IMPORTANT : Re-créer le scroll observer pour observer les nouvelles cartes
        createScrollObserver();
      });
      projectsMutationObserver.observe(projectsContainer, { childList: true });
      
      console.log('[animations.js] MutationObserver créé pour projects-container');
    }

    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach((item, index) => {
      item.classList.add('reveal', 'reveal--left');
      item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Skills badges (effet en cascade)
    const skillsBadges = document.querySelectorAll('.skill-badge');
    skillsBadges.forEach((badge, index) => {
      badge.style.transitionDelay = `${Math.floor(index / 8) * 0.05}s`;
    });
  }


  // ─────────────────────────────────────────────────────────
  // ANIMATION DU HERO AU CHARGEMENT
  // ─────────────────────────────────────────────────────────
  function animateHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Petite attente pour que le contenu soit chargé
    setTimeout(() => {
      const greeting = hero.querySelector('.hero__greeting');
      const name = hero.querySelector('.hero__name');
      const role = hero.querySelector('.hero__role');
      const tagline = hero.querySelector('.hero__tagline');
      const actions = hero.querySelector('.hero__actions');

      // Animation en cascade
      if (greeting) {
        greeting.style.opacity = '0';
        greeting.style.transform = 'translateY(20px)';
        setTimeout(() => {
          greeting.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          greeting.style.opacity = '1';
          greeting.style.transform = 'translateY(0)';
        }, 100);
      }

      if (name) {
        name.style.opacity = '0';
        name.style.transform = 'translateY(20px)';
        setTimeout(() => {
          name.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          name.style.opacity = '1';
          name.style.transform = 'translateY(0)';
        }, 200);
      }

      if (role) {
        role.style.opacity = '0';
        role.style.transform = 'translateY(20px)';
        setTimeout(() => {
          role.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          role.style.opacity = '1';
          role.style.transform = 'translateY(0)';
        }, 400);
      }

      if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateY(20px)';
        setTimeout(() => {
          tagline.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          tagline.style.opacity = '1';
          tagline.style.transform = 'translateY(0)';
        }, 600);
      }

      if (actions) {
        actions.style.opacity = '0';
        actions.style.transform = 'translateY(20px)';
        setTimeout(() => {
          actions.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          actions.style.opacity = '1';
          actions.style.transform = 'translateY(0)';
        }, 800);
      }
    }, 100);
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION
  // ─────────────────────────────────────────────────────────
  function init() {
    console.log('[animations.js] Initialisation...');
    
    // Configure les éléments à révéler
    setupRevealElements();

    // Crée l'observer pour les reveals au scroll
    createScrollObserver();

    // Anime le hero au chargement
    animateHero();

    console.log('[animations.js] ✅ Initialisé — animations activées');
  }

  // Attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();