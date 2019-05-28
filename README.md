[![Maintainability](https://api.codeclimate.com/v1/badges/a432721f785ec66cbeef/maintainability)](https://codeclimate.com/github/bl4ck4ndbr0wn/react-redux-webpack/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a432721f785ec66cbeef/test_coverage)](https://codeclimate.com/github/bl4ck4ndbr0wn/react-redux-webpack/test_coverage) [![Build Status](https://travis-ci.org/bl4ck4ndbr0wn/react-redux-webpack.svg?branch=develop)](https://travis-ci.org/bl4ck4ndbr0wn/react-redux-webpack) [![Coverage Status](https://coveralls.io/repos/github/bl4ck4ndbr0wn/react-redux-webpack/badge.svg?branch=chore/166102709-code-climate-coverage)](https://coveralls.io/github/bl4ck4ndbr0wn/react-redux-webpack?branch=chore/166102709-code-climate-coverage)
# React redux using Webpack and Babel 
react-starter is a simple starting point for Single Page Apps using React, Babel, and Webpack.

## Getting Started

> _(Note: this project was created in Node v10.15.3)_

Clone this repo and install dependencies with `npm install`.

### Starting The Dev Server

To start the development server and start hacking, run

```BASH
npm start:dev
```

### Starting The Test Runner

To run the test, run
```BASH
npm test
```

This starter uses webpack-dev-server to spin up an Express server with Hot-Reloading capability. Changes to code in `.src` should cause pages to reload.

## Static Assets

Static Assets are served from the `/public` folder.

## Styling

Stylesheets are bundled along with project files in the `.src` folder, so you can divide your stylesheets by component (or any other configuration you plan)

## Bundling

To bundle your files, run

```BASH
npm run build
```

This will bundle your files at `<projectRoot>/dist/bundle.js`. `index.html` already references this location, allowing you build and open `index.html` without having to start the server. 
> Note that there are no optimizations in place at this time.
