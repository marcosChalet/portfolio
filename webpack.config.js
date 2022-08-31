const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
   mode: modoDev ? "development" : "production",
   entry: "./src/script.js",
   output: {
      filename: "script.js",
      path: __dirname + "/docs"
   },
   devServer: {
      static: "./docs",
      port: 8080
   },
   optimization: {
      minimizer: [
         new CssMinimizerWebpackPlugin(),
         new TerserWebpackPlugin()
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "style.css"
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader'
            ]
         }, {
            test: /\.(png|jpg|gif)$/i,
            loader: 'file-loader'
         }
      ]
   }
}

