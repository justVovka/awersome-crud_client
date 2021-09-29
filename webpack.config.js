const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const getFileName = ext => `bundle.[hash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: 'index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: getFileName('js'),
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src', 'types'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  devtool: isDev ? 'source-map' : false,
};
