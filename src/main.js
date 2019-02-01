import Vue from 'vue'
import prepareApp from 'app/bootstrap'

(async () => {
  Vue.config.productionTip = false

  await prepareApp()

  new Vue({
    router: require('app/router').default,
    render: h => h(require('./App').default)
  }).$mount('#app')
})()
