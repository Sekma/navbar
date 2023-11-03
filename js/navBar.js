$(document).ready(function () {
    $("#service").hover(function () {
        // over
        $("#menu-scroll").addClass('menu-scroll-active');
    }, function () {
        // out
        $("#menu-scroll").removeClass('menu-scroll-active');
    }
);


    $('#menu-scroll').hover(function () {
            // over
            $("#menu-scroll").addClass('menu-scroll-active');
        }, function () {
            // out
            $("#menu-scroll").removeClass('menu-scroll-active');
        }
    );
});
