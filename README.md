# Astro Starter MVP

## Setup 

```
npm install
```

## Additional Features
- Turbolinks - for smooth navigation
- Sass separation - for globals (eg mixins, functions, etc.)

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── styles
│   ├── components/
│   │   └── Card.astro
│   ├── data/
│   │   └── nav.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── about.astro
│       └── index.astro
└── package.json
```
Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
