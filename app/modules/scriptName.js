import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';

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
};

export default scriptName();