/* ============================================================
   MAIN.JS — Point d'entrée principal
   ============================================================
   Responsabilités :
   - Navigation active (détection section visible)
   - Smooth scroll
   - Menu hamburger mobile (toggle)
   - Initialisation des autres modules
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // NAVIGATION ACTIVE
  // Met à jour la classe --active sur le lien de nav
  // correspondant à la section visible
  // ─────────────────────────────────────────────────────────
  function setupActiveNavigation() {
    const sections = document.querySelectorAll('main > section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Active quand la section est au centre du viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          
          // Retire la classe active de tous les liens
          navLinks.forEach(link => link.classList.remove('nav__link--active'));
          
          // Ajoute la classe active au lien correspondant
          const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('nav__link--active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }


  // ─────────────────────────────────────────────────────────
  // SMOOTH SCROLL
  // Gère le scroll smooth vers les sections au clic sur les liens
  // Fallback JS si scroll-behavior: smooth; ne fonctionne pas
  // ─────────────────────────────────────────────────────────
  function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Ignore les liens sans hash ou avec juste #
        if (!targetId || targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        // Empêche le comportement par défaut
        e.preventDefault();

        // Scroll vers la section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Ferme le menu mobile si ouvert
        closeMobileMenu();

        // Update l'URL sans recharger
        history.pushState(null, '', targetId);
      });
    });
  }


  // ─────────────────────────────────────────────────────────
  // MENU HAMBURGER MOBILE
  // Toggle du menu mobile (à compléter à l'étape 13)
  // ─────────────────────────────────────────────────────────
  function setupMobileMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const navLinks = document.querySelector('.nav__links');
    const langSwitch = document.querySelector('.nav__lang-switch');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      hamburger.setAttribute('aria-expanded', !isExpanded);

      // Toggle classes pour l'animation
      hamburger.classList.toggle('nav__hamburger--active');
      if (navLinks) navLinks.classList.toggle('nav__links--open');
      if (langSwitch) langSwitch.classList.toggle('nav__lang-switch--open');
    });

    // Ferme le menu au clic en dehors
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav')) {
        closeMobileMenu();
      }
    });
  }

  function closeMobileMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const navLinks = document.querySelector('.nav__links');
    const langSwitch = document.querySelector('.nav__lang-switch');

    if (!hamburger) return;

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('nav__hamburger--active');
    if (navLinks) navLinks.classList.remove('nav__links--open');
    if (langSwitch) langSwitch.classList.remove('nav__lang-switch--open');
  }


  // ─────────────────────────────────────────────────────────
  // NAVBAR SCROLL BEHAVIOR
  // Ajoute une classe à la navbar au scroll pour changer le style
  // ─────────────────────────────────────────────────────────
  function setupNavbarScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Ajoute une classe si on a scrollé
      if (currentScroll > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScroll = currentScroll;
    });
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION
  // ─────────────────────────────────────────────────────────
  function init() {
    // Navigation active
    setupActiveNavigation();

    // Smooth scroll
    setupSmoothScroll();

    // Menu mobile
    setupMobileMenu();

    // Navbar scroll
    setupNavbarScroll();

    console.log('[main.js] Initialisé');
  }

  // Attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();