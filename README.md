# ESENCIAL · Susana Ares

Web de recuperación postparto de Susana Ares.

## Stack
- React 18
- CSS puro (sin Tailwind, sin librerías de UI)
- Lucide React (iconos)
- Desplegado en Vercel

## Estructura de carpetas

```
src/
├── components/
│   ├── Header.js       ← Navegación fija
│   ├── Footer.js       ← Pie de página
│   └── VideoModal.js   ← Modal de vídeo
├── pages/
│   ├── HomePage.js        ← Página principal
│   ├── ProgramaPage.js    ← Página de ventas del programa
│   └── ConfirmacionPage.js ← Página post-compra
├── App.js              ← Enrutado principal
├── index.js            ← Punto de entrada
└── index.css           ← Estilos globales y variables CSS
public/
└── index.html          ← Aquí va Google Tag Manager
```

## Desarrollo local

```bash
npm install
npm start
```

## Google Tag Manager

En `public/index.html` hay comentarios marcados con `GTM-XXXXXXX`.
Sustituye ese ID por el tuyo y descomenta los bloques.

## Añadir nuevas páginas

1. Crea el fichero en `src/pages/NuevaPagina.js`
2. Importa el componente en `src/App.js`
3. Añade una condición en el `<main>` de `App.js`
4. Añade el enlace en `src/components/Header.js`

## Despliegue

Push a la rama `main` de GitHub → Vercel despliega automáticamente.
