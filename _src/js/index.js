import './scss/style.scss'
import './js/scroll-magic.js'
import './js/nav-toggle.js'

// Add loaded class once everything has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  const doc = document.querySelector('html')
  doc.classList.add('loaded')
})
