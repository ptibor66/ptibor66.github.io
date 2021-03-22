$(document).ready(function () {
    var first_image = $("#gallery img:first-child");
    var last_image = $("#gallery img:last-child");

    $("#gallery img").css("opacity", 0);

    //Megszámoljuk, hogy hány kép van összesen
    $("#all-images-num").text($("#gallery img").length);

    //Az első elemet megjelenítjük
    first_image.addClass("current").css("opacity", 1);

    //Kiírjuk az első elem alt attributumát
    $("#current-image-title").text(first_image.attr("alt"));

    $("#current-image-num").text(1);


    $("#next-image").click(function () {
        var current_image = $("#gallery img.current");
        current_image.removeClass("current").animate({ opacity: 0 }, 1000);
        if (!current_image.is("#gallery img:last-child")) {
            current_image = current_image.next().addClass("current").animate({ opacity: 1 }, 1000);
        } else {
            current_image = first_image.addClass("current").animate({ opacity: 1 }, 1000);
        }
        $("#current-image-title").text(current_image.attr("alt"));
        $("#current-image-num").text(
            $("#gallery img").index(current_image) + 1
        );
    });

    $("#prev-image").click(function () {
        var current_image = $("#gallery img.current");
        current_image.removeClass("current").animate({ opacity: 0 }, 1000);
        if (!current_image.is("#gallery img:first-child")) {
            current_image = current_image.prev().addClass("current").animate({ opacity: 1 }, 1000);
        } else {
            current_image = last_image.addClass("current").animate({ opacity: 1 }, 1000);
        }
        $("#current-image-title").text(current_image.attr("alt"));
        $("#current-image-num").text(
            $("#gallery img").index(current_image) + 1
        );

    });

});