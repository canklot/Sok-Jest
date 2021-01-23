import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ba07245 = () => interopDefault(import('..\\pages\\alert-message.vue' /* webpackChunkName: "pages/alert-message" */))
const _55b62946 = () => interopDefault(import('..\\pages\\exercise-1.vue' /* webpackChunkName: "pages/exercise-1" */))
const _5599fa44 = () => interopDefault(import('..\\pages\\exercise-2.vue' /* webpackChunkName: "pages/exercise-2" */))
const _75e033c0 = () => interopDefault(import('..\\pages\\fruit-basket.vue' /* webpackChunkName: "pages/fruit-basket" */))
const _d7e2ffae = () => interopDefault(import('..\\pages\\github-card.vue' /* webpackChunkName: "pages/github-card" */))
const _569457c0 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _3e0b343f = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _160862e2 = () => interopDefault(import('..\\pages\\salad-bowl.vue' /* webpackChunkName: "pages/salad-bowl" */))
const _4b9808c0 = () => interopDefault(import('..\\pages\\Sepetim.vue' /* webpackChunkName: "pages/Sepetim" */))
const _160fd327 = () => interopDefault(import('..\\pages\\SutUrunleri.vue' /* webpackChunkName: "pages/SutUrunleri" */))
const _4e383858 = () => interopDefault(import('..\\pages\\temprature.vue' /* webpackChunkName: "pages/temprature" */))
const _ad08a39a = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _6d5c31ee = () => interopDefault(import('..\\pages\\uyegirispage.vue' /* webpackChunkName: "pages/uyegirispage" */))
const _2753af46 = () => interopDefault(import('..\\pages\\uyekayitpage.vue' /* webpackChunkName: "pages/uyekayitpage" */))
const _94106ec8 = () => interopDefault(import('..\\pages\\UrunDetay\\_id\\index.vue' /* webpackChunkName: "pages/UrunDetay/_id/index" */))
const _c26058fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alert-message",
    component: _4ba07245,
    name: "alert-message"
  }, {
    path: "/exercise-1",
    component: _55b62946,
    name: "exercise-1"
  }, {
    path: "/exercise-2",
    component: _5599fa44,
    name: "exercise-2"
  }, {
    path: "/fruit-basket",
    component: _75e033c0,
    name: "fruit-basket"
  }, {
    path: "/github-card",
    component: _d7e2ffae,
    name: "github-card"
  }, {
    path: "/Home",
    component: _569457c0,
    name: "Home"
  }, {
    path: "/list",
    component: _3e0b343f,
    name: "list"
  }, {
    path: "/salad-bowl",
    component: _160862e2,
    name: "salad-bowl"
  }, {
    path: "/Sepetim",
    component: _4b9808c0,
    name: "Sepetim"
  }, {
    path: "/SutUrunleri",
    component: _160fd327,
    name: "SutUrunleri"
  }, {
    path: "/temprature",
    component: _4e383858,
    name: "temprature"
  }, {
    path: "/test",
    component: _ad08a39a,
    name: "test"
  }, {
    path: "/uyegirispage",
    component: _6d5c31ee,
    name: "uyegirispage"
  }, {
    path: "/uyekayitpage",
    component: _2753af46,
    name: "uyekayitpage"
  }, {
    path: "/UrunDetay/:id",
    component: _94106ec8,
    name: "UrunDetay-id"
  }, {
    path: "/",
    component: _c26058fe,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
