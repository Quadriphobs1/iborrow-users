import store from '@/store'
// TODO: Change middleware to check the user type and redirect the user to its own page routes,
// The middleware will check if the logged in user is a lender or a borrower
export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
    next({ name: 'auth.login' })
  } else {
    next()
  }
}
