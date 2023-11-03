$(document).ready(function () {
    //affichage du menu-scroll
    $("#service").hover(function () {
        // over
        $("#menu-scroll").addClass('menu-scroll-active');
    }, function () {
        // out
        $("#menu-scroll").removeClass('menu-scroll-active');
    }
);

    //conserver l'affichage du menu-scroll lors du survol sur elle meme
    $('#menu-scroll').hover(function () {
            // over
            $("#menu-scroll").addClass('menu-scroll-active');
        }, function () {
            // out
            $("#menu-scroll").removeClass('menu-scroll-active');
        }
    );

    //affichage des services

    $("#menu-scroll-item-1").hover(function () {
            // over
           $("#service-1").addClass("service-active");
        }, function () {
            // out
            $("#service-1").removeClass("service-active");
        }
    );
    $("#menu-scroll-item-2").hover(function () {
        // over
       $("#service-2").addClass("service-active");
    }, function () {
        // out
        $("#service-2").removeClass("service-active");
    }
);
$("#menu-scroll-item-3").hover(function () {
    // over
   $("#service-3").addClass("service-active");
}, function () {
    // out
    $("#service-3").removeClass("service-active");
}
);
$("#menu-scroll-item-4").hover(function () {
    // over
   $("#service-4").addClass("service-active");
}, function () {
    // out
    $("#service-4").removeClass("service-active");
}
);
//conserver affichage des services
    $(".service").hover(function () {
            // over
            $("#service-1").addClass("service-active");
        }, function () {
            // out
            $("#service-1").removeClass("service-active");
        }
    );
});

//burger toggler
$(".toggler-burger").click(function (e) { 
    e.preventDefault();
    $(".toggler-burger").toggleClass("open");
    $(".mobile-menu").toggleClass("open");
});
