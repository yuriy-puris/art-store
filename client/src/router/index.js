import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewUser from '@/components/NewUser'
import Categories from '@/components/categories/Categories'
import User from '@/components/User'
import Checkout from '@/components/Checkout'
import ThanksPage from '@/components/ThanksPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/registration',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/thanks',
      name: 'ThanksPage',
      component: ThanksPage
    }
  ]
})
