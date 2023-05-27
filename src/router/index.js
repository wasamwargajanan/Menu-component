import Vue from "vue";
import Router from "vue-router";
import allFiles from './allFiles'; 

Vue.use(Router)

export const routes = [
    ...allFiles
]

const router = new Router({
    mode: 'history',
    routes
  })

  export default router