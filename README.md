# react-next-starter

![Github Workflow](https://github.com/KASTINpl/react-next-starter/workflows/Github%20Workflow/badge.svg)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

Next.js starter with TS, MaterialUI, Redux, Storybook, Cypress and many more usable developer tools included

## Features

- [React](https://github.com/facebook/react/) ^18 + [Next.js](https://nextjs.org) ^13 + [TypeScript](https://github.com/Microsoft/TypeScript) ^5
- [MUI](https://mui.com/) - Material UI ^5 with [SSR support](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
- [Prettier](https://github.com/prettier/prettier) + [ESLint](https://github.com/eslint/eslint) + [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) + [Husky](https://github.com/typicode/husky)
- [Redux](https://redux.js.org) + [Redux toolkit](https://redux-toolkit.js.org)
- [Cypress](https://github.com/cypress-io/cypress) for `test:e2e`
- [Jest](https://github.com/facebook/jest) + [Testing library](https://testing-library.com) for `test:unit`
- [Storybook](https://github.com/storybooks/storybook) ^7
- Github workflow for `lint` and `test`
- [PlopJS](https://plopjs.com) scripts
- bonus: `WindowProgressBar` component (loading page indicator)
- bonus2: `WhiteSource` [Renovate](https://renovatebot.com) integration setup

## Getting started

```bash
yarn create next-app -e https://github.com/KASTINpl/react-next-starter APP_NAME
cd APP_NAME
yarn dev
```

## All commands

### `yarn dev`

Runs development server on [localhost:3000](http://localhost:3000).

### `yarn build`

Build application for production use.

### `yarn start`

Start built application. You need to run `build` first.

### `yarn test`

Run all tests.

### `yarn test:unit`

Run all unit tests with jest.

### `yarn test:unit:coverage`

Run all unit tests with jest and generate coverage reports. This will fail if constraints `coverageThreshold` in `jest.config.js` are violated.

### `yarn test:unit:update`

Run all unit tests with jest and update all outdated snapshots.

### `yarn test:unit:watch`

Run all unit tests with jest using developer mode - watching all the changes.

### `yarn test:e2e`

Run all integration tests with headless cypress.

### `yarn test:e2e:ui`

Run all integration tests with cypress UI.

### `yarn test`

Run `test:unit` and `test:e2e` in parallel

### `yarn lint:types`

Run ESlint check

### `yarn lint:format`

Run Prettier check

### `yarn lint`

Run `lint:types` and `lint:format` in parallel

### `yarn storybook`

Run Storybook server.

### `yarn build-storybook`

Build Storybook documentation for production use.

### `yarn plop component NewComponent`

Create a new component
see `./plop-templates/component`

## Useful links, articles and manuals

- [How to Test React Components in TypeScript](https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript)
- [Setup Next.js with Typescript, Jest and React Testing Library](https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5)
- [How to Start Testing Your React Apps Using the React Testing Library and Jest](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/#5-testing-react-redux)
