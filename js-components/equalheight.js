// Equal height

equalheight = function(e) {
    var t = 0,
        n = 0,
        r = new Array,
        i, s = 0;
    $(e).each(function() {
        i = $(this);
        $(i).height("auto");
        topPostion = i.position().top;
        if (n != topPostion) {
            for (currentDiv = 0; currentDiv < r.length; currentDiv++) {
                r[currentDiv].height(t)
            }
            r.length = 0;
            n = topPostion;
            t = i.height();
            r.push(i)
        } else {
            r.push(i);
            t = t < i.height() ? i.height() : t
        }
        for (currentDiv = 0; currentDiv < r.length; currentDiv++) {
            r[currentDiv].height(t)
        }
    })
}

// Use like this

$(window).resize(function() {
    equalheight('.grid-item');
});