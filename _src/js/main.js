/* globals */
'use strict'

// Add loaded class once everything has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  const doc = document.querySelector('html')
  doc.classList.add('loaded')
})
