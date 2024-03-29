const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const StylexPlugin = require('@stylexjs/webpack-plugin')

module.exports = (env) => {
  const mode = env.env == 'prod' ? 'production' : 'development'

  const isSecure = env.mode === 'secure'

  const config = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    mode: mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          include: [path.resolve(__dirname, 'src')],
          use: ['ts-loader'],
        },
        {
          test: /\.(?:ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(gif|jpe?g|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
        manifest: 'public/manifest.json',
      }),
      new Dotenv({
        path: `./env/${env.env}.env`,
      }),
      new StylexPlugin({
        filename: 'styles.[contenthash].css',
        dev: true,
      }),
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      compress: true,
      port: 5000,
    },
  }

  if (isSecure) {
    config.devServer['server'] = {
      type: 'https',
      options: {
        key: './ssl/dev.local.key',
        cert: './ssl/dev.local.crt',
      },
    }
  }

  return config
}
