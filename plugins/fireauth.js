import { auth } from '~/plugins/firebase.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {

      // here is you would want to build your user
      // object, but for now we'll just take everything

      store.commit('setUser', user)
      resolve()
    })
  })
}