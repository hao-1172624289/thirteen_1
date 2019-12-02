import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import shopList from '@/components/shop/shopList'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/Member',
      name: 'Member',
      component: Member
    }, 
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    }, 
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/News/List',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/News/detail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/Shop/List',
      name: 'shopList',
      component: shopList
    },
    {
      path:'/'
    }
 

  ]
})
