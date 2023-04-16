// import Vue from 'vue'
import JwPagination from 'jw-vue-pagination'

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(JwPagination);
  nuxtApp.vueApp.component('jw-pagination', JwPagination);
});

// export default defineNuxtPlugin(async () => {
//   return {
//     provide: { JwPagination: JwPagination }
//   }
// })


// Vue.use(JwPagination)
// Vue.component('jw-pagination', JwPagination);