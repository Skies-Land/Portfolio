# CONFIGURATION TECHNIQUE

Ce document résume la configuration technique du projet de **portfolio**.

## 🛠️ Stacks
* **Framework front :** **[Astro](https://docs.astro.build/fr/getting-started/)**
* **Composants dynamique :** **[React](https://react.dev/)**
* **Langage :** **[TypeScript](https://www.typescriptlang.org/)**
* **Données :** **[Markdown](https://docs.framasoft.org/fr/grav/markdown.html)**
* **Styling :** **[Tailwind CSS](https://tailwindcss.com/)**
* **Icons :** **[React Icons](https://react-icons.github.io/react-icons/)**

## 🚀 Déploiement
* **Hébergement :** **[Netlify](https://www.netlify.com/)**
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
├── public/            # Fichiers exposés directement à la racine du site
└── src/               # Code source de l'application finale (Astro)
│   ├── assets/        # Fichiers statiques
│   ├── components/    # Composants réutilisables
│   │   ├── site/      # Composants majeurs et structurels
│   │   └── ui/        # Logique fonctionnelle
│   ├── data/          # Fichiers de données (frontmatter)
│   ├── layouts/       # Modèles de mise en page globale
│   ├── pages/         # Pages de l'application
│   └── styles/        # Feuilles de style globales
```

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**