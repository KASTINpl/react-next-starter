const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const rootPath = path.resolve(__dirname, '../../../')

module.exports = {
  stories: [rootPath + '/src/components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: rootPath + '/tsconfig.json',
      }),
    ]
    return config
  },
}
