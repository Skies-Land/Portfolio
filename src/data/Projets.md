---
projets:
# PROJET : M-motors -- L'angle Full-Stack ✅
  - number: 1
    id: m-motors
    title: M-Motors
    shortDescription: Plateforme web full-stack de vente et location de véhicules avec espace utilisateur sécurisé.
    tags: [React, TypeScript, Tailwind, FastAPI, MongoDB]
    span: lg

    # ⬇️ Information pour la page de description ⬇️
    year: 2026
    type: Projet Académique (Bac+3 - STUDI)
    coverImage: /projet-m-motors.png
    longDescription: Conçu dans le cadre de ma formation de **Développeur d'Application Web (Bac+3)**. M-Motors est une application web complète qui met en relation des utilisateurs pour la vente et la location de véhicules. L'enjeu majeur était de concevoir une architecture front-end capable de s'interfacer de manière sécurisée avec une base de données cloud NoSQL, avec la digitalisation d'un tunnel d'achat complet.
    role: Développeur d'application web
    expertiseAngle: L'angle Full-Stack
    architecture: [NoSQL, Authentification JWT, Déploiement Cloud]
    skills:
      - Conception d'une architecture client-serveur découplée (Vite/FastAPI)
      - Modélisation de base de données NoSQL (MongoDB Atlas) et Cloudinary
      - Authentification utilisateur sécurisée via JSON Web Tokens (JWT)
      - Modélisation UML, rédaction des User Stories et planification Scrum
      - Déploiement automatisé et intégration continue sur Netlify & Render
    Issues: |
      Le défi majeur consistait à réaliser la refonte d'une application web pour proposer un parcours client 100% dématérialisé (téléversement de documents, suivi de dossier). Le projet devait également répondre aux exigences d'entreprise en matière de performance, de sécurité et d'hébergement Cloud, tout en respectant un développement piloté par la méthode agile Scrum.
    Approach: |
      J'ai opté pour une architecture découplée : **Vite.js + React + TypeScript + Tailwind CSS** côté client, connectée à une API **FastAPI en Python** utilisant **MongoDB** comme base de données.
      
      Le développement s'est organisé :
      - **Conception** : Définition des fonctionnalités clés pour le MVP, état de l'art du des outils et méthodologies pour proposer une solution adéquate.
      - **Gestion et pilotage** : Choix de l'approche Agile, préparation des user stories, gestion des risques via une matrice de criticité, et mise en place d'un plan de tests.
      - **Développement** : Prototypage de maquette avec l'IA, création d'une base de données NoSQL avec **MongoDB** et stockage des images sur **Cloudinary**. Développement du front-end, (page de catalogue, espace client) etc. Développement du back-end avec mise en place de l'authentification **JWT** et sécurisation des routes.
      - **Déploiement** : CI/CD sur **Netlify** (Front) et **Render** (Back).
      - **Documentation** : Pour offrir une transparence totale sur l'architecture et les choix techniques, une documentation complète est disponible sur le dépôt GitHub.
    Result: |
      J'ai développé un Produit Minimum Viable (MVP) fonctionnel composé de **27 User Stories**, réparties entre un espace client sécurisé et un back-office pour les employés.
    githubUrl: https://github.com/Skies-Land/Concept-M-Motors
    liveUrl: https://m-motors-skiesland.netlify.app/

# PROJET : Coders Monkeys -- L'angle Architecture Data & Back-end ✅
  - number: 2
    id: coders-monkeys
    title: Coders Monkeys
    shortDescription: Application web SaaS de partage de projets pour développeurs avec Firebase et Next.js.
    tags: [Next.js, Firebase, Tailwind CSS, TypeScript]
    span: md

    # ⬇️ Information pour la page de description ⬇️
    year: 2026
    type: Projet Personnel (Remote Monkey - YouTube)
    coverImage: /projet-coders-monkeys.png
    longDescription: Création d'une application web complète destinée aux développeurs front-end pour partager leurs projets et s'entraider. Ce projet m'a permis de concevoir une architecture moderne avec Next.js et d'intégrer un écosystème Serverless complet avec Firebase pour la base de données, l'authentification et le stockage.
    role: Développeur Front-End
    expertiseAngle: L'angle Architecture Data & Back-end
    architecture: [Serverless, App Router, Real-time Database]
    skills:
      - Maîtrise des concepts d'architecture Next.js (App Router, Server Components)
      - Intégration complète de Firebase (Auth, Firestore, Storage) en temps réel
      - Conception d'un design system typé TypeScript et configuré avec Tailwind CSS
      - Implémentation d'un tunnel d'inscription interactif avec react-hook-form
      - Création de Serverless Cloud Functions isolées pour les logiques complexes
    Issues: |
      L'enjeu majeur était de créer un système complet comprenant une base de données en temps réel (pour publier et filtrer des projets), un système d'authentification robuste (inscription, connexion, récupération de mot de passe) et un "onboarding" interactif pour les nouveaux utilisateurs, le tout avec un design professionnel basé sur une maquette Figma.
    Approach: |
      Développement structuré avec **Next.js** selon l'architecture "module-container-views" :
      
      - **Design System** : Création de composants réutilisables typés avec **TypeScript** et stylisés via **Tailwind CSS**.
      - **Onboarding & UX** : Mise en place d'un tunnel d'inscription interactif avec formulaires asynchrones (via `react-hook-form`).
      - **Back-end Serverless** : Intégration avancée de **Firebase** (Authentication, Firestore, Storage) pour gérer les sessions utilisateurs, les opérations CRUD en temps réel, et l'upload d'images de profil.
      - **Cloud Functions** : Déploiement de fonctions back-end isolées pour les mises à jour utilisateur complexes.
    Result: |
      Une plateforme SaaS performante, sécurisée et hébergée sur Firebase Hosting. Elle propose une gestion de compte fluide, une sécurité stricte des données et un design system cohérent et évolutif.
    githubUrl: https://github.com/Skies-Land/coders-monkeys/tree/main/front-end
    liveUrl: https://coders-monkeys-42518.firebaseapp.com/


# PROJET : Kasa -- L'angle UI & UX ✅
  - number: 3
    id: kasa
    title: Kasa
    shortDescription: Création d'une application web de location immobilière moderne avec React.
    tags: [React, React Router, Sass, Vite.js]
    span: md

    # ⬇️ Information pour la page de description ⬇️
    year: 2024
    type: Projet Académique (Bac+2 - OpenClassrooms)
    coverImage: /projet-kasa.png
    longDescription: Dans le cadre de ma formation d'Intégrateur Web, ce projet m'a permis de construire le front-end d'une application web de location de logements entre particuliers. L'accent a été mis sur la création de composants modulaires et la gestion du routage multipages (SPA).
    role: Intégrateur Web
    expertiseAngle: L'angle UI & UX
    architecture: [Component-Based UI, Routing]
    skills:
      - Conception de composants d'interface hautement modulaires et réutilisables (React)
      - Gestion du routage et des transitions dynamiques côté client avec React Router
      - Structuration CSS avancée par Sass selon la méthodologie SMACSS / pattern 7-1
      - Intégration pixel-perfect responsive d'une maquette Figma complexe
      - Intégration de préférences d'affichage (mode sombre automatique)
    Issues: |
      Il fallait créer une expérience fluide avec des transitions entre de multiples pages (Accueil, À propos, Page de logement détaillé) sans utiliser de requêtes serveur à chaque clic, tout en respectant fidèlement une maquette **Figma**.
    Approach: |
      Développement d'une application avec **React**, utilisant **React Router** pour la navigation et gestion du style avec **Sass**. Configuration d'un profil de couleur avec **prefer-color-scheme** ce qui permet aux utilisateurs de basculer entre le mode sombre et le mode clair en fonction du profil de couleur de leur système d'exploitation. J'ai organisé ce projet (composants **React** et feuilles de style **Sass**) en adoptant la logique du **pattern 7-1**, et j'ai simulé des appels API sur un fichier JSON local.
    Result: |
      Une interface web responsive, modulaire, structurée et facilement maintenable, offrant une navigation instantanée, intégrant des animations CSS fluides, des fonctionnalités interactives (carrousels d'images, menus accordéons) et un design moderne et attrayant.
    githubUrl: https://github.com/Skies-Land/Projet_8_OpenClassrooms_-_Kasa
    liveUrl: https://projet-8-openclassrooms-kasa.netlify.app/

# PROJET : Nina Carducci -- L'angle Performance & SEO ✅
  - number: 4
    id: nina-carducci
    title: Nina Carducci
    shortDescription: Optimisation experte des performances, du référencement SEO et de l'accessibilité.
    tags: [SEO, Lighthouse, Accessibilité, WebPerf]
    span: lg

    # ⬇️ Information pour la page de description ⬇️
    year: 2024
    type: Projet Académique (Bac+2 - OpenClassrooms)
    coverImage: /projet-nina-carducci.png
    longDescription: "Mission d'optimisation pour le portfolio d'une photographe. Ce projet était purement centré sur la qualité logicielle et visuelle : analyser un site existant, identifier ses goulots d'étranglement, et refactoriser son code pour le rendre extrêmement performant et accessible."
    role: Développeur web / Expert SEO
    expertiseAngle: L'angle Performance & SEO
    architecture: [Optimisation Front-End]
    skills:
      - Audit et identification des goulots d'étranglement avec Lighthouse et Wave
      - Compression et optimisation des formats d'images (redimensionnement, WebP)
      - Référencement naturel technique (méta-données riches, sémantique HTML5)
      - Accessibilité et conformité RGAA (attributs ARIA, contrastes et navigation clavier)
      - Amélioration radicale des scores WebPerf (FCP, LCP, CLS supérieurs à 90)
    Issues: |
      Le site initial présentait des temps de chargement très longs dus à des images non optimisées, un mauvais référencement organique (SEO), et des problèmes d'accessibilité empêchant la bonne navigation par lecteurs d'écran.
    Approach: |
      Audits complets réalisés via **Lighthouse** et **Wave**. Redimensionnement et compression des ressources (formats webp), implémentation de balises sémantiques HTML5, ajout des attributs ARIA pour l'accessibilité, amélioration des méta-données et configuration des requêtes réseau.
    Result: |
      Les scores Lighthouse sont passés au vert (+90/100). Le trafic potentiel et la portée du site ont été considérablement améliorés grâce à un référencement performant et une expérience de navigation accessible à tous les utilisateurs.
    githubUrl: https://github.com/Skies-Land/Projet_9_OpenClassrooms_-_Nina_Carducci
    liveUrl: https://skies-land.github.io/Projet_9_OpenClassrooms_-_Nina_Carducci/
---