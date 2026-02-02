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
   
   NOUVEAU: Section certifications ajoutée
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
      education: "Formation",
      experience: "Expérience",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
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
      description: "Diplômé ingénieur en systèmes d'information, je me spécialise en Data Engineering avec un focus sur la qualité des données, l'industrialisation des pipelines ELT et les environnements Cloud (Snowflake, Azure, Databricks).",
      tag: {
        pipelines: "Pipelines ELT",
        quality: "Data Quality",
        cloud: "Cloud & Scale",
        agile: "Agile / Scrum"
      }
    },

    // Education (Parcours académique)
    education: {
      title: "Parcours académique",
      items: [
        { //isima
          id: "isima",
          dates: "Sept 2022 - Sept 2025",
          school: "Clermont Auvergne INP ISIMA",
          degree: "Ingénieur en Systèmes d'Information et Aide à la Décision",
          location: "Clermont-Ferrand, France",
          description: "Formation d'ingénieur spécialisée en data engineering, big data, et aide à la décision."
        },
        { //oth
          id: "oth",
          dates: "Juin 2023 - Juil 2023",
          school: "Ostbayerische Technische Hochschule (OTH)",
          degree: "Informatique & Mathématiques Appliquées",
          location: "Regensburg, Allemagne",
          description: "Programme d'échange international axé sur l'informatique et les mathématiques appliquées."
        },
        { //prepa
          id: "prepa",
          dates: "Sept 2020 - Juin 2022",
          school: "Lycée Moulay Youssef",
          degree: "Classes Préparatoires aux Grandes Écoles - PSI",
          location: "Rabat, Maroc",
          description: "Physique et Sciences de l'Ingénieur (PSI), préparation aux concours des écoles d'ingénieurs."
        },
        { //bac
          id: "bac",
          dates: "Sept 2019 - Juin 2020",
          school: "Lycée Moulay Youssef",
          degree: "Baccalauréat Scientifique - Sciences Mathématiques",
          location: "Rabat, Maroc",
          description: "Obtention du baccalauréat avec mention Bien, option Sciences Mathématiques A."
        }
      ]
    },

    // Professional Experience (Parcours professionnel)
    experience: {
      title: "Parcours professionnel",
      items: [
        {
          id: "atos-sanofi",
          dates: "Avr 2025 - Sept 2025",
          role: "Stage - Data Engineer",
          company: "Atos (mission Sanofi)",
          location: "Bordeaux, France",
          description: "Sécurisation de la Data Foundation MES via contrôles Data Quality sur Snowflake (réduction de 23% des anomalies). Industrialisation dbt + Airflow. Conception d'un agent IA d'accès aux données avec Snowflake Cortex.",
          tags: ["Stage"],
          type: "internship"
        },
        {
          id: "spie-jo2024",
          dates: "Mai 2024 - Sept 2024",
          role: "Stage - Data Analyst",
          company: "Spie Batignolles Énergie",
          location: "Eaubonne, Île-de-France",
          description: "Mise en place d'un pipeline ETL pour centraliser les données de maintenance du Village des Athlètes (JO Paris 2024). Modélisation en schéma en étoile, transformations PySpark, dashboards Power BI.",
          tags: ["Stage"],
          type: "internship"
        },
        {
          id: "hackathon-sopra",
          dates: "Oct 2023",
          role: "Hackathon - Dashboard RSE",
          company: "Sopra Steria",
          location: "France",
          description: "Conception d'une application web comparant la performance énergétique avec des prédictions de consommation dans le cadre d'un hackathon RSE.",
          tags: ["Hackathon", "Projet collaboratif"],
          type: "hackathon"
        }
      ]
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

    // Projects (uniquement projets techniques/académiques)
    projects: {
      title: "Projets",
      filter: {
        all: "Tous"
      },
      items: [
        {
          id: "media-spend-platform",
          title: "Plateforme Data Media Spend",
          description: "Plateforme Data end-to-end avec Informatica IICS et Snowflake pour l'ingestion, la transformation et la modélisation de données Media Spend. Dashboards Snowflake et applications Streamlit.",
          tags: ["Informatica IICS", "Snowflake", "Streamlit", "ETL"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "f1-lakehouse",
          title: "Data Lakehouse Formule 1",
          description: "Plateforme cloud end-to-end pour l'analyse de données F1 : ingestion Azure Data Factory, transformation Databricks (PySpark), stockage Delta Lake, visualisation Power BI. Architecture moderne Data Lakehouse.",
          tags: ["Azure", "Databricks", "Delta Lake", "PySpark", "Power BI"],
          featured: true,
          showIn: ["fr", "en"]
        }
      ]
    },

    // Certifications
    certifications: {
      title: "Certifications",
      whatILearnedLabel: "Ce que j'ai appris",
      credentialLabel: "Voir la certification",
      items: [
        {
          id: "snowflake-essentials",
          name: "Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "Avril 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/d594df93-b229-4b46-aefe-046658ff3985",
          whatILearned: "Technologies de collaboration révolutionnaires de Snowflake. Création de listings et partage de données via le Data Marketplace. Optimisation et contrôle des coûts, élimination des extractions nocturnes lourdes. Maîtrise SQL avancée (DISTINCT, GROUP BY, ORDER BY, JOINS, BEGIN/END, DECLARE, FOR).",
          skills: [
            "Snowflake",
            "SQL Basics",
            "SQL Intermediate",
            "SQL Block Scripting",
            "Snowflake COPY INTO",
            "Cost Categories",
            "Snowflake on Azure",
            "Snowflake on GCP",
            "Data Marketplace",
            "SQL UPDATE",
            "SQL Cursor",
            "Secure UDTFs",
            "Secure Views",
            "Data Listing",
            "Provider Studio",
            "Column Name Matching",
            "ORGADMIN Role",
            "Account Creation"
          ],
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
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
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
      description: "Graduate engineer in information systems, I specialize in Data Engineering with a focus on data quality, ELT pipeline industrialization, and Cloud environments (Snowflake, Azure, Databricks).",
      tag: {
        pipelines: "ELT Pipelines",
        quality: "Data Quality",
        cloud: "Cloud & Scale",
        agile: "Agile / Scrum"
      }
    },

    // Education
    education: {
      title: "Education",
      items: [
        { //isima
          id: "isima",
          dates: "Sept 2022 - Sept 2025",
          school: "Clermont Auvergne INP ISIMA",
          degree: "Engineer in Information Systems and Decision Support",
          location: "Clermont-Ferrand, France",
          description: "Engineering program specialized in data engineering, big data, and decision support systems."
        },
        { //oth
          id: "oth",
          dates: "June 2023 - July 2023",
          school: "Ostbayerische Technische Hochschule (OTH)",
          degree: "Computer Science & Applied Mathematics",
          location: "Regensburg, Germany",
          description: "International exchange program focused on computer science and applied mathematics."
        },
        { //prepa
          id: "prepa",
          dates: "Sept 2020 - June 2022",
          school: "Lycée Moulay Youssef",
          degree: "Preparatory Classes for Engineering Schools - PSI",
          location: "Rabat, Morocco",
          description: "Physics and Engineering Sciences (PSI), preparation for competitive engineering school entrance exams."
        },
        { //bac
          id: "bac",
          dates: "Sept 2019 - June 2020",
          school: "Moulay Youssef High School",
          degree: "Scientific Baccalaureate – Mathematics & Sciences Track",
          location: "Rabat, Morocco",
          description: "Earned the baccalaureate with honors (Good), Mathematics & Sciences A option."
        }
      ]
    },

    // Professional Experience
    experience: {
      title: "Professional Experience",
      items: [
        {
          id: "atos-sanofi",
          dates: "Apr 2025 - Sept 2025",
          role: "Internship - Data Engineer",
          company: "Atos (Sanofi project)",
          location: "Bordeaux, France",
          description: "Secured MES Data Foundation through Data Quality controls on Snowflake (reduced anomalies by 23%). Industrialization with dbt + Airflow. Built an AI-powered data access agent using Snowflake Cortex.",
          tags: ["Internship"],
          type: "internship"
        },
        {
          id: "spie-jo2024",
          dates: "May 2024 - Sept 2024",
          role: "Internship - Data Analyst",
          company: "Spie Batignolles Énergie",
          location: "Eaubonne, Île-de-France",
          description: "Built an ETL pipeline to centralize maintenance data for the Athletes' Village (Paris 2024 Olympics). Star schema modeling, PySpark transformations, Power BI dashboards.",
          tags: ["Internship"],
          type: "internship"
        },
        {
          id: "hackathon-sopra",
          dates: "Oct 2023",
          role: "Hackathon - CSR Dashboard",
          company: "Sopra Steria",
          location: "France",
          description: "Built a web application comparing energy performance with consumption predictions during a CSR-focused hackathon.",
          tags: ["Hackathon", "Collaborative Project"],
          type: "hackathon"
        }
      ]
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

    // Projects (technical/academic projects only)
    projects: {
      title: "Projects",
      filter: {
        all: "All"
      },
      items: [
        {
          id: "media-spend-platform",
          title: "Media Spend Data Platform",
          description: "End-to-end data platform with Informatica IICS and Snowflake for Media Spend data ingestion, transformation, and modeling. Snowflake dashboards and Streamlit applications.",
          tags: ["Informatica IICS", "Snowflake", "Streamlit", "ETL"],
          featured: true,
          showIn: ["fr", "en"]
        },
        {
          id: "f1-lakehouse",
          title: "Formula 1 Data Lakehouse",
          description: "End-to-end cloud platform for F1 data analysis: Azure Data Factory ingestion, Databricks (PySpark) transformations, Delta Lake storage, Power BI visualization. Modern Data Lakehouse architecture.",
          tags: ["Azure", "Databricks", "Delta Lake", "PySpark", "Power BI"],
          featured: true,
          showIn: ["fr", "en"]
        }
      ]
    },

    // Certifications
    certifications: {
      title: "Certifications",
      whatILearnedLabel: "What I learned",
      credentialLabel: "View credential",
      items: [
        {
          id: "snowflake-essentials",
          name: "Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "April 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/d594df93-b229-4b46-aefe-046658ff3985",
          whatILearned: "Snowflake's revolutionary collaboration technologies. Creating listings and sharing data through the Data Marketplace. Cost optimization and control, eliminating heavy nightly extracts. Advanced SQL mastery (DISTINCT, GROUP BY, ORDER BY, JOINS, BEGIN/END, DECLARE, FOR).",
          skills: [
            "Snowflake",
            "SQL Basics",
            "SQL Intermediate",
            "SQL Block Scripting",
            "Snowflake COPY INTO",
            "Cost Categories",
            "Snowflake on Azure",
            "Snowflake on GCP",
            "Data Marketplace",
            "SQL UPDATE",
            "SQL Cursor",
            "Secure UDTFs",
            "Secure Views",
            "Data Listing",
            "Provider Studio",
            "Column Name Matching",
            "ORGADMIN Role",
            "Account Creation"
          ],
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