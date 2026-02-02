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
      items: [
        {
          id: "mes-data-foundation",
          title: "Data Foundation MES — Sanofi",
          description: "Sécurisation d'une Data Foundation MES via des contrôles Data Quality sur Snowflake, orchestrés avec dbt et Airflow. Réduction de 23% des anomalies et amélioration de la confiance dans les données publiées.",
          tags: ["Snowflake", "dbt", "Airflow", "SQL", "Streamlit"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "ai-agent-cortex",
          title: "Agent IA d'accès aux données",
          description: "Conception d'un agent conversationnel en langage naturel pour interroger les données SAP via Snowflake Cortex. Interface Streamlit, modèle sémantique dbt, recherche documentaire intégrée.",
          tags: ["Snowflake", "Cortex", "NLP", "dbt", "Streamlit"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "jo-2024-pipeline",
          title: "Pipeline ETL JO Paris 2024",
          description: "Construction d'un pipeline ETL pour centraliser les données de maintenance du Village des Athlètes. Modélisation en schéma en étoile, transformations PySpark, dashboards Power BI pour le pilotage opérationnel.",
          tags: ["PySpark", "PostgreSQL", "Power BI", "ETL"],
          featured: false,
          showIn: ["fr", "en"]
        },
        {
          id: "f1-lakehouse",
          title: "Data Lakehouse Formule 1",
          description: "Plateforme cloud end-to-end pour l'analyse de données F1 : ingestion Azure Data Factory, transformation Databricks (PySpark), stockage Delta Lake, visualisation Power BI. Architecture moderne Data Lakehouse.",
          tags: ["Azure", "Databricks", "Delta Lake", "PySpark", "Power BI"],
          featured: false,
          showIn: ["fr", "en"]
        }
      ]
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
      items: [
        {
          id: "mes-data-foundation",
          title: "MES Data Foundation — Sanofi",
          description: "Secured an MES Data Foundation through Data Quality controls on Snowflake, orchestrated with dbt and Airflow. Reduced anomalies by 23% and improved confidence in published data.",
          tags: ["Snowflake", "dbt", "Airflow", "SQL", "Streamlit"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "ai-agent-cortex",
          title: "AI-powered Data Access Agent",
          description: "Built a conversational agent for querying SAP data in natural language using Snowflake Cortex. Streamlit UI, dbt semantic model, integrated document search.",
          tags: ["Snowflake", "Cortex", "NLP", "dbt", "Streamlit"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "jo-2024-pipeline",
          title: "ETL Pipeline — Paris 2024 Olympics",
          description: "Built an ETL pipeline to centralize maintenance data for the Athletes' Village. Star schema modeling, PySpark transformations, Power BI dashboards for operational monitoring.",
          tags: ["PySpark", "PostgreSQL", "Power BI", "ETL"],
          featured: false,
          showIn: ["fr", "en"]
        },
        {
          id: "f1-lakehouse",
          title: "Formula 1 Data Lakehouse",
          description: "End-to-end cloud platform for F1 data analysis: Azure Data Factory ingestion, Databricks (PySpark) transformations, Delta Lake storage, Power BI visualization. Modern Data Lakehouse architecture.",
          tags: ["Azure", "Databricks", "Delta Lake", "PySpark", "Power BI"],
          featured: false,
          showIn: ["fr", "en"]
        }
      ]
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