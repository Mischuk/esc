function leadCarousel() {
  var $slider = $('.lead-carousel-slider');
  $slider.on('init', function(event, slick, direction){
    $slider.find('.slide').each(function(){
      $('.lead-carousel-nav li').eq($(this).index()).find('button').text($(this).attr('data-dot-title'));
    });
  });
  $slider.on('afterChange', function(event, slick, currentSlide){
    $slider.find('.slide').each(function(){
      var label = $slider.find('.slide').eq(currentSlide).attr('data-dot-title');
      $('.mobile-menu-trigger .label').text(label);
    });
  });
  $slider.slick({
    arrows: false,
    dots: true,
    fade: true,
    draggable: false,
    infinite: false,
    swipe: false,
    touchMove: false,
    speed: 250,
    appendDots: $('.lead-carousel-nav'),
    adaptiveHeight: true
  });

  $('.mobile-menu-trigger').on('click', function(){
    $(this).toggleClass('open');
  });
  $('.lead-carousel-nav li').on('click', function(){
    $('.mobile-menu-trigger').removeClass('open');
  });
}
leadCarousel();