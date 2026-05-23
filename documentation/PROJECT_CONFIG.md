# CONFIGURATION TECHNIQUE

Ce document résume la configuration technique du projet de **portfolio**.

## 🏗️ Architecture
* **Front-end :** ...
* **Hébergement :** **[Netlify](https://www.netlify.com/)**
* **Déploiement :** CI/CD via GitHub


## 🛠️ Stacks
* **Framework front :** **[Astro](https://docs.astro.build/fr/getting-started/)**
* **Styling :** **[Tailwind CSS](https://tailwindcss.com/)**
* **Composants dynamique :** **[React](https://react.dev/)**
* **Langage :** **[TypeScript](https://www.typescriptlang.org/)**
* **Contenu (base de données) :** **[Markdown](https://docs.framasoft.org/fr/grav/markdown.html)**


## 🎨 Palette de couleurs
* **Fond Principal :** ` #0d0d0f ` *(Noir carbone profond)*.
* **Surfaces (Cartes, Menus) :** ` #1a1a1e ` *(Gris anthracite pour créer une élévation subtile)* avec une bordure #27272A.
* **Couleur Primaire :** ` #8b5cf6 ` *(Violet améthyste - pour les boutons primaires, les tags et les liens au survol)*.
* **Bordures & Séparateurs :** ` #2c2c2e ` *(Gris sidéral pour délimiter les espaces sans alourdir l'interface)*.
* **Texte Principal :** ` #e4e4e7 ` *(Gris perle, beaucoup plus doux pour les yeux que le blanc pur)*.
* **Texte Secondaire :** ` #a1a1aa ` *(Gris muté, idéal pour les dates, les descriptions courtes et le footer)*.


## 🪟 Principes UI
* **Glassmorphism subtil :** Un effet de flou (`backdrop-blur-md`) combiné à un fond très légèrement transparent (`bg-[#1A1A1E]/80`), uniquement sur la barre de navigation (`navbar`) fixée en haut.
* **Bordures lumineuses :** Les cartes de projets doivent avoir une bordure d'un pixel d'épaisseur, très discrète (`border-white/5`).
* **Micro-interactions :** Au survol d'une carte de projet, celle-ci subit une très légère translation vers le haut (`-translate-y-1`) et sa bordure s'éclaire subtilement.


## 🔤 Typographie
* **Titres et Corps de texte :** `Geist` (ou `Geist Sans). Typographie moderne, propre et offrant une excellente lisibilité.
* **Détails techniques :** `Geist Mono`. Utilisation pour les tags de projets et les petits labels techniques.


## 🧩 Organisation du code
*A venir*