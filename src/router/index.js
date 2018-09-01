import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/Home/Home')
const Login = () => import('../pages/Login')
const Register = () => import('../pages/Register')
const User = () => import('../pages/User')
const JobList = () => import('../pages/Home/JobList')
const JobDetail = () => import('../pages/Home/JobDetail')
const JobForm = () => import('../pages/Home/JobForm')
const ArticleList = () => import('../pages/Home/ArticleList')
const ArticleDetail = () => import('../pages/Home/ArticleDetail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'router-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/joblist',
          name: 'JobList',
          component: JobList
        },
        {
          path: '/jobdetail',
          name: 'JobDetail',
          component: JobDetail
        },
        {
          path: '/articlelist',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/articledetail',
          name: 'ArticleDetail',
          component: ArticleDetail
        }
      ]
    }, {
      path: '/jobform',
      name: 'JobForm',
      component: JobForm
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
