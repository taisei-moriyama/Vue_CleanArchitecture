import Vue from 'vue'
import App from './Presentation/App.vue'
import router from './router'
import {container} from './DIContainer/DIContainer'
// import {IArticlesAPI} from './Domain/Models/IArticlesAPI'

Vue.config.productionTip = false

// const articlesAPI = container.get<IArticlesAPI>("ArtilesAPI");
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
