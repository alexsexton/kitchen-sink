/* globals jQuery, */
// Please, please comment your JS. Not everyone knows it as well as you.

'use strict'

jQuery(function ($) {
  // Tabs
  $(document).ready(function () {
    var tabs = $('.tab')
    tabs.hide().filter(':first').attr('aria-hidden', 'true').show()

    $('.tabs ul a').click(function () {
      tabs.hide().attr('aria-hidden', 'true')
      tabs.filter(this.hash).attr('aria-hidden', 'false').show()
      $('.tabs ul a').removeClass('selected').attr('aria-expanded', 'false')
      $(this).addClass('selected').attr('aria-expanded', 'true')
      return false
    }).filter(':first').click().attr('aria-expanded', 'true')
  })

  // Add selected class and aria roles to checked input labels
  $(document).ready(function () {
    $('input[type=radio],input[type=checkbox]').change(function () {
      $('input[type=radio],input[type=checkbox]').attr('aria-checked', 'false').parent().removeClass('selected')
      $('input[type=radio]:checked,input[type=checkbox]:checked').attr('aria-checked', 'true').parent().addClass('selected')
    })
  })

  // FitVids
  $(document).ready(function () {
    $('.video-frame').fitVids()
  })

  // Navigation
  $(document).ready(function () {
    $('#js-main-navigation').accessibleMegaMenu({
      uuidPrefix: 'accessible-nav',
      menuClass: 'nav-menu',
      topNavItemClass: 'nav-item',
      panelClass: 'sub-nav',
      panelGroupClass: 'sub-nav-group',
      hoverClass: 'hover',
      focusClass: 'focus',
      openClass: 'open'
    })
  })
// End
})
