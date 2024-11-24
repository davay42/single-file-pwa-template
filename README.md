# Single file progressive web-app template

This is a starting point for my current opinionated JS build environment that enables making compressed single file PWAs that can be easily installed on virtually any platform and also be run straight up from a local HTML file with full offline and embedding capabilities. And it means we are bringing more capabilities of browsers and devices to peoples hands. Let's explore this space.

## Tech Stack

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Native language of the web
- [Vite](https://vitejs.dev) - Lightning fast JavaScript development experience and build speed
- [Vue](https://vuejs.org) - Reactive components and robust composables
- [VueUse](https://vueuse.org) - Exceptionally useful Vue composables toolbox
- [UnoCSS](https://github.com/unocss/unocss) - Ultrafast utility-first CSS styling
- [Pug](https://pugjs.org) - Compact and conscise HTML templating engine to use in Vue SFCs

## How to use

1. Copy this repo code
2. Put meaningful content in all `_` placeholders found in
   - package.json
   - index.html
   - App.vue
   - public/manifest.json
   - public/sw.js
3. Run `pnpm i` in your terminal to install all dependencies
4. Run `pnpm run dev` to start a dev server with hot module replacement
5. Run `pnpm run build` to get your app built in the `dist` folder
