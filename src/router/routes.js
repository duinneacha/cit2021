
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/about', component: () => import('pages/PageAbout.vue') },
      { path: '/nutrition', component: () => import('pages/PageNutrition.vue') },
      { path: '/neuromuscular', component: () => import('pages/PageNeuromuscular.vue') },
      { path: '/classes', component: () => import('pages/PageClasses.vue') },
      { path: '/faq', component: () => import('pages/PageFAQ.vue') },
      { path: '/contact', component: () => import('pages/PageContact.vue') },
      { path: '/recipes', component: () => import('pages/PageRecipes.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
