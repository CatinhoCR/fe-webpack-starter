class Header {
  constructor(el) {
    this.header = el
    this.render()
  }
  render() {
    this.setupView()
    this.header.appendChild(this.nav)
  }

  setupView() {
		this.ul = document.createElement('ul')
    this.ul.className = 'site-nav__list'
		this.nav = document.createElement('nav')
    this.nav.className = 'site-nav'
		this.nav.appendChild(this.ul)

    this.items = [
      { label: 'Home', url: '#/' },
      { label: 'About', url: '#/about' },
    ]
    this.items.forEach((item) => {
      const li = document.createElement('li')
      li.className = 'site-nav__list-item'

      const anchor = document.createElement('a')
			anchor.className = 'site-nav__list-link'
			anchor.href = item.url
			anchor.innerHTML = item.label

      li.appendChild(anchor)
      this.ul.appendChild(li)
    })
  }
}

const header = {
  init() {
    const wrapperEl = document.querySelector('#site-header')
    if (wrapperEl) {
      const nav = new Header(wrapperEl)
    }
  },
}

export default header
