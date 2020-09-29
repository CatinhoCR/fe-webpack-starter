import Router from './routing/routing'
import Header from './modules/header'

import '../styles/index.scss'

if (process.env.NODE_ENV === 'development') {
  require('../index.html')
}

class App {
  constructor (el) {
    this.body = el
    Header.init()
    this.router()
  }

  router () {
    const router = new Router({
      mode: 'hash',
      root: '/',
    })
    // TODO: Login, Session Cookies, Auth Guards, Set Dynamic Token session
    router
      .add('about', () => {
        console.log('A')
        // Artists.init()
      })
      .add('login', () => {
        // Login.init()
      })
      .add('', () => {
        console.log('webpack starterkit')
        // Dashboard.init()
      })
  }
}

const app = {
  init() {
    // TODO: Conditionals
    const wrapperEl = document.querySelector('#app')
    if (wrapperEl) {
      const app = new App(wrapperEl)
    }
  },
}

window.addEventListener('load', () => app.init())