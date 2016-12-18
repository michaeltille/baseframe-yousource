$(document).ready(function() {
        $('.showmenu').click(function() {
                $('.toggle-menu').slideToggle("fast");
                $(this).toggleClass("highlight")
        });
    });
