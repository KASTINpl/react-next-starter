# react-next-starter

Next.js starter with TS, MaterialUI, Redux, Storybook, Cypress and many more usable developer tools included

## Features

- React ^17 + Next.js ^10 + TypeScript ^4
- MaterialUI ^5
- Prettier + ESlint + AirBnb + Husky
- Redux + Redux-toolkit
- [todo] Cypress.io + JEST
- [todo] Storybook
- [todo] Github actions
- Plop.js scripts

## Getting started

- Clone this repository and `cd` into it
- `yarn install`
- `yarn run dev`

## All commands

### `yarn run dev`

Runs development server on http://localhost:3000. Page is hot reloading on code changes.

### `yarn run build`

Build application for production use.

### `yarn run start`

Start built application. You need to run `build` first.

### `yarn run test`

Run all tests.

### `yarn run test:unit`

Run all unit tests with jest.

### `yarn run test:unit:coverage`

Run all unit tests with jest and generate coverage reports. This will fail if constraints `coverageThreshold` in `jest.config.js` are violated.

### `yarn run test:unit:update`

Run all unit tests with jest and update all outdated snapshots.

### `yarn run test:unit:ui`

Run majestic server to control jest via its UI.

### `yarn run test:e2e`

Run all integration tests with headless cypress.

### `yarn run test:e2e:ui`

Run all integration tests with cypress UI.

### `yarn run lint:staged`

Run all linters and autofix issues on staged files.

### `yarn run typecheck`

Perform type analysis on all source files.

### `yarn run storybook`

Run Storybook server.

### `yarn run storybook:build`

Build Storybook documentation for production use.

### `yarn plop component NewComponent`

Create a new component
see `./plop-templates/component`

## Built upon fabulous libraries and tools

This starter pack has solutions for Rendering, Styling, Routing, Server-Side-Rendering, Type checking, Linting, Testing, Documentation and Building

### [Next.js](https://nextjs.org)

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

### [MaterialUI](https://material-ui.com)

React components for faster and easier web development. Build your own design system, or start with Material Design.

### [TypeScript](https://github.com/Microsoft/TypeScript)

The addition of types to JavaScript allows code-completion and better static code analysis.

### [React](https://github.com/facebook/react/)

Rendering library that makes component-based development easy and fun. Functional components in combination with hooks and context API allow flexible adjustments to many application needs.

In this starter project, hooks and context are used to create a simple and versatile store.

_Implicitly used by Next.js_

### [Redux](https://redux.js.org) + [Redux toolkit](https://redux-toolkit.js.org)

A Predictable State Container for JS Apps
The official, opinionated, batteries-included toolset for efficient Redux development

### [Jest](https://github.com/facebook/jest)

Testing framework with many built-in features like code coverage or snaptshot testing.

[react-testing-library](https://github.com/testing-library/react-testing-library) is included to provide a lightweight toolset for testing react components. It's a great alternative to enzyme.

Additionally, [Majestic](https://github.com/Raathigesh/majestic/) is used as a UI for Jest.

### [Cypress](https://github.com/cypress-io/cypress)

For Browser-based integration tests. Watches source code and automatically executes all tests on every change. With time-travel and real debugging, also records videos for failing tests.

[cypress-testing-library](https://github.com/testing-library/cypress-testing-library) is another lightweight toolset to query dom elements.

### [Storybook](https://github.com/storybooks/storybook)

Visualize isolated components for development and testing. Also for creating style guides. Addons provide additional benefits like switching between mobile viewports or automatic a11y profiling.

### [ESLint](https://github.com/eslint/eslint)

Parse source code and find unwanted patterns. Great way to establish best practices and a common code style.

### [Prettier](https://github.com/prettier/prettier)

Complements ESLint to support a consistent and aesthetic code style. Most formatting issues can be automatically fixed.

### [Husky](https://github.com/typicode/husky)

Handy git hooks to prevent bad `git commit` or `git push`.

### [PlopJS](https://plopjs.com)

Plop is a little tool that saves you time and helps your team build new files with consistency.

### [Babel](https://github.com/babel/babel)

Foundation of every modern JavaScript application stack. Compiles next-generation code into natively supported code.

_Implicitly used by Next.js_
