const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].[hash].css"
});

const config = require('./config');
let prod = (process.env.NODE_ENV === 'production');
let webpackConfig = {
  entry: config.entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
    {
      test:/\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },
    {
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      enforce: "pre",
      enforce: "post",
      loader: "babel-loader",
      options: {
        presets: ["es2015"]
      }
    },
    {
      test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
      loader: "url-loader",
      options: {
        limit: 8192,
        name: 'img/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    },
    {
      test: require.resolve('jquery'),
      use: [{
          loader: 'expose-loader',
          options: 'jQuery'
      },{
          loader: 'expose-loader',
          options: '$'
      }]
    }]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules",
       path.resolve(__dirname, "app")
    ],
    
    extensions: [".js", ".json", ".css"],
    // extensions that are used    
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      jquery: '../../node_modules/jquery/dist/jquery.min.js',
      "module": "new-module"
    }
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function (assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  //devtool: "source-map",
  context: __dirname,
  target: "web",
  stats: "errors-only",
  devServer: {
    proxy: {
      '/dev' :{
        target:'http://10.10.1.8:9230',
        pathRewrite: {"^/dev" : ""}
      }
    },
    port: 2121,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload       
  },
  plugins: [extractSass].concat(config.plugins),
  profile: true,
  // recordsPath: path.resolve(__dirname, "build/records.json"),
  // recordsInputPath: path.resolve(__dirname, "build/records.json"),
  // recordsOutputPath: path.resolve(__dirname, "build/records.json")
};
if (prod) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 1000// Minimum number of characters
    }),        
    //压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      comments: false,
    })
  ]);
} else {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['index.js']
    })
  ]);
}
module.exports = webpackConfig;