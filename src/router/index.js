import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载的方式导入
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
//1.安装插件
Vue.use(VueRouter)
//2. 创建路由对象
const routes = [{
  path: '',
  redirect: 'home'
},
{
  path: '/category',
  component: Category
},
{
  path: '/cart',
  component: Cart
},
{
  path: '/home',
  component: Home
},
{
  path: '/profile',
  component: Profile
},
]
const router = new VueRouter({
  routes,
  mode: history
})
export default router
console.log("aaa")
console.log("bbb")
