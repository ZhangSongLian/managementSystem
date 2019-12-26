import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/pages/manage')), 'manage');
const home = r => require.ensure([],() => r(require('@/pages/home')),'home')
const userList = r => require.ensure([],() => r(require('@/pages/userList')),'userList')
const orderList = r => require.ensure([],() => r(require('@/pages/orderList')),'orderList')


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[
      {  //路由嵌套
            path: '',
            component: home,
            meta: [],
       },
       {
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表'],
       },
       {
        path: '/orderList',
        component: orderList,
        meta: ['数据管理', '订单列表'],
       }
       
    ]
    },
  ]
})
