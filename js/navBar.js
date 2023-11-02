$("#accueil").hover(function () {
        // over
        $("#menu-scroll").addClass('menu-scroll-active');
        console.log("hello")
    }, function () {
        // out
        $("#menu-scroll").removeClass('menu-scroll-active');
    }
);