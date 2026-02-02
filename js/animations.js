/* ============================================================
   ANIMATIONS.JS — Animations au scroll & micro-interactions
   ============================================================
   Responsabilités :
   - IntersectionObserver pour reveals au scroll
   - Détection et respect de prefers-reduced-motion
   - Animations fluides sur les sections, cartes, badges
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
      // Observer pour détecter quand les cartes sont ajoutées
      const observer = new MutationObserver(() => {
        const cards = projectsContainer.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
          card.classList.add('reveal');
          // Décalage de l'animation pour un effet en cascade
          card.style.transitionDelay = `${index * 0.1}s`;
        });
      });
      observer.observe(projectsContainer, { childList: true });
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
  // INTERSECTION OBSERVER
  // Détecte quand les éléments entrent dans le viewport
  // ─────────────────────────────────────────────────────────
  function createScrollObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger un peu avant que l'élément soit visible
      threshold: 0.15 // 15% de l'élément visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajoute la classe visible
          entry.target.classList.add('reveal--visible');
          
          // Optionnel : ne plus observer après la première apparition
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe tous les éléments avec la classe 'reveal'
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    return observer;
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
    // Configure les éléments à révéler
    setupRevealElements();

    // Crée l'observer pour les reveals au scroll
    createScrollObserver();

    // Anime le hero au chargement
    animateHero();

    console.log('[animations.js] Initialisé — animations activées');
  }

  // Attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-setup après génération dynamique des projets
  // (nécessaire car projects.js génère les cartes après le chargement)
  window.addEventListener('load', () => {
    setTimeout(() => {
      setupRevealElements();
      createScrollObserver();
    }, 500);
  });

})();