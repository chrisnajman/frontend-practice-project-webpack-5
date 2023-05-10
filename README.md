# Frontend Practice Project (Webpack 5)

## Description

This page is identical to [Frontend Practice Project](https://github.com/chrisnajman/frontend-practice-project) except
that it has been integrated into my [Basic Webpack 5 Setup with SASS, Babel, PostCSS, Self-hosted fonts and SVG Sprite](https://github.com/chrisnajman/webpack5-basic-setup) (GitHub).

**Webpack Note**

I had to use `copy-webpack-plugin` to copy across both the svg sprite and the `src\json\cards.json` files (see `webpack.config.js`).

This was because both these files are referenced from within the JavaScript.

The page is based on the [Abstract Project][abstract] design at
[Frontend Practice][frontend].

Although I followed the design most of the way, I became more interested in:

- working out how to use SVG Sprites,
- breaking down Javascript into modules,
- coordinating CSS Media queries and Javascript to control the mobile menu, and
- integrating it into Webpack 5,

than achieving absolute fidelity to the design.

## HTML

- `template` used for individual 'cards'.
- `dialog` element used for 'Sign in' and 'Submit request' forms.

## SCSS

- Webpack 5 uses Dart SASS. [Official documentation](https://sass-lang.com/dart-sass).
- `flexbox` is used for the overall page layout and many of the page elements.
- `grid` is used only for the 'cards' section.
- Responsive.

## PostCSS

- This takes care of any required browser prefixes (dependent on how you configure `.browserslistrc`).

## SVGs

- I used an SVG sprite to pull in most of the icons.
- The mobile navigation hamburger icon is written inline.

## Fonts

- The Google font, 'Roboto', is self-hosted (see my [self-hosting-fonts][fonts] page).

## Javascript

- Webpack's version of ES6 modules is slightly different: `index.js`, where all files are imported, uses e.g. `import "./navMobile"`, whereas ES6 Module `script.js` would list the file as `import navMobile from "./modules/components/nav-mobile.js"`.
- Transpilation to ES5
- **Important**: paths from JavaScript to external files (.json, .svg ...) must be in the form: `./json/cards.json`. The path **must not** be relative to the JavaScript file itself: `../json/cards.json`.
  - This becomes clear when we look at the file structure of the output folder :

```
docs/
  main.js
    json/
      cards.json
    svg/
      sprite.svg
  (other files...)
```

## JSON

- To simulate a database I've pulled in the individual cards via `cards.json`.

## Accessibility

- `ARIA` and `role` attributes used as required.

## Cloning, installation, publishing to Git/GitPages, etc.

See

- [Basic Webpack 5 Setup with SASS, Babel, PostCSS, Self-hosted fonts and SVG Sprite](https://github.com/chrisnajman/webpack5-basic-setup) and
- [One-page site template](https://github.com/chrisnajman/one-page-site-template)

## Sources

- [Frontend Practice Abstract Project][abstract]
- [Hamburger menu icon animation][codepen]
- [Accessibility for Hamburger Menu][accessibility]
- [SVG Editor][svgEditor]
- [Boxicons (free SVG icons)][boxicons]
- [How to create and use an SVG Sprite][sprite]
- [Font-size Clamp Generator for responsive typography][clamp]

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge

[abstract]: https://www.frontendpractice.com/projects/abstract
[codepen]: https://codepen.io/cossovich/pen/ExjpmRg
[accessibility]: https://medium.com/@linlinghao/accessibility-for-hamburger-menu-a37fa9617a89
[svgEditor]: https://svgeditoronline.com/editor/
[boxicons]: https://boxicons.com/
[sprite]: https://youtu.be/LgfLpEHqgGU
[clamp]: https://clamp.font-size.app/
[frontend]: https://www.frontendpractice.com/
[fonts]: https://github.com/chrisnajman/self-hosting-fonts
