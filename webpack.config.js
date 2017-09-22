const path = require('path');
const webpack = require('webpack');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // the points from which webpack starts building the dependancy graph
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'index.tsx')
  ],
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'scripts/bundle-[hash].js',
    chunkFilename: 'scripts/bundle-chunk-[id]-[hash].js'
  },
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    }),
  ],
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader"
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

if (process.env.NODE_ENV === "development") {
  config.devServer = {
    contentBase: "dist",
    historyApiFallback: true,
    hot: true,
    status: "normal",
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080
  };
} else {
  // Do Prod Build things
}

module.exports = config;


// custom demo plugin
function ConsoleLogOnBuildWebpackPlugin() {};
ConsoleLogOnBuildWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('run', function(compiler, callback) {
    console.log("The webpack build process is starting!!!");
    callback();
  });
};
