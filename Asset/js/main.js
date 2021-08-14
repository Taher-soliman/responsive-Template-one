$(function () {
    'user strict';
    var winH = $(window).height(),
        navB = $('.navbar').innerHeight();


    $('.slider').height(winH - navB);
})




