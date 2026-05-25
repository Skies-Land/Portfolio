# CONFIGURATION TECHNIQUE

Ce document résume la configuration technique du projet de **portfolio**.

## 🛠️ Stacks
* <img src="../src/assets/svg/astrojs.svg" width="18" align="center" /> **Framework front :** **[Astro](https://docs.astro.build/fr/getting-started/)**
* <img src="../src/assets/svg/react.svg" width="18" align="center" /> **Composants dynamique :** **[React](https://react.dev/)**
* <img src="../src/assets/svg/typescript.svg" width="18" align="center" /> **Langage :** **[TypeScript](https://www.typescriptlang.org/)**
* <img src="../src/assets/svg/markdown.svg" width="18" align="center" /> **Données :** **[Markdown](https://docs.framasoft.org/fr/grav/markdown.html)**
* <img src="../src/assets/svg/tailwind-css.svg" width="18" align="center" /> **Styling :** **[Tailwind CSS](https://tailwindcss.com/)**
* <img src="../src/assets/svg/react-icons.svg" width="18" align="center" /> **Icons :** **[React Icons](https://react-icons.github.io/react-icons/)**

## 📦 Dépendances principales
* <img src="../src/assets/svg/marked.svg" width="18" align="center" /> **[Marked](https://marked.js.org/)** : Parseur léger pour compiler les données Markdown (Fichiers YAML) en HTML.
* 🔔 **[Sonner](https://sonner.emilkowal.ski/)** : Système de notifications Toast moderne et accessible pour React.
* <img src="../src/assets/svg/tailwind-css.svg" width="18" align="center" /> **[Tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** : Plugin Tailwind pour simplifier la création d'animations fluides.

## 🚀 Déploiement
* <img src="../src/assets/svg/netlify.svg" width="18" align="center" /> **Hébergement :** **[Netlify](https://www.netlify.com/)**
* **Déploiement :** CI/CD via GitHub

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

## 📂 Organisation du code
```text
├── documentation/     # Documentation technique du projet
├── public/            # Fichiers exposés à la racine
└── src/               # Code source de l'application
    ├── assets/        # Fichiers statiques internes
    ├── components/    # Composants de l'application
    │   ├── site/      # Composants structurels Astro purs
    │   └── ui/        # Composants d'interface
    ├── data/          # Fichiers de données Markdown
    ├── layouts/       # Modèles de mise en page globale
    ├── pages/         # Système de routage d'Astro
    │   ├── projets/   #
    │   │   └── [id].astro # Page générée dynamiquement (getStaticPaths)
    │   └── index.astro    # Page d'accueil
    └── styles/        # Configuration Tailwind (global.css)
```

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**