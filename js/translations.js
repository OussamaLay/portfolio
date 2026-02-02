/* ============================================================
   TRANSLATIONS.JS — Dictionnaire i18n FR/EN
   ============================================================
   Structure :
   window.i18nData = {
     fr: { ... },
     en: { ... }
   }
   
   Chaque clé correspond à un [data-i18n="clé"] dans le HTML.
   Les noms de technologies (Python, SQL, Snowflake…) ne sont 
   pas traduits — ce sont des termes universels.
   ============================================================ */

window.i18nData = {

  /* ─────────────────────────────────────────────────────────
     FRANÇAIS
     ───────────────────────────────────────────────────────── */
  fr: {
    
    // Meta tags (mis à jour dynamiquement par i18n.js)
    meta: {
      title: "Oussama Layaidi — Data Engineer",
      description: "Portfolio de Oussama Layaidi, Data Engineer junior spécialisé en pipelines de données, Snowflake, dbt et transformation digitale."
    },

    // Skip link (accessibilité)
    skip: {
      link: "Aller au contenu principal"
    },

    // Navigation
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },

    // Hero
    hero: {
      greeting: "Bonjour, je suis",
      role: "Data Engineer & Analyst",
      tagline: "Je construis des pipelines fiables, des données propres, et des insights qui comptent."
    },

    // About
    about: {
      title: "À propos de moi",
      description: "Diplômé ingénieur en systèmes d'information, je me spécialise en Data Engineering avec un focus sur la qualité des données, l'industrialisation des pipelines ELT et les environnements Cloud (Snowflake, Azure, Databricks). J'ai contribué à des projets concrets en stage : la Data Foundation MES chez Sanofi (via Atos) et un pipeline de maintenance pour les JO Paris 2024 (Spie Batignolles).",
      tag: {
        pipelines: "Pipelines ELT",
        quality: "Data Quality",
        cloud: "Cloud & Scale",
        agile: "Agile / Scrum"
      }
    },

    // Skills
    skills: {
      title: "Compétences",
      group: {
        languages: "Langages",
        dataeng: "Data Engineering",
        cloud: "Cloud & Databases",
        viz: "Visualisation"
      }
    },

    // Projects
    projects: {
      title: "Projets",
      filter: {
        all: "Tous"
      },
      // Les projets individuels seront ajoutés à l'étape 8
      items: []
    },

    // Contact
    contact: {
      title: "Contact",
      description: "N'hésitez pas à me contacter pour une opportunité ou une collaboration.",
      label: {
        email: "Email"
      }
    },

    // Footer
    footer: {
      copy: "© 2026 Oussama Layaidi",
      built: "Construit avec HTML, CSS & JS vanille"
    }
  },


  /* ─────────────────────────────────────────────────────────
     ENGLISH
     ───────────────────────────────────────────────────────── */
  en: {
    
    // Meta tags
    meta: {
      title: "Oussama Layaidi — Data Engineer",
      description: "Portfolio of Oussama Layaidi, junior Data Engineer specialized in data pipelines, Snowflake, dbt and digital transformation."
    },

    // Skip link
    skip: {
      link: "Skip to main content"
    },

    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      role: "Data Engineer & Analyst",
      tagline: "I build reliable pipelines, clean data, and insights that matter."
    },

    // About
    about: {
      title: "About me",
      description: "Graduate engineer in information systems, I specialize in Data Engineering with a focus on data quality, ELT pipeline industrialization, and Cloud environments (Snowflake, Azure, Databricks). I've contributed to real-world projects during internships: the MES Data Foundation at Sanofi (via Atos) and a maintenance pipeline for the Paris 2024 Olympics (Spie Batignolles).",
      tag: {
        pipelines: "ELT Pipelines",
        quality: "Data Quality",
        cloud: "Cloud & Scale",
        agile: "Agile / Scrum"
      }
    },

    // Skills
    skills: {
      title: "Skills",
      group: {
        languages: "Languages",
        dataeng: "Data Engineering",
        cloud: "Cloud & Databases",
        viz: "Visualization"
      }
    },

    // Projects
    projects: {
      title: "Projects",
      filter: {
        all: "All"
      },
      // Individual projects will be added in step 8
      items: []
    },

    // Contact
    contact: {
      title: "Contact",
      description: "Feel free to reach out for an opportunity or collaboration.",
      label: {
        email: "Email"
      }
    },

    // Footer
    footer: {
      copy: "© 2026 Oussama Layaidi",
      built: "Built with vanilla HTML, CSS & JS"
    }
  }
};