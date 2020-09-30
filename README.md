# FE Starter

A lightweight kickstarter for webpack based Front End projects, includes a basic routing and a simple custom [SCSS starter Library](https://github.com/CatinhoCR/fe-webpack-starter/tree/master) I've worked on for fun.
See the [minimal version](https://github.com/CatinhoCR/fe-webpack-starter/tree/minimal) if you're only after the webpack build tasks and workflow, without the SCSS Library or pretty much anything else.

## Features

- Super lightweight and helpful **custom** [SCSS Library](#scss-lib)
- ES6 Support via [babel](https://babeljs.io/)
- JavaScript Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Style Linting via [stylelint](https://stylelint.io/)

## Installation

```bash
yarn install
```

If you'd rather use NPM, simply delete the `yarn.lock` file in the root folder and run `npm install`.

### Start Dev Server

```bash
npm run start
```

### Build Prod Version

```bash
npm run build
```

### Custom SCSS Library {#scss-lib}

The custom SCSS Library is work in progress (and will forever be), PRs are welcome and any feedback too. Here's a comprehensive guide to what's going on there (To be written and specified)

- [ ] Details on folder structure
- [ ] Details on variables and each type
- [ ] Functions & mixins explained
- [ ] Usage & customization details

#### Notes

When you run `npm run build`, [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) is used to move the css to a separate file. The css file gets included in the head of the `index.html`.

Originally based & extended from [webpack starter](https://github.com/wbkd/webpack-starter).
