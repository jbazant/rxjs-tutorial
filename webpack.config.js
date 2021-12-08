const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

const getStepConfig = (step, name)  => ({
  mode: 'development',
  entry: `./src/step${step}/index.js`,
  devtool: 'inline-source-map',

  output: {
    filename: `step${step}.js`,
    path: distPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Step ${step} - ${name}`,
      template: `./src/step${step}/index.html`,
      filename: `step${step}.html`,
    }),
  ],
  mode: 'development',
});

module.exports = [{
  output: {
    path: distPath,
  },
  devServer: {
    static: './dist',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RxJS tutorial',
      template: `./src/index.html`,
      filename: `index.html`,
    }),
  ],
},
  getStepConfig(1, 'Plain HTML + RxJS'),
  getStepConfig(2, 'React'),
];