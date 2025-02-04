//Function that checks if the element is in view
function isInViewport(element) {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    var elementPos = element.offset().top;

    return elementPos > viewportTop && elementPos < viewportBottom;
}

$(window).on('scroll resize load', function () {
    $('.progress-checkpoint').each(function () {
        if (isInViewport($(this))) {
            var checkpointID = $(this).data('checkpoint-id');
            $('.navbar-item').removeClass('selected')
            $('#' + checkpointID).addClass('selected');
        }
    });
});

$('#navbar-toggle').on('click', function () {
    $('#navbar').toggleClass('open');
})

$('.project-item').on('click', function () {
    $(this).data('project');
})