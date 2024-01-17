

</footer>

<!--  JS  -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<!--<script src="<?php echo get_template_directory_uri(); ?>/js/app.js"></script>-->


<!-- JQUERY CDN LINK-->
<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous">
</script>

<!--  JS CDN LINKS FOR OWL CAROUSEL LIBRARY  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})
</script>



<!-- For testimonials-->
<script>
    const multipleItemCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width:576px)").matches) {
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: 2000,
            touch: true
        });

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();

        var scrollPosition = 0;

        $(".carousel-control-next").on("click", function() {
            if (scrollPosition < carouselWidth - cardWidth * 2) {
                scrollPosition = scrollPosition + cardWidth;
                $(".carousel-inner").animate({
                    scrollLeft: scrollPosition
                }, 600);
            }
        });
        $(".carousel-control-prev").on("click", function() {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
                $(".carousel-inner").animate({
                    scrollLeft: scrollPosition
                }, 600);
            }
        });
    } else {
        $(multipleItemCarousel).addClass("slide");
    }

</script>


<?php wp_footer(); ?>

</body>

</html>
