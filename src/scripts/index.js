import Router from './routing/routing'

import '../styles/index.scss'

if (process.env.NODE_ENV === 'development') {
  require('../index.html')
}

class App {
  constructor (el) {
    this.body = el
    this.router()
  }

  router () {
    const router = new Router({
      mode: 'hash',
      root: '/',
    })
    router
      .add('about', () => {
        console.log('A')
      })
      .add('', () => {
        console.log('webpack starterkit')
      })
  }
}

const app = {
  init() {
    const wrapperEl = document.querySelector('#app')
    if (wrapperEl) {
      const app = new App(wrapperEl)
    }
  },
}

window.addEventListener('load', () => app.init())