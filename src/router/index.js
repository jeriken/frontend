import Vue from 'vue'
import VueRouter from 'vue-router'
import Tampil from '../components/Tampil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Tampil
  },
  {
    path: '/buat',
    name: 'Buat',
    component: () => import(/* webpackChunkName: "about" */ '../components/Buat.vue')
  },
  {
    path: '/ubah/:id',
    name: 'Ubah',
    component: () => import(/* webpackChunkName: "ubah" */ '../components/Ubah.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
