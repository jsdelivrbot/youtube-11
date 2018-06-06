module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "npm run clean && npm run compile",
    "clean": "rm -rf ./build/index.bundle.js",
    "compile": "NODE_ENV=production webpack --config ./webpack.config.js --progress",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
