const path = require('path');

const rootPath = path.resolve(__dirname, '../');

console.log(rootPath);

module.exports = async ({config, mode}) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: rootPath,
  });
  // Return the altered config
  config.resolve.alias = {
    '@': rootPath,
    '~': rootPath,
    'vue$': 'vue/dist/vue.esm.js'
  }

  return config;
};
