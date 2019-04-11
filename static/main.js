/* globals jQuery */
// This uses JS Standard style formating and pulls in dependencies using =require path/to/script.js
'use strict';

jQuery(function ($) {

  $(document).ready(function () {
    // Tabs
    var tabs = $('.tab');
    tabs.addClass('hide').addClass('hide').filter(':first').attr('aria-hidden', 'true').removeClass('hide');

    $('.tabs li a').click(function () {
      tabs.addClass('hide').attr('aria-hidden', 'true');
      tabs.filter(this.hash).attr('aria-hidden', 'false').removeClass('hide');
      $('.tabs li a').removeClass('selected').attr('aria-expanded', 'false');
      $(this).addClass('selected').attr('aria-expanded', 'true');
      return false;
    }).filter(':first').click().attr('aria-expanded', 'true').removeClass('hide');
  });

  // Add selected class and aria roles to checked input labels
  $(document).ready(function () {
    $('input[type=radio],input[type=checkbox]').change(function () {
      $('input[type=radio],input[type=checkbox]').attr('aria-checked', 'false').parent().removeClass('selected');
      $('input[type=radio]:checked,input[type=checkbox]:checked').attr('aria-checked', 'true').parent().addClass('selected');
    });
  });

  // End
});