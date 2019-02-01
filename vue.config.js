const path = require('path')

module.exports = {
  lintOnSave: 'error',

  configureWebpack: {
    entry: {
      app: [
        path.join(__dirname, './src/styles/index.css')
      ]
    },

    resolve: {
      alias: {
        components: path.join(__dirname, './src/components'),
        app: path.join(__dirname, './src/app'),
        pages: path.join(__dirname, './src/pages')
      },

      extensions: ['.js', '.vue', '.json']
    }
  }
}
