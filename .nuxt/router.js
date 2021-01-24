import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _101f6bb8 = () => interopDefault(import('..\\pages\\alert-message.vue' /* webpackChunkName: "pages/alert-message" */))
const _3ed2c26c = () => interopDefault(import('..\\pages\\exercise-1.vue' /* webpackChunkName: "pages/exercise-1" */))
const _3eb6936a = () => interopDefault(import('..\\pages\\exercise-2.vue' /* webpackChunkName: "pages/exercise-2" */))
const _6bb2bfed = () => interopDefault(import('..\\pages\\fruit-basket.vue' /* webpackChunkName: "pages/fruit-basket" */))
const _12598b48 = () => interopDefault(import('..\\pages\\github-card.vue' /* webpackChunkName: "pages/github-card" */))
const _7699dd4d = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _40218528 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _006d81fc = () => interopDefault(import('..\\pages\\salad-bowl.vue' /* webpackChunkName: "pages/salad-bowl" */))
const _9940571a = () => interopDefault(import('..\\pages\\Sepetim.vue' /* webpackChunkName: "pages/Sepetim" */))
const _78d48d5a = () => interopDefault(import('..\\pages\\SutUrunleri.vue' /* webpackChunkName: "pages/SutUrunleri" */))
const _59a9ebc5 = () => interopDefault(import('..\\pages\\temprature.vue' /* webpackChunkName: "pages/temprature" */))
const _4b5fb760 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _81b71994 = () => interopDefault(import('..\\pages\\uyegirispage.vue' /* webpackChunkName: "pages/uyegirispage" */))
const _3bae96ec = () => interopDefault(import('..\\pages\\uyekayitpage.vue' /* webpackChunkName: "pages/uyekayitpage" */))
const _472b9f0f = () => interopDefault(import('..\\pages\\UrunDetay\\_id\\index.vue' /* webpackChunkName: "pages/UrunDetay/_id/index" */))
const _396ceff4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _101f6bb8,
    name: "alert-message"
  }, {
    path: "/exercise-1",
    component: _3ed2c26c,
    name: "exercise-1"
  }, {
    path: "/exercise-2",
    component: _3eb6936a,
    name: "exercise-2"
  }, {
    path: "/fruit-basket",
    component: _6bb2bfed,
    name: "fruit-basket"
  }, {
    path: "/github-card",
    component: _12598b48,
    name: "github-card"
  }, {
    path: "/Home",
    component: _7699dd4d,
    name: "Home"
  }, {
    path: "/list",
    component: _40218528,
    name: "list"
  }, {
    path: "/salad-bowl",
    component: _006d81fc,
    name: "salad-bowl"
  }, {
    path: "/Sepetim",
    component: _9940571a,
    name: "Sepetim"
  }, {
    path: "/SutUrunleri",
    component: _78d48d5a,
    name: "SutUrunleri"
  }, {
    path: "/temprature",
    component: _59a9ebc5,
    name: "temprature"
  }, {
    path: "/test",
    component: _4b5fb760,
    name: "test"
  }, {
    path: "/uyegirispage",
    component: _81b71994,
    name: "uyegirispage"
  }, {
    path: "/uyekayitpage",
    component: _3bae96ec,
    name: "uyekayitpage"
  }, {
    path: "/UrunDetay/:id",
    component: _472b9f0f,
    name: "UrunDetay-id"
  }, {
    path: "/",
    component: _396ceff4,
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
