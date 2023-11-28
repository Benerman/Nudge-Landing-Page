function messageAnimate() {
    $("#dot-one").delay(333).animate({opacity: 0}, 300);
    $("#dot-two").delay(666).animate({opacity: 0}, 300);
    $("#dot-three").animate({opacity: 0}, 300);
    // messageAnimate();
    setTimeout(3000);
    $("#dot-one").delay(0).animate({opacity: 1}, 300);
    $("#dot-two").delay(333).animate({opacity: 1}, 300);
    $("#dot-three").delay(666).animate({opacity: 1}, 300);
    setTimeout(messageAnimate, 999)
}
var stopAnimation = false
$('#message-icon').on('mouseenter', function() {
    // $("#dot-one").animate({opacity: 0}, 3000);
    // $("#dot-two").animate({opacity: 0}, 3000);
    // $("#dot-three").animate({opacity: 0}, 3000);
    messageAnimate();
    // setTimeout(3000);
    // $("#dot-one").delay(0).animate({opacity: 1}, 3000);
    // $("#dot-two").delay(3330).animate({opacity: 1}, 3000);
    // $("#dot-three").delay(6660).animate({opacity: 1}, 3000);
    

}).on("mouseleave", function() {
    $('#dot-one').stop(true, true);
    $('#dot-two').stop(true, true);
    $('#dot-three').stop(true, true);
    
    $("#dot-one").css({opacity: 1})
    $("#dot-two").css({opacity: 1})
    $("#dot-three").css({opacity: 1})
    stopAnimation = true
});