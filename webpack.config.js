const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "./src/"),
       mode: "development",
       entry: './app.js',
       output: {
          filename: 'build.js',
          path: path.resolve(__dirname, 'dist'),
       },
       resolve: {
        // extensions: ['.js'],
        alias: {
        //   "plug": path.resolve(__dirname, "./src/js/custom-plugin"),
          "~": path.resolve(__dirname, "./src"),
          "js": path.resolve(__dirname, "./src/js"),
          "css": path.resolve(__dirname, "./src/css"),
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          // title: "Webpack",
          template: "index.html",
          // minify: {
          //   collapseWhitespace: true,
          // }
        }),
    
      ],
    
      // devtool: '',
    
      devServer: {
        port: 3000,
      },
       module: {
         rules: [
           {
             test: /\.css$/i,
             use: ['style-loader', 'css-loader'],
           },
           {
             test: /\.(png|svg|jpg|jpeg|gif)$/i,
             type: 'asset/resource',
           },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: '[path][name].[ext]',
            },
          },
         ],
       },
     };
