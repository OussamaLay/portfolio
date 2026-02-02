/* ============================================================
   ANIMATIONS.JS — Animations au scroll & micro-interactions
   ============================================================
   Responsabilités :
   - IntersectionObserver pour reveals au scroll
   - Détection et respect de prefers-reduced-motion
   - Animations fluides sur les sections, cartes, badges
   
   FIX: Gère les cartes PRÉSENTES au chargement + FUTURES (langue/filtre)
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
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.15
    };

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    }, observerOptions);

    // Observe tous les éléments avec la classe 'reveal'
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => scrollObserver.observe(el));

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

    // Cards de projets
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      // Fonction pour ajouter les classes reveal aux cartes
      const setupProjectCards = () => {
        const cards = projectsContainer.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
          if (!card.classList.contains('reveal')) {
            card.classList.add('reveal');
            card.style.transitionDelay = `${index * 0.1}s`;
          }
        });
      };

      // 1. Gérer les cartes PRÉSENTES au chargement
      setupProjectCards();

      // 2. Observer les FUTURS changements (langue/filtre)
      if (projectsMutationObserver) {
        projectsMutationObserver.disconnect();
      }

      projectsMutationObserver = new MutationObserver(() => {
        setupProjectCards();
        createScrollObserver();
      });
      projectsMutationObserver.observe(projectsContainer, { childList: true });
    }

    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach((item, index) => {
      item.classList.add('reveal', 'reveal--left');
      item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Skills badges
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

    setTimeout(() => {
      const greeting = hero.querySelector('.hero__greeting');
      const name = hero.querySelector('.hero__name');
      const role = hero.querySelector('.hero__role');
      const tagline = hero.querySelector('.hero__tagline');
      const actions = hero.querySelector('.hero__actions');

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
    setupRevealElements();
    createScrollObserver();
    animateHero();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();