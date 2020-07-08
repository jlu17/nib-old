$(document).ready(function() {

    $('#off-canvas-click').click(function(e) {
        if($('#offcanvas-1').attr('aria-hidden') === 'false') {
            UIkit.offcanvas.hide([force = false]);
        } else {
            UIkit.offcanvas.show('#offcanvas-1');
        }
    });

    // hacky fix for the first click
    $('#off-canvas-click').click();
    UIkit.offcanvas.hide([force = true]);

    $('.exec div.icons').click(function(e) {
        $(this).children()[0].click();
    });

    $('.member div.icons').click(function(e) {
        $(this).children()[0].click();
    });

})