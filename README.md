# FE Starter

A lightweight kickstarter for webpack based Front End projects, including a basic routing and a simple custom SCSS starter lib.

## Installation

```bash
yarn install
```

If you'd rather use NPM, simply delete the `yarn.lock` file in the root folder and run `npm install`.

### Start Dev Server

```bash
npm start
```

### Build Prod Version

```bash
npm run build
```

### Features

- ES6 Support via [babel](https://babeljs.io/)
- JavaScript Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

Feel free to do PR's or fork. Originally based & extended from [this repo](https://github.com/wbkd/webpack-starter).
