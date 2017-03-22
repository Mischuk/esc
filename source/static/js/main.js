$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    /*! Inputs mask*/
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"_"});
    };
    inputMask();

    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('body').on('click', '.m_lead-carousel button[type=submit]', function(){
      $('#popup-total-trigger').trigger('click');
      return false;
    });

    $('#modal-callback button[type=submit]').on('click', function(){
      $('#popup-success-trigger').trigger('click');
      return false;
    });

    $('.modal-tabs-nav .item a').on('click', function(){
      $('.modal-tabs-nav .item a').removeClass('current');
      $(this).addClass('current');
      $('.modal-tabs-content .item').removeClass('current');
      $('.modal-tabs-content .item').eq($(this).parent().index()).addClass('current');
    });

    //=include modules.js
});