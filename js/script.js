/* Please ❤ this if you like it! */


(function($) { "use strict";

    //Travel portfolio page

    $(".about").on('click', function () {
        $("body").addClass("about-on");
    });
    $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
    });


    //Wildlife portfolio page

    $(".hobby").on('click', function () {
        $("body").addClass("hobby-on");
    });
    $(".hobby-close").on('click', function () {
        $("body").removeClass("hobby-on");
    });



})(jQuery);