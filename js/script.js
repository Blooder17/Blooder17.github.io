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
            $('.navbar-item').removeClass('selected');
            $('#' + checkpointID).addClass('selected');
        }
    });
});

$('#navbar-toggle').on('click', function () {
    $('#navbar').toggleClass('open');
});

let projectNumber;
let maxImgCounter;
let imgCounter = 1;

$('.project-btn').on('click', function () {
    projectNumber = $(this).data('project');
    maxImgCounter = $(this).data('img-number');
    imgCounter = 1;
    $('#modal-background').css('display', 'flex');
    $('#project-' + projectNumber).css('display', 'flex');
});

$('#prev-btn').on('click', function () {
    if (imgCounter == 1) {
        imgCounter = maxImgCounter;
    } else {
        imgCounter--;
    }
    updateCarousel()
});

$('#next-btn').on('click', function () {
    if (imgCounter == maxImgCounter) {
        imgCounter = 1;
    } else {
        imgCounter++;
    }
    updateCarousel()
});

function updateCarousel() {
    $('#project-' + projectNumber + ' img').css('transform', 'translate(-' + (imgCounter - 1) + '00%)');
}