# Personal Portfolio Website

Welcome to my personal portfolio website! This site is built with [Astro](https://astro.build/) and showcases my work, skills, and blog posts. It is designed for performance, accessibility, and easy content management.

## ✨ Features

- 🚀 Fast and lightweight static site
- 🎨 Minimal, customizable styling
- 📝 Blog section powered by Markdown & MDX
- 📄 Project and experience showcase
- 🔍 SEO-friendly with canonical URLs and OpenGraph data
- 🗺️ Sitemap and RSS feed support
- 📱 Responsive design for all devices

## 📁 Project Structure

The project is organized as follows:

```text
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Blog posts and content collections
│   ├── layouts/         # Page and post layouts
│   └── pages/           # Site pages (about, blog, home, etc.)
├── astro.config.mjs     # Astro configuration
├── package.json         # Project metadata and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

- **Pages** are located in `src/pages/` and define the main routes (e.g., Home, About, Blog).
- **Components** in `src/components/` are used throughout the site for layout and UI.
- **Content** in `src/content/` includes blog posts and other Markdown/MDX files.
- **Static assets** (images, fonts) are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)

---

This portfolio is inspired by modern, minimal web design and aims to provide a clean, accessible showcase of my work and writing.
