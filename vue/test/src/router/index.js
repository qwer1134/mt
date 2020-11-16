import Vue from 'vue'
import Router from 'vue-router'
import Add from '../components/add'
import home from  '../components/home'
import list from  '../components/list'
import user from  '../components/user'
import login from '../components/login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
      {
        path:'list',
        name:'list',
        component: list
      },
      {
        path:'user',
        name:'user',
        component: user
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
