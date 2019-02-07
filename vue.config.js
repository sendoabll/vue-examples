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
        public: path.join(__dirname, './public'),
        components: path.join(__dirname, './src/components'),
        app: path.join(__dirname, './src/app'),
        pages: path.join(__dirname, './src/pages'),
        MyLib: path.join(__dirname, './src/MyLib')
      },

      extensions: ['.js', '.vue', '.json']
    }
  }
}
