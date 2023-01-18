;(function scollMagic() {
  // Scroll up and down magic
  const body = document.body
  const scrollUp = 'scroll-up'
  const scrollIng = 'scrolling'
  const scrollDown = 'scroll-down'
  const scrollTop = 'scroll-top'
  const scrollBottom = 'scroll-bottom'
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
      // top
      body.classList.remove(scrollUp, scrollIng)
      body.classList.add(scrollTop)
      return
    }
    if (currentScroll >= 1) {
      // scrolling
      body.classList.add(scrollIng)
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollTop, scrollUp)
      body.classList.add(scrollDown)
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollTop, scrollDown)
      body.classList.remove(scrollDown)
      body.classList.add(scrollUp)
    }
    lastScroll = currentScroll

    // bottom
    if (window.innerHeight + currentScroll >= document.body.offsetHeight) {
      body.classList.add(scrollBottom)
    } else {
      body.classList.remove(scrollBottom)
    }
  })
})()
