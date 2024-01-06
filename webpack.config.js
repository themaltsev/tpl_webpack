const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src/"),

  mode: "development",
  // mode: "production",

  entry: {
    app: "./js/app.js",
    entry: ['babel-polyfill', './app/js/app.js'],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // filename: '[name].[contenthash].js',
    filename: "assets/[name].[ext]",
  },

  resolve: {
    // extensions: ['.js'],
    alias: {
    //   "plug": path.resolve(__dirname, "./src/js/custom-plugin"),
      "~": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js"),
      "css": path.resolve(__dirname, "./src/css"),
      "sass": path.resolve(__dirname, "./src/sass"),
      // mmenu: path.resolve('node_modules', 'jquery.mmenu/dist/jquery.mmenu.all.js'),
      // TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      // TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      // TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      // TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      // ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      // 'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      // 'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      // title: "Webpack",
      template: "index.html",
      // minify: {
      //   collapseWhitespace: true,
      // }
    }),

    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, "./dist"),
      // filename: '[name].[contenthash].css'
      filename: "assets/[name].css",
    }),
  ],

  // devtool: '',

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: "postcss.config.js" } },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|eot@|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader",
            // options: {
            //   name: '[path][name].[ext]',
            // },
          },
        ],
      },
     

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: "file-loader",
        options: {
          outputPath: "img",
          name: "[path][name].[ext]",
        },
      },
    ],
  },
};
