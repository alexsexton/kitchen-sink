// Nav toggle

;(function mainNav() {
  const body = document.body
  const navOpenTrigger = document.querySelector('.site-nav--trigger')
  const navCloseTrigger = document.querySelector('.site-nav--close')
  const navOpenClass = 'site-nav--open'

  body.classList.remove(navOpenClass)

  navOpenTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(this)
    body.classList.add(navOpenClass)
  })

  navCloseTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove(navOpenClass)
  })
})()
