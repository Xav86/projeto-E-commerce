import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AllGamesView from '@/views/AllGamesView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'
import ProductView from '@/views/ProductView.vue'
import AdminPainelView from '@/views/Admin/AdminPainelView.vue'
import NewProductView from '@/views/Admin/NewProductView.vue'
import AdmListProducts from '@/views/Admin/AdmListProducts.vue'
import AdmUserList from '@/views/Admin/AdmUserList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/games',
    name: 'Allgames',
    component: AllGamesView
  },
  {
    path: '/about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartView
  },
  {
    path: '/product/:product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/admin',
    name: 'adminPainel',
    component: AdminPainelView
  },
  {
    path: '/admin/list-products',
    name: 'listProducst',
    component: AdmListProducts
  },
  {
    path: '/admin/list-users',
    name: 'listUsers',
    component: AdmUserList
  },
  {
    path: '/admin/new-product',
    name: 'New product',
    component: NewProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router
