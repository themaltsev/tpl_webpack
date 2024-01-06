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
          template: "index.html",
          // minify: {
          //   collapseWhitespace: true,
          // }
        }),
        new MiniCssExtractPlugin({
          // filename: '[name].[contenthash].css'
          filename: "assets/build.css",
        }),
    
      ],
    
      // devtool: '',
    
      devServer: {
        port: 3000,
      },
       module: {
         rules: [
          // {
          //   test: /\.css$/i,
          //   use: ["style-loader", "css-loader", "postcss-loader"],
            
          // },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              // "postcss-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        "autoprefixer",
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              },
              "sass-loader",
            ],
          },
        
           {
             test: /\.(png|svg|jpg|jpeg|webp)$/i,
             type: 'asset/resource',
             generator: {
              filename: '[path][name].[ext]',
            },
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
