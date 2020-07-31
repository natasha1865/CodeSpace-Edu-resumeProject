/**
 * Initialize Owl Carousal
 *  */
$('.loop').owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        }
    }
});

/**
 * Initialize Light Gallery
 *  */
$(document).ready(function() {
    $("#frontend").lightGallery();
    $("#backend").lightGallery();  
});

/**
 * Toggle the removal of active class from buttons
 */
$('.btn-block').on('click', function() {
    $('.col-6 .btn-block.active').removeClass('active');
    
    if($(this).hasClass('frontend')){
        $(".container div#backend").removeClass("show-backend");
        $(".container div#frontend").addClass("show-frontend");

    }

    if($(this).hasClass('backend')){
        $(".container div#frontend").removeClass("show-frontend");
        $(".container div#backend").addClass("show-backend");
    }
});

//Run on page load: move div to top
function moveTop(){
    let height = $(".container div#frontend").height();//get dynanmic div#frontend height
    $('#backend').css('margin-top',-height);//set negative margin-top from "height" variable
}

//Run function moveTop() everytime the page loads and resizes
$(document).ready(moveTop());

$(window).resize(function(){
    moveTop();
});

/**
 * Scroll To Top Functionality
 */
let vh = $("#cover-page").height();

window.onscroll = function scrollFunction() {
  if ($("body,html").scrollTop() > vh) {
    $("#scroll-top").css("display", "block");
  } else {
    $("#scroll-top").css("display", "none");
  }
}
