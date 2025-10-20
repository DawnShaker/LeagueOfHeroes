# D&D 5E Handbook & Rules Guide

A comprehensive web-based handbook for Dungeons & Dragons 5th Edition, featuring campaign-specific rules, character options, and interactive tools. Built with Astro for optimal performance and static site generation.

## Overview

This project serves as a digital reference guide for D&D 5E campaigns, providing:

- Campaign-specific house rules and errata
- Character creation guidelines and options
- Interactive tools for character building and encounter management
- Comprehensive database of species, classes, backgrounds, feats, spells, and items
- Bastion system rules and downtime activities
- Third-party content integration (e.g., Blood Hunter class)

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── classes/        # Class-related components
│   │   ├── handbook/       # Handbook display components
│   │   ├── navigation/     # Navigation components
│   │   ├── rules/          # Rules section components
│   │   ├── species/        # Species/race display components
│   │   ├── spells/         # Spell card components
│   │   └── tools/          # Interactive tool components
│   ├── data/               # Static game data
│   │   ├── backgrounds/    # Character backgrounds
│   │   ├── classes/        # Class definitions
│   │   ├── downtime/       # Downtime activities
│   │   ├── feats/          # Feat definitions
│   │   ├── items/          # Equipment and items
│   │   ├── magicItems/     # Magic items
│   │   ├── species/        # Playable species/races
│   │   └── spells/         # Spell database
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro    # Main layout with navigation
│   ├── pages/              # Route pages
│   │   ├── api/            # API endpoints
│   │   ├── rules/          # Rules pages
│   │   ├── tools/          # Interactive tools
│   │   └── third-party/    # Third-party content
│   ├── styles/             # Global styles
│   │   └── theme.css       # Theme variables and dark mode
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── .env                     # Environment variables
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## Key Features

### Content Sections

- **Character Options**: Species, classes, backgrounds, and feats
- **Equipment**: Standard items and magic items
- **Spells**: Searchable spell database
- **House Rules**: Campaign-specific modifications
- **Heroes League Errata**: Custom errata and clarifications
- **Bastion System**: Building and managing bastions
- **Downtime Activities**: Structured downtime mechanics
- **Third-Party Content**: Curated content from trusted sources

### Interactive Tools

- **Point Buy Calculator** (`/tools/point-buy`): Calculate ability scores using point buy system
- **Encounter Builder** (`/tools/encounter-builder`): Build balanced encounters

### Special Pages

- **Sigil Map**: Interactive map of the city of Sigil
- **Discord Integration**: Link to campaign Discord server
- **FAQ**: Frequently asked questions
- **Character Guide**: Step-by-step character creation

## Technology Stack

- **Framework**: Astro 4.15.3
- **Language**: TypeScript
- **Styling**: CSS with custom properties for theming
- **Build**: Static Site Generation (SSG)
- **Dark Mode**: CSS-based theme toggle

## Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands |

## Development

### Adding New Content

1. **Species/Races**: Add to `src/data/species/` and create detail page in `src/pages/races/[id].astro`
2. **Classes**: Add to `src/data/classes/` and create detail page in `src/pages/classes/[id].astro`
3. **Spells**: Add to `src/data/spells/` and create detail page in `src/pages/spells/[id].astro`
4. **Items**: Add to `src/data/items/` or `src/data/magicItems/`
5. **Rules**: Create components in `src/components/rules/` and pages in `src/pages/`

### Navigation

Navigation is configured in `src/components/navigation/config/navigationLinks.ts`. Each section can have:

- Direct links
- Dropdown menus with multiple options
- Nested categorization

### Theming

The site supports light and dark modes via CSS custom properties defined in `src/styles/theme.css`. Theme toggle is available in the navigation bar.

## Type System

TypeScript interfaces are defined in `src/types/` for:

- `Background`: Character backgrounds
- `Class`: Character classes
- `Feat`: Feats and abilities
- `Species`: Playable races/species
- `Spell`: Spells and cantrips

## Contributing

When adding new content:

1. Follow existing type definitions
2. Maintain consistent formatting in data files
3. Create reusable components for repeated UI patterns
4. Update navigation links when adding new pages
5. Test both light and dark themes

## License

Private project for campaign use.