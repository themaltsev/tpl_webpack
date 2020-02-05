const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

// console.log( "IS DEV: "+isDev)


module.exports = {

  context: path.resolve(__dirname, './src/'),

  mode: "development",


  entry: {
    critical: './app-critical.js',
    app: './js/app.js',
  
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    // filename: '[name].js',
  },



  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      // title: "Webpack",
      template: 'index.html',
      // minify: {
      //   collapseWhitespace: true,
      // }
    }),

    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].css'
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
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      }, {
        loader: 'postcss-loader',
        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
      }
    ]
},

  


  {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
      },  
      {
        loader: 'sass-loader',
        options: { sourceMap: true }
      },
     
    ]
},

     
  


  {
    test: /\.(woff|woff2|eot|eot@|ttf|otf|svg)$/,
    use: [
      {
        loader: 'file-loader',
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
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  },



         
  {
    test: /\.(png|jpe?g|gif|webp)$/i,
    loader: 'file-loader',
    options: {
      outputPath: 'img',
      name: '[path][name].[ext]',
    },
  },


    ],
   },
};