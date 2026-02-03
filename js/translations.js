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
          schoolLogoPath: "assets/images/schools/isima.svg",
          schoolUrl: "https://www.isima.fr/",
          degree: "Ingénieur en Systèmes d'Information et Aide à la Décision",
          location: "Clermont-Ferrand, France",
          description: "Formation d'ingénieur spécialisée en data engineering, big data, et aide à la décision."
        },
        { //oth
          id: "oth",
          dates: "Juin 2023 - Juil 2023",
          school: "Ostbayerische Technische Hochschule (OTH)",
          schoolLogoPath: "assets/images/schools/oth.svg",
          schoolUrl: "https://www.oth-regensburg.de/en",
          degree: "Informatique & Mathématiques Appliquées",
          location: "Regensburg, Allemagne",
          description: "Programme d'échange international axé sur l'informatique et les mathématiques appliquées."
        },
        { //prepa
          id: "prepa",
          dates: "Sept 2020 - Juin 2022",
          school: "Lycée Moulay Youssef",
          schoolLogoPath: "assets/images/schools/moulay-youssef.svg",
          schoolUrl: "https://www.linkedin.com/school/cpge-moulay-youssef/",
          degree: "Classes Préparatoires aux Grandes Écoles - PSI",
          location: "Rabat, Maroc",
          description: "Physique et Sciences de l'Ingénieur (PSI), préparation aux concours des écoles d'ingénieurs."
        },
        { //bac
          id: "bac",
          dates: "Sept 2019 - Juin 2020",
          school: "Lycée Moulay Youssef",
          schoolLogoPath: "assets/images/schools/moulay-youssef.svg",
          schoolUrl: "https://www.linkedin.com/school/cpge-moulay-youssef/",
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
        { //atos
          id: "atos-sanofi",
          dates: "Avr 2025 - Sept 2025",
          role: "Stage - Data Engineer",
          company: "Atos (mission Sanofi)",
          companyLogoPath: "assets/images/companies/atos.svg",
          companyUrl: "https://atos.net/fr/",
          location: "Bordeaux, France",
          description: "Sécurisation de la Data Foundation MES via contrôles Data Quality sur Snowflake (réduction de 23% des anomalies). Industrialisation dbt + Airflow. Conception d'un agent IA d'accès aux données avec Snowflake Cortex.",
          tags: ["Stage"],
          type: "internship"
        },
        { //sbe
          id: "spie-jo2024",
          dates: "Mai 2024 - Sept 2024",
          role: "Stage - Data Analyst",
          company: "Spie Batignolles Énergie",
          companyLogoPath: "assets/images/companies/spie-batignolles.svg",
          companyUrl: "https://www.spiebatignolles.fr/",
          location: "Eaubonne, Île-de-France",
          description: "Mise en place d'un pipeline ETL pour centraliser les données de maintenance du Village des Athlètes (JO Paris 2024). Modélisation en schéma en étoile, transformations PySpark, dashboards Power BI.",
          tags: ["Stage"],
          type: "internship"
        },
        { //hackathon
          id: "hackathon-sopra",
          dates: "Oct 2023",
          role: "Hackathon - Dashboard RSE",
          company: "Sopra Steria",
          companyLogoPath: "assets/images/companies/sopra-steria.svg",
          companyUrl: "https://www.soprasteria.com/",
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
        { //dbt
          id: "dbt-fundamentals",
          name: "dbt Fundamentals",
          organization: "dbt Labs",
          logoPath: "assets/images/certifications/dbt.svg",
          date: "9 mai 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://www.credential.net/918ebda1-b69c-4ff5-afe2-4319a65f2339#acc.ej2UDBwO",
          whatILearned: "Compréhension des fondamentaux dbt : connexion à l’entrepôt et au dépôt Git, modélisation, gestion des sources, tests, documentation et déploiement.",
          skills: [
            "dbt",
            "dbt Cloud / dbt Learn",
            "Data Modeling",
            "Sources",
            "Tests",
            "Documentation",
            "Deployment",
            "Jinja",
            "Macros",
            "Git"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_5
          id: "snowflake-hands-on-data-engineering",
          name: "Hands-On Essentials : Data Engineering Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "2 mai 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/007ca52e-ec4b-440c-ae15-dfeca6b887a3",
          whatILearned: "Atelier pratique orienté data engineering dans Snowflake : gestion des timezones et formats timestamp, CTAS, Streams/CDC, Tasks, MERGE, profils de requêtes, Snowpipe (chargement continu), Window Functions et notions d’SQL avancé. Manipulation de JSON (paths + casts), session settings, task history et dépendances.",
          skills: [
            "Timezones and Timestamp Formats",
            "CTAS",
            "Snowflake Streams/CDC",
            "Snowflake Tasks",
            "Parsing JSON with Paths and Casts",
            "Session Settings",
            "Query Profiles",
            "SQL Merge Statements",
            "Task History and Dependency",
            "Snowpipe Continuous Loading",
            "SQL Window Function",
            "Snowflake Dashboards",
            "Storing Metadata in Columns",
            "Advanced SQL"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_4
          id: "snowflake-hands-on-data-lake",
          name: "Hands-On Essentials : Data Lake Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "28 avril 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/c39edae8-57ec-4fc0-bd18-ad3d86fd4ccf",
          whatILearned: "Atelier pratique sur les données non chargées (staged data) dans Snowflake : création et gestion de stages, interrogation de données staged avant chargement, utilisation des formats de fichiers (Parquet), Directory Tables, tables externes, UDFs, fonctions géospatiales (GeoJSON) et partages Marketplace.",
          skills: [
            "Snowflake Stages",
            "Querying Staged Data",
            "File Formats",
            "Directory Tables",
            "Parquet",
            "GeoSpatial Functions",
            "geoJSON",
            "Snowflake User Defined Functions",
            "Marketplace Data Shares",
            "External Tables"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_3
          id: "snowflake-hands-on-data-app-builders",
          name: "Hands-On Essentials : Data Application Builders Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "23 avril 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/c2d0bd38-dc38-480a-8264-fd666226baeb",
          whatILearned: "Développement d’applications data avec Snowflake comme backend : création de formulaires Streamlit pour collecter des données, écriture de Python pour insérer/récupérer des données depuis des tables Snowflake, et utilisation d’API REST (clés, appels) pour l’ingestion.",
          skills: [
            "Streamlit",
            "Streamlit in Snowflake",
            "Python",
            "pandas",
            "Intro to Variables",
            "Intro to APIs",
            "Intro to API Keys",
            "Intro to CLIs",
            "SnowSQL CLI",
            "SnowPark",
            "Intro to Functions"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_2
          id: "snowflake-essentials",
          name: "Hands-On Essentials : Collaboration, Marketplace & Estimation des coûts",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "Avril 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/d594df93-b229-4b46-aefe-046658ff3985",
          whatILearned: "Création de listings via Provider Studio, partage et consommation de datasets via Marketplace, et estimation/monitoring des coûts. Renforcement des bases SQL (GROUP BY, JOIN, UPDATE) et du contrôle de flux (BEGIN/END, variables, curseurs).",
          skills: [
            "SQL Basics",
            "SQL Intermediate",
            "SQL UPDATE",
            "SQL Cursor",
            "SQL Block Scripting/Control-of-Flow",
            "Local SQL Variables",
            "COPY INTO",
            "Snowflake COPY INTO",
            "File Formats",
            "Column Name Matching",
            "Secure UDFs",
            "Secure Views",
            "Snowflake Data Marketplace",
            "Data Listing Development",
            "Snowflake Provider Studio",
            "Snowflake Cost Categories",
            "Snowflake on Azure",
            "Snowflake on GCP",
            "ORGADMIN Role",
            "Account Creation"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_1
          id: "snowflake-hands-on-data-warehousing",
          name: "Hands-On Essentials : Data Warehousing Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "15 avril 2025",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://achieve.snowflake.com/e3227875-7a1e-4e2a-8c5b-992d415bf154",
          whatILearned: "Mise en pratique des fondamentaux Snowflake : création et gestion de bases/schémas/tables/vues, gestion des warehouses (compute), formats de fichiers et stages externes, chargement de données (COPY INTO), et ingestion/requêtes sur des données CSV/JSON (Path notation, CAST).",
          skills: [
            "Snowflake Databases",
            "Snowflake Warehouses",
            "Snowflake SQL Worksheets",
            "Snowflake External Stages",
            "SQL",
            "File Formats",
            "COPY INTO",
            "JSON",
            "CSV"
          ],
          showIn: ["fr", "en"]
        },
        { // azure databricks
          id: "udemy-azure-databricks-spark-de",
          name: "Azure Databricks & Spark for Data Engineers: Hands-on Project",
          organization: "Udemy",
          logoPath: "assets/images/certifications/azure.svg",
          date: "31 octobre 2024",
          expirationStatus: "N'expire pas",
          credentialUrl: "https://ude.my/UC-a4d1fe07-c461-4eaa-aa19-2a4ef34e81c1",
          whatILearned: "Réalisation d’un projet data engineering complet sur Azure : Databricks (notebooks, clusters, jobs), ingestion & transformations PySpark/Spark SQL, implémentation Lakehouse avec Delta Lake (MERGE, time travel), orchestration via Azure Data Factory (pipelines, triggers, monitoring), intégration Power BI, et data governance avec Unity Catalog (metastore, lineage, access control).",
          skills: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Spark Core",
            "Delta Lake",
            "Lakehouse Architecture",
            "Azure Data Lake Storage Gen2",
            "Azure Data Factory (ADF)",
            "Power BI",
            "Unity Catalog",
            "Data Governance",
            "ETL/ELT Pipelines",
            "Incremental Load",
            "JSON",
            "Parquet"
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
          schoolLogoPath: "assets/images/schools/isima.svg",
          schoolUrl: "https://www.isima.fr/",
          degree: "Engineer in Information Systems and Decision Support",
          location: "Clermont-Ferrand, France",
          description: "Engineering program specialized in data engineering, big data, and decision support systems."
        },
        { //oth
          id: "oth",
          dates: "June 2023 - July 2023",
          school: "Ostbayerische Technische Hochschule (OTH)",
          schoolLogoPath: "assets/images/schools/oth.svg",
          schoolUrl: "https://www.oth-regensburg.de/en",
          degree: "Computer Science & Applied Mathematics",
          location: "Regensburg, Germany",
          description: "International exchange program focused on computer science and applied mathematics."
        },
        { //prepa
          id: "prepa",
          dates: "Sept 2020 - June 2022",
          school: "Lycée Moulay Youssef",
          schoolLogoPath: "assets/images/schools/moulay-youssef.svg",
          schoolUrl: "https://www.lycee-moulay-youssef.ma/",
          degree: "Preparatory Classes for Engineering Schools - PSI",
          location: "Rabat, Morocco",
          description: "Physics and Engineering Sciences (PSI), preparation for competitive engineering school entrance exams."
        },
        { //bac
          id: "bac",
          dates: "Sept 2019 - June 2020",
          school: "Moulay Youssef High School",
          schoolLogoPath: "assets/images/schools/moulay-youssef.svg",
          schoolUrl: "https://www.lycee-moulay-youssef.ma/",
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
          companyLogoPath: "assets/images/companies/atos.svg",
          companyUrl: "https://atos.net/en/",
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
          companyLogoPath: "assets/images/companies/spie-batignolles.svg",
          companyUrl: "https://www.spiebatignolles.fr/en/",
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
          companyLogoPath: "assets/images/companies/sopra-steria.svg",
          companyUrl: "https://www.soprasteria.com/en",
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
        { // dbt
          id: "dbt-fundamentals",
          name: "dbt Fundamentals",
          organization: "dbt Labs",
          logoPath: "assets/images/certifications/dbt.svg",
          date: "May 9, 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://www.credential.net/918ebda1-b69c-4ff5-afe2-4319a65f2339#acc.ej2UDBwO",
          whatILearned: "Fundamentals of dbt: connecting to a warehouse and Git repo, modeling, sources, testing, documentation, and deployment.",
          skills: [
            "dbt",
            "dbt Cloud / dbt Learn",
            "Data Modeling",
            "Sources",
            "Tests",
            "Documentation",
            "Deployment",
            "Jinja",
            "Macros",
            "Git"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_5
          id: "snowflake-hands-on-data-engineering",
          name: "Hands-On Essentials: Data Engineering Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "May 2, 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/007ca52e-ec4b-440c-ae15-dfeca6b887a3",
          whatILearned: "Hands-on Snowflake data engineering workshop: timezones & timestamp formats, CTAS, Streams/CDC, Tasks, MERGE, query profiles, Snowpipe continuous loading, window functions, and advanced SQL. Worked with JSON (paths + casts), session settings, task history/dependencies, and dashboards.",
          skills: [
            "Timezones and Timestamp Formats",
            "CTAS",
            "Snowflake Streams/CDC",
            "Snowflake Tasks",
            "Parsing JSON with Paths and Casts",
            "Session Settings",
            "Query Profiles",
            "SQL Merge Statements",
            "Task History and Dependency",
            "Snowpipe Continuous Loading",
            "SQL Window Function",
            "Snowflake Dashboards",
            "Storing Metadata in Columns",
            "Advanced SQL"
          ],
          showIn: ["fr", "en"]
        },
        { //snowflake_4
          id: "snowflake-hands-on-data-lake",
          name: "Hands-On Essentials: Data Lake Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "April 28, 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/c39edae8-57ec-4fc0-bd18-ad3d86fd4ccf",
          whatILearned: "Hands-on workshop on non-loaded (staged) data in Snowflake: creating and managing stages, querying staged data prior to load, working with file formats (Parquet), Directory Tables, external tables, UDFs, geospatial functions (GeoJSON), and Marketplace data shares.",
          skills: [
            "Snowflake Stages",
            "Querying Staged Data",
            "File Formats",
            "Directory Tables",
            "Parquet",
            "GeoSpatial Functions",
            "geoJSON",
            "Snowflake User Defined Functions",
            "Marketplace Data Shares",
            "External Tables"
          ],
          showIn: ["fr", "en"]
        },
        { // snowflake_3
          id: "snowflake-hands-on-data-app-builders",
          name: "Hands-On Essentials: Data Application Builders Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "April 23, 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/c2d0bd38-dc38-480a-8264-fd666226baeb",
          whatILearned: "Built data applications with Snowflake as a backend: created Streamlit forms to collect data, wrote Python to insert/retrieve data from Snowflake tables, and used REST APIs (API keys, requests) for ingestion.",
          skills: [
            "Streamlit",
            "Streamlit in Snowflake",
            "Python",
            "pandas",
            "Intro to Variables",
            "Intro to APIs",
            "Intro to API Keys",
            "Intro to CLIs",
            "SnowSQL CLI",
            "SnowPark",
            "Intro to Functions"
          ],
          showIn: ["fr", "en"]
        },
        { // snowflake_2
          id: "snowflake-essentials",
          name: "Hands-On Essentials: Collaboration, Marketplace & Cost Estimation",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "April 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/d594df93-b229-4b46-aefe-046658ff3985",
          whatILearned: "Created listings with Provider Studio, shared/consumed datasets through Marketplace, and monitored/estimated Snowflake costs. Strengthened SQL fundamentals (GROUP BY, JOIN, UPDATE) and control-flow concepts (BEGIN/END, variables, cursors).",
          skills: [
            "SQL Basics",
            "SQL Intermediate",
            "SQL UPDATE",
            "SQL Cursor",
            "SQL Block Scripting/Control-of-Flow",
            "Local SQL Variables",
            "COPY INTO",
            "Snowflake COPY INTO",
            "File Formats",
            "Column Name Matching",
            "Secure UDFs",
            "Secure Views",
            "Snowflake Data Marketplace",
            "Data Listing Development",
            "Snowflake Provider Studio",
            "Snowflake Cost Categories",
            "Snowflake on Azure",
            "Snowflake on GCP",
            "ORGADMIN Role",
            "Account Creation"
          ],
          showIn: ["fr", "en"]
        },
        { // snowflake_1
          id: "snowflake-hands-on-data-warehousing",
          name: "Hands-On Essentials: Data Warehousing Workshop",
          organization: "Snowflake",
          logoPath: "assets/images/certifications/snowflake.svg",
          date: "April 15, 2025",
          expirationStatus: "Does not expire",
          credentialUrl: "https://achieve.snowflake.com/e3227875-7a1e-4e2a-8c5b-992d415bf154",
          whatILearned: "Hands-on Snowflake fundamentals: creating and managing databases/schemas/tables/views, managing warehouses (compute), file formats and external stages, loading data (COPY INTO), and ingesting/querying CSV & JSON data (path notation, CAST).",
          skills: [
            "Snowflake Databases",
            "Snowflake Warehouses",
            "Snowflake SQL Worksheets",
            "Snowflake External Stages",
            "SQL",
            "File Formats",
            "COPY INTO",
            "JSON",
            "CSV"
          ],
          showIn: ["fr", "en"]
        },
        { // azure databricks
          id: "udemy-azure-databricks-spark-de",
          name: "Azure Databricks & Spark for Data Engineers: Hands-on Project",
          organization: "Udemy",
          logoPath: "assets/images/certifications/azure.svg",
          date: "October 31, 2024",
          expirationStatus: "Does not expire",
          credentialUrl: "https://ude.my/UC-a4d1fe07-c461-4eaa-aa19-2a4ef34e81c1",
          whatILearned: "Built a full end-to-end data engineering project on Azure: Databricks (notebooks, clusters, jobs), ingestion & transformations with PySpark/Spark SQL, Lakehouse implementation with Delta Lake (MERGE, time travel), orchestration with Azure Data Factory (pipelines, triggers, monitoring), Power BI integration, and governance with Unity Catalog (metastore, lineage, access control).",
          skills: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Spark Core",
            "Delta Lake",
            "Lakehouse Architecture",
            "Azure Data Lake Storage Gen2",
            "Azure Data Factory (ADF)",
            "Power BI",
            "Unity Catalog",
            "Data Governance",
            "ETL/ELT Pipelines",
            "Incremental Load",
            "JSON",
            "Parquet"
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