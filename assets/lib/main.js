// Please, please comment your JS not everyone knows it as well as you.

$(function(){

    // Tabs
    var tabs = $(".tab");

    tabs.hide().filter(":first").attr("aria-hidden","true").show();

    $(".tabs ul a").click(function(){
        // on click hide tabs
        tabs.hide().attr("aria-hidden","true");
        // filter and show the tab with the same id as the link hash / id / #
        tabs.filter(this.hash).attr("aria-hidden","false").show();
        // remove selected class
        $(".tabs ul a").removeClass("selected").attr("aria-expanded","false");
        // add the selected class to the active tab
        $(this).addClass("selected").attr("aria-expanded","true");
        // return false cancels default action, in this case jumping to the id of the div
        return false;
    }).filter(":first").click().attr("aria-expanded","true"); 
    // filters and adds selected class to first link


    // Add selected class and aria roles to checked input labels
    $("input[type=radio],input[type=checkbox]").change(function(){
        $("input[type=radio],input[type=checkbox]").attr("aria-checked","false").parent().removeClass("selected");
        $("input[type=radio]:checked,input[type=checkbox]:checked").attr("aria-checked","true").parent().addClass("selected");
    });


});


$(document).ready(function(){
    // Fitvids
    $(".video").fitVids();

    // Navigation
    $("#js-main-navition").accessibleMegaMenu({
        /* prefix for generated unique id attributes, which are required 
        to indicate aria-owns, aria-controls and aria-labelledby */
        uuidPrefix: "accessible-nav",
        /* css class used to define the megamenu styling */
        menuClass: "nav-menu",
        /* css class for a top-level navigation item in the megamenu */
        topNavItemClass: "nav-item",
        /* css class for a megamenu panel */
        panelClass: "sub-nav",
        /* css class for a group of items within a megamenu panel */
        panelGroupClass: "sub-nav-group",
        /* css class for the hover state */
        hoverClass: "hover",
        /* css class for the focus state */
        focusClass: "focus",
        /* css class for the open state */
        openClass: "open"
    });

});