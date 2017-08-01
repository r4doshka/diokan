import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'bootstrap-sass/assets/javascripts/bootstrap.js';
import 'ekko-lightbox/dist/ekko-lightbox.min.js';

const scriptName = () => {

    $('.diokan-dropdown-toggle').on('click', function(){
        $(this).parent().toggleClass('open');
    });

    $(document).ready(function(){
        $('.diokan-slider-news').slick({
            arrows:false,
            dots:true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
};

export default scriptName();