

/* Menu
===========*/
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    burgerMenu.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});





/* Portfolio filter
=======================*/

$(function(){
    
    
    let filter = $("[data-filter]");
    
    filter.on("click", function(){
                
        let cat =$(this).data('filter');
        
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            
        $("[data-cat]").each(function (){
            
            let workCat = $(this).data('cat');
            
            if (workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
            
        });
            
        }
        
    });
    
    
    
});


/*Modal 
===========*/
let modalCall = $("[data-modal]");

modalCall.on("click", function (event) {
event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

 

});

let modalClose = $("[data-close]");

modalClose.on("click", function(event) {
    event.preventDefault();
    
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.removeClass('show');

});




$(".modal_window").on("click", function(event) {

    $(this).removeClass('show');
    $("body").removeClass('no-scroll');

});

$(".modal__dialog").on("click", function(event) {
    event.stopPropagation();

});


/* Carousel
===========*/
/*
const carousel = document.querySelector(".test_carousel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown, dragStart");
carousel.addEventListener("mousemove, dragging");
*/

const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
    
    
