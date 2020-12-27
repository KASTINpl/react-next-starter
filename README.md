# react-next-starter

Next.js starter with TS, MaterialUI, Redux, Storybook, Cypress and many more usable developer tools included

## Features

- [React](https://github.com/facebook/react/) ^17 + [Next.js](https://nextjs.org) ^10 + [TypeScript](https://github.com/Microsoft/TypeScript) ^4
- [MaterialUI](https://material-ui.com) ^5
- [Prettier](https://github.com/prettier/prettier) + [ESLint](https://github.com/eslint/eslint) + [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) + [Husky](https://github.com/typicode/husky)
- [Redux](https://redux.js.org) + [Redux toolkit](https://redux-toolkit.js.org)
- [todo] [Cypress](https://github.com/cypress-io/cypress) + [Jest](https://github.com/facebook/jest)
- [Storybook](https://github.com/storybooks/storybook) ^6
- [todo] Github actions
- [PlopJS](https://plopjs.com) scripts

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

## Testing

Testing framework with many built-in features like code coverage or snaptshot testing.

[react-testing-library](https://github.com/testing-library/react-testing-library) is included to provide a lightweight toolset for testing react components. It's a great alternative to enzyme.

Additionally, [Majestic](https://github.com/Raathigesh/majestic/) is used as a UI for Jest.

For Browser-based integration tests. Watches source code and automatically executes all tests on every change. With time-travel and real debugging, also records videos for failing tests.

[cypress-testing-library](https://github.com/testing-library/cypress-testing-library) is another lightweight toolset to query dom elements.
