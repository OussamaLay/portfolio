/* ============================================================
   I18N.JS — Moteur de traduction
   ============================================================
   Responsabilités :
   - Détecter la langue au chargement (URL > localStorage > navigator)
   - Mettre à jour l'attribut lang de <html>
   - Mettre à jour tous les éléments avec [data-i18n]
   - Mettre à jour les meta tags (title, description, OG)
   - Gérer le switch FR/EN (event listeners)
   - Persister le choix en localStorage
   ============================================================ */

(function() {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // CONFIGURATION
  // ─────────────────────────────────────────────────────────
  const STORAGE_KEY = 'portfolio_lang';
  const DEFAULT_LANG = 'fr';
  const SUPPORTED_LANGS = ['fr', 'en'];


  // ─────────────────────────────────────────────────────────
  // DÉTECTION DE LA LANGUE INITIALE
  // Ordre de priorité :
  // 1. Paramètre URL ?lang=fr/en
  // 2. localStorage
  // 3. Langue du navigateur
  // 4. Fallback FR
  // ─────────────────────────────────────────────────────────
  function detectLanguage() {
    // 1. Paramètre URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
      return urlLang;
    }

    // 2. localStorage
    const storedLang = localStorage.getItem(STORAGE_KEY);
    if (storedLang && SUPPORTED_LANGS.includes(storedLang)) {
      return storedLang;
    }

    // 3. Langue du navigateur
    const browserLang = navigator.language.split('-')[0]; // "fr-FR" → "fr"
    if (SUPPORTED_LANGS.includes(browserLang)) {
      return browserLang;
    }

    // 4. Fallback
    return DEFAULT_LANG;
  }


  // ─────────────────────────────────────────────────────────
  // RÉCUPÉRATION D'UNE TRADUCTION
  // Accepte une clé avec notation pointée : "hero.greeting"
  // Retourne la traduction ou la clé elle-même si introuvable
  // ─────────────────────────────────────────────────────────
  function getTranslation(lang, key) {
    if (!window.i18nData || !window.i18nData[lang]) {
      console.warn(`[i18n] Langue ${lang} introuvable dans i18nData`);
      return key;
    }

    const keys = key.split('.');
    let translation = window.i18nData[lang];

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        console.warn(`[i18n] Clé "${key}" introuvable pour la langue ${lang}`);
        return key;
      }
    }

    return translation;
  }


  // ─────────────────────────────────────────────────────────
  // MISE À JOUR DU DOM
  // Parcourt tous les éléments avec [data-i18n] et applique
  // la traduction via textContent (sécurité XSS)
  // ─────────────────────────────────────────────────────────
  function updateDOM(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getTranslation(lang, key);
      
      // Utilise textContent pour éviter XSS (pas de innerHTML)
      el.textContent = translation;
    });
  }


  // ─────────────────────────────────────────────────────────
  // MISE À JOUR DES META TAGS
  // Met à jour title, description, Open Graph, Twitter cards
  // selon la langue active
  // ─────────────────────────────────────────────────────────
  function updateMetaTags(lang) {
    const meta = getTranslation(lang, 'meta');
    
    if (!meta || typeof meta !== 'object') {
      console.warn(`[i18n] Meta tags introuvables pour ${lang}`);
      return;
    }

    // Title
    if (meta.title) {
      document.title = meta.title;
    }

    // Description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && meta.description) {
      descriptionMeta.setAttribute('content', meta.description);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.title) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && meta.description) {
      ogDescription.setAttribute('content', meta.description);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');
    }

    // Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && meta.title) {
      twitterTitle.setAttribute('content', meta.title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription && meta.description) {
      twitterDescription.setAttribute('content', meta.description);
    }
  }


  // ─────────────────────────────────────────────────────────
  // MISE À JOUR DE L'ATTRIBUT LANG DU HTML
  // ─────────────────────────────────────────────────────────
  function updateHtmlLang(lang) {
    document.documentElement.setAttribute('lang', lang);
  }


  // ─────────────────────────────────────────────────────────
  // MISE À JOUR DES BOUTONS DE LANGUE
  // Met à jour aria-pressed et la classe --active
  // ─────────────────────────────────────────────────────────
  function updateLangButtons(lang) {
    const buttons = document.querySelectorAll('.nav__lang-btn');
    
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      
      // aria-pressed (accessibilité)
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      
      // Classe CSS
      if (isActive) {
        btn.classList.add('nav__lang-btn--active');
      } else {
        btn.classList.remove('nav__lang-btn--active');
      }
    });
  }


  // ─────────────────────────────────────────────────────────
  // MISE À JOUR DE L'URL (sans rechargement)
  // Ajoute ?lang=fr/en dans l'URL pour permettre le partage
  // et l'indexation par les moteurs de recherche
  // ─────────────────────────────────────────────────────────
  function updateURL(lang) {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    
    // Utilise replaceState pour ne pas créer d'entrée dans l'historique
    window.history.replaceState({}, '', url.toString());
  }


  // ─────────────────────────────────────────────────────────
  // CHANGEMENT DE LANGUE (fonction principale)
  // Appelée au chargement et à chaque switch FR/EN
  // ─────────────────────────────────────────────────────────
  function changeLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      console.warn(`[i18n] Langue ${lang} non supportée, fallback sur ${DEFAULT_LANG}`);
      lang = DEFAULT_LANG;
    }

    // 1. Mise à jour du DOM
    updateDOM(lang);

    // 2. Mise à jour des meta tags
    updateMetaTags(lang);

    // 3. Mise à jour de l'attribut lang du HTML
    updateHtmlLang(lang);

    // 4. Mise à jour des boutons de langue
    updateLangButtons(lang);

    // 5. Mise à jour de l'URL
    updateURL(lang);

    // 6. Persistance en localStorage
    localStorage.setItem(STORAGE_KEY, lang);

    // 7. Mise à jour des timelines (si le module existe)
    if (window.timeline && typeof window.timeline.render === 'function') {
      window.timeline.render(lang);
    }

    // 8. Mise à jour des projets (si le module existe)
    if (window.projects && typeof window.projects.render === 'function') {
      window.projects.render(lang);
    }

    // 9. Mise à jour des certifications (si le module existe)
    if (window.certifications && typeof window.certifications.render === 'function') {
      window.certifications.render(lang);
    }

    // 10. Log pour debug (à retirer en prod)
    console.log(`[i18n] Langue changée : ${lang}`);
  }


  // ─────────────────────────────────────────────────────────
  // EVENT LISTENERS SUR LES BOUTONS FR/EN
  // ─────────────────────────────────────────────────────────
  function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll('.nav__lang-btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  }


  // ─────────────────────────────────────────────────────────
  // INITIALISATION AU CHARGEMENT DU DOM
  // ─────────────────────────────────────────────────────────
  function init() {
    // Détecte la langue initiale
    const initialLang = detectLanguage();
    
    // Applique la langue
    changeLanguage(initialLang);
    
    // Configure le switch FR/EN
    setupLanguageSwitcher();
  }

  // On attend que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM déjà chargé (cas rare avec defer, mais sécurité)
    init();
  }

  // ─────────────────────────────────────────────────────────
  // EXPOSITION GLOBALE (optionnelle — pour debug / étape 8)
  // Permet d'appeler window.i18n.changeLanguage('en') depuis la console
  // ─────────────────────────────────────────────────────────
  window.i18n = {
    changeLanguage: changeLanguage,
    detectLanguage: detectLanguage,
    currentLang: () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
  };

})();