function messageAnimate() {
    $("#dot-two").animate({opacity: 0}, 10);
    $("#dot-three").animate({opacity: 0}, 10);
    for (let i=0;i<100;i++) {
        setTimeout($("#dot-two").animate({opacity: 1}, 300), 333);
        setTimeout($("#dot-three").animate({opacity: 1}, 300), 666);
        setTimeout($("#dot-one").animate({opacity: 0}, 300), 999);
        setTimeout($("#dot-two").animate({opacity: 0}, 300), 1333);
        setTimeout($("#dot-three").animate({opacity: 0}, 300), 1666);
        setTimeout($("#dot-one").animate({opacity: 1}, 300), 1999);



        // $("#dot-one").delay(999).animate({opacity: 1}, 300);
        // $("#dot-two").delay(1333).animate({opacity: 1}, 300);
        // $("#dot-three").delay(1666).animate({opacity: 1}, 300);
        // $("#dot-one").delay(1999).animate({opacity: 0}, 300);
        
    }
}
$('#message-icon').on('mouseenter', function() {
    $("#dot-one").animate({opacity: 0}, 300);
    $("#dot-two").delay(333).animate({opacity: 0}, 300);
    $("#dot-three").delay(666).animate({opacity: 0}, 300);
    $("#dot-one").delay(1000).animate({opacity: 1}, 300);
    $("#dot-two").delay(1333).animate({opacity: 1}, 300);
    $("#dot-three").delay(1666).animate({opacity: 1}, 300);
    

}).on("mouseleave", function() {
    $('#dot-one').stop(true, true);
    $('#dot-two').stop(true, true);
    $('#dot-three').stop(true, true);
    
    $("#dot-one").css({opacity: 1})
    $("#dot-two").css({opacity: 1})
    $("#dot-three").css({opacity: 1})
    stopAnimation = true
});


$("a").on('click', function(event) {

    if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        window.location.hash = hash;
    });
    } 
});