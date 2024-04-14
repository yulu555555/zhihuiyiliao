import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView'
import NewsView from '../views/NewsView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import AdminHome from '../views/AdminHome'
import AdminInformation from '../views/AdminInformation'
import AdminUserInformation from '../views/AdminUserInformation'
import AdminLogin from '../views/AdminLogin'
import store from '@/store/index.js'
import AdminNews from '../views/AdminNews'
import AdminChatMessage from '../views/AdminChatMessage'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/chat',
    name: 'ChatView',
    component: ChatView
  },
  {
    path:'/news',
    name:'NewView',
    component: NewsView
  },
  {
    path:'/contact',
    name:'ContactView',
    component: ContactView
  },
  {
    path:'/about',
    name:'AboutView',
    component: AboutView
  },
  {
    path: '/admin-home',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin-information',
    name: 'AdminInformation',
    component: AdminInformation
  },
  {
    path: '/admin-Userinformation',
    name: 'AdminUserInformation',
    component: AdminUserInformation
  },
  {
    path:'/admin-news',
    name:'AdminNews',
    component: AdminNews
  },
  {
    path:'/admin-chat',
    name:'AdminChatMessage',
    component: AdminChatMessage
  },
  {
    path:'/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.path.includes('login') || to.path == '/'|| to.path.includes('register')){
    next()
    return
  }
  if(to.path.startsWith("/admin") && localStorage.getItem("role") !== "admin"){
    console.log(to.path)
    Vue.prototype.$message({
      message: '您没有权限进入此页面',
      type: 'error'}
      )
    next("/")
    return
  }
  if(localStorage.getItem("user") == "" || localStorage.getItem("user") == null){
    Vue.prototype.$message({
      message: '您没有登录',
      type: 'error'}
      )
    next("/")
    return
  }
  next()
})
export default router
