/*
* This is a file to save all routs used by app, each routes is group accoridng the routes group and types
 */
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('@/pages/Welcome/Page').default
  },
  // routes for authentication with the guest middleware to check if teh user is logged in or not
  ...middleware('guest', [
    { path: '/auth',
      component: () => import('@/pages/Auth/Template'),
      children: [
        { path: '', redirect: { name: 'auth.login' } },
        { path: 'login', name: 'auth.login', component: require('@/pages/Auth/Login').default, meta: { layout: 'auth' } },
        { path: 'register', name: 'auth.register', component: require('@/pages/Auth/Register').default, meta: { layout: 'register' } },
        { path: 'register/investors', name: 'auth.register.investors', component: require('@/pages/Auth/Registration/Investors').default, meta: { layout: 'auth' } },
        { path: 'register/borrowers', name: 'auth.register.borrowers', component: require('@/pages/Auth/Registration/Borrowers').default, meta: { layout: 'auth' } },
        { path: 'password/forgot', name: 'auth.password.forgot', component: require('@/pages/Auth/Password/Forgot').default, meta: { layout: 'auth' } },
        { path: 'password/reset/:token', name: 'auth.password.reset', component: require('@/pages/Auth/Password/Reset').default, meta: { layout: 'auth' } }
      ]
    }
  ]),
  ...middleware('auth', [
    { path: '/home',
      component: () => import('@/pages/Auth/Template'),
      children: [
        { path: '', redirect: { name: 'home' } },
        { path: 'welcome', name: 'home', component: require('@/pages/Home/Page').default }
      ]
    }
  ]),
  {path: '*', component: () => import('@/pages/Error/NotFound')}
]

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
// eslint-disable-next-line
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )

  return routes
}
