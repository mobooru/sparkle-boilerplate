const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  target: 'web',
  devtool: '#source-map',
  context: path.join(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    alias: {
      Helpers: path.resolve(__dirname, '../src/Helpers.js'),
      Generic: path.resolve(__dirname, '../src/components/Generic'),
      Connector: path.resolve(__dirname, '../src/Connector.js'),
      Components: path.resolve(__dirname, '../src/components'),
      Containers: path.resolve(__dirname, '../src/containers'),
      Actions: path.resolve(__dirname, '../src/actions')
    },
    extensions: ['.js', '.jsx', '.json', '.sass']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' }
      },
      {
        exclude: /node_modules/,
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: { historyApiFallback: true },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      {
        from: './src/res',
        to: 'res'
      }
    ])
  ]
}
