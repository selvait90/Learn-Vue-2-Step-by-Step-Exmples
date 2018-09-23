// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let path = require('path');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['vue', 'axios']
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    },

  module: {
    rules: [
      // ... other rules
      /*
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
              loaders: {
                  // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                  css: ['vue-style-loader', {
                      loader: 'css-loader',
                  }],
                  js: [
                      'babel-loader',
                  ],
              },
              cacheBusting: true,
          },

      },
      */
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '../[name].[ext]?[hash]'
        }
      }

    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}