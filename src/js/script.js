$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/right.png"> </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
      $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
      });
      $('.catalog-item_link').each(function(i) {
          $(this).on('click', function(e){
              e.preventDefault();
              $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
              $('.catalog-item_list').eq(i).toggleClass('catolog-item_list_active');
          })
      })
      //Modal
      $('[data-modal=consultation]').on('click', function(){
          $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal_close').on('click', function(){
          $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      
      $('.button_mini').each(function(i){
          $(this).on('click', function(){
              $('#order .modal_description').text($('.catalog-item_subtitle').eq(i).text());
              $('.overlay, #order').fadeIn('slow');
          });
      });

      $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e){
          e.preventDefault();
          $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: $(this).serialize()
          }).done(function(){
              $(this).find("input").val("");


              $('form').trigger('reset');
          });
          return false;
      });

      //pageup
      $(window).scroll(function(){
          if ($(this).scrollTop() > 2000){
              $('.pageup').fadeIn();
          } else {
              $('.pageup').fadeIn();
          }
      });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  });