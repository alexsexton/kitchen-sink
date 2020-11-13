/* globals jQuery, barba, anime, gsap */
'use strict'

const main = document.querySelector('main')

barba.init({
  debug: true,
  transitions: [{
    name: 'opacity-transition',
    leave (data) {
      return gsap.to(data.current.container, {
        opacity: 0
      })
      // return anime({
      //   targets: main,
      //   opacity: 0.5,
      //   loop: true,
      //   easing: 'linear',
      //   duration: 5000
      // })
    },
    enter (data) {
      return gsap.from(data.next.container, {
        opacity: 0
      })
      // return anime({
      //   targets: main,
      //   opacity: 0.5,
      //   loop: true,
      //   easing: 'linear',
      //   duration: 5000
      // })
    }
  }]
})

jQuery(function ($) {
  // Navigation
  const $navHandler = $('.main-nav--trigger')
  const $subnavHandler = $('.nav-subnav--handler')

  const bodyOpenClasses = [
    'subnav--open',
    'site-nav--open'
  ]

  // Nav trigger
  $navHandler.on('click', function (e) {
    e.preventDefault()
    const navBodyOpenClass = 'site-nav--open'
    $('body').toggleClass(navBodyOpenClass)
    $('*').removeClass('is-open')
  })

  // Sub Nav
  $subnavHandler.each(function (i) {
    const $this = $(this)
    const $subnav = $this.next()
    const subNavOpenClass = 'c-subnav--open'
    const subNavBodyOpenClass = 'subnav--open'

    $navHandler.on('click', function (e) {
      e.preventDefault()
      const isOpen = $subnav.hasClass(subNavOpenClass)
      if (isOpen) {
        $subnav.removeClass(subNavOpenClass)
      }
      const hasClass = $('body').hasClass(subNavBodyOpenClass)
      if (hasClass) {
        $('body').removeClass(subNavBodyOpenClass)
      }
    })

    $this.on('click', function (e) {
      e.preventDefault()
      $('body').removeClass(bodyOpenClasses)
      const isOpen = $subnav.hasClass(subNavOpenClass)
      // remove all open subnav classes, therefore closing any that are open
      $('.' + subNavOpenClass).removeClass(subNavOpenClass)
      // if the corresponding subnav was closed already, user intends to open it
      if (!isOpen) {
        $subnav.addClass(subNavOpenClass)
        $('body').addClass(subNavBodyOpenClass)
      }
    })
  }).bind()

  // Tabs
  function tabs () {
    const tab = $('.tab')
    tab.addClass('hide').filter(':first').attr('aria-hidden', 'true').removeClass('hide')

    $('.tabs li a').click(function () {
      tab.addClass('hide').attr('aria-hidden', 'true')
      tab.filter(this.hash).attr('aria-hidden', 'false').removeClass('hide')
      $('.tabs li a').removeClass('selected').attr('aria-expanded', 'false')
      $(this).addClass('selected').attr('aria-expanded', 'true')
      return false
    }).filter(':first').click().attr('aria-expanded', 'true').removeClass('hide')
  }

  // Add selected class and aria roles to checked input labels
  function a11y () {
    $('input[type=radio],input[type=checkbox]').change(function () {
      $('input[type=radio],input[type=checkbox]').attr('aria-checked', 'false').parent().removeClass('selected')
      $('input[type=radio]:checked,input[type=checkbox]:checked').attr('aria-checked', 'true').parent().addClass('selected')
    })
  }

  tabs()
  a11y()
})

// Add loaded class once everything has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  const doc = document.querySelector('html')
  doc.classList.add('loaded')
})
