$(document).ready(function(){
  var tabs = $(".tab");
  tabs.hide().filter(":first").attr("aria-hidden","true").show();

  $(".tabs ul a").click(function(){
    tabs.hide().attr("aria-hidden","true");
    tabs.filter(this.hash).attr("aria-hidden","false").show();
    $(".tabs ul a").removeClass("selected").attr("aria-expanded","false");
    $(this).addClass("selected").attr("aria-expanded","true");
    return false;
  }).filter(":first").click().attr("aria-expanded","true");
});