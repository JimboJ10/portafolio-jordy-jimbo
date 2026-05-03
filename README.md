# Portafolio Jordy Jimbo

Portafolio personal construido con React, Vite y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

## Despliegue en GitHub Pages

Este proyecto ya incluye un workflow en `.github/workflows/deploy.yml`.

1. Crea un repositorio en GitHub, por ejemplo `portafolio-jordy-jimbo`.
2. Sube el proyecto a la rama `main`.
3. En GitHub, entra a `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Cada push a `main` compilará y publicará el contenido de `dist`.

La configuración de Vite usa `base: './'`, así que los assets funcionan tanto en GitHub Pages como en otros hosts estáticos.

## Despliegue manual con gh-pages

```bash
npm run deploy
```

Esto compila el proyecto y publica `dist` en la rama `gh-pages`.

## Otros hosts

También puedes desplegarlo en Netlify, Vercel, Cloudflare Pages o Render como sitio estático:

- Build command: `npm run build`
- Publish directory: `dist`
