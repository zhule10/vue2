import Intro from '@/views/intro.vue'

export default [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/cp',
    name: 'chanpin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // 懒加载效果，只有访问到这个模板，才调用
    component: () => import('../views/chanpin.vue')
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/newsinfo.vue')
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('@/views/online.vue')
  },
  {
    path: '/cont',
    name: 'cont',
    component: () => import('@/views/contact.vue')
  },
  {
    path: '/tel',
    name: 'tel',
    component: () => import('@/views/tel.vue'),
    props: {
      food: 'banner'
    }
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('@/views/email.vue'),
    props: routes => ({
      foods: routes.query.fooda
    })
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/name_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('_c/swiper.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/store')
  },
  {
    path: '*',
    component: () => import('@/views/error.vue')
  }
]
