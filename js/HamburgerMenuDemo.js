$(document).ready(function () {
    $('.hamburger').hover(function () {
        $(this).addClass('change');
    }, function () {
        $(this).removeClass('change');
    });
});