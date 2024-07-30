import { setLanguage } from './translate.js';
import { initializeData } from './api.js';
import { renderHomeSection } from './home.js';
import { renderAboutSection } from './about.js'; 
import { renderServicesSection } from './service.js';
import { renderBlogSection } from './blog.js';
import { renderProjectsSection } from './project.js';
import { renderStaffSection } from './team.js';
import { renderFooter } from './footer.js';
import { renderContactSection } from './contact.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initializeData();
    await renderHomeSection();
	  await renderServicesSection();
    await renderProjectsSection();
	  await renderAboutSection();
    await renderStaffSection();
    await renderBlogSection();
    await renderFooter();
    await renderContactSection();
    
    const savedLanguage = localStorage.getItem('olma-tech-language-code') || 'ru';
    setLanguage(savedLanguage);
    // AOS initialization
    AOS.init({
      duration: 800,
      easing: 'slide'
    });

    (function ($) {
      "use strict";

      $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
      });

      var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
          $('.js-fullheight').css('height', $(window).height());
        });
      };
      fullHeight();

      // loader
      var loader = function () {
        setTimeout(function () {
          if ($('#ftco-loader').length > 0) {
            $('#ftco-loader').removeClass('show');
          }
        }, 1);
      };
      loader();

      // Scrollax
      $.Scrollax();

      // Burger Menu
      var burgerMenu = function () {
        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
          event.preventDefault();
          if ($('#ftco-nav').is(':visible')) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
          }
        });
      };
      burgerMenu();

      var onePageClick = function () {
        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
          event.preventDefault();
          var href = $.attr(this, 'href');
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
          }, 500);
        });
      };
      onePageClick();

      var carousel = function () {
        $('.home-slider').owlCarousel({
          loop: true,
          autoplay: true,
          margin: 0,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          nav: false,
          autoplayHoverPause: false,
          items: 1,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
          }
        });
        $('.carousel-testimony').owlCarousel({
          autoplay: true,
          autoHeight: true,
          center: true,
          loop: true,
          items: 1,
          margin: 30,
          nav: false,
          dots: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
        $('.carousel-project').owlCarousel({
          autoplay: true,
          autoHeight: true,
          center: true,
          loop: true,
          items: 1,
          margin: 30,
          nav: false,
          dots: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
      };
      carousel();

      $('nav .dropdown').hover(function () {
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
      }, function () {
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
      });

      $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
      });

      var scrollWindow = function () {
        $(window).scroll(function () {
          var $w = $(this),
            st = $w.scrollTop(),
            navbar = $('.ftco_navbar'),
            sd = $('.js-scroll-wrap');

          if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
              navbar.addClass('scrolled');
            }
          }
          if (st < 150) {
            if (navbar.hasClass('scrolled')) {
              navbar.removeClass('scrolled sleep');
            }
          }
          if (st > 350) {
            if (!navbar.hasClass('awake')) {
              navbar.addClass('awake');
            }
            if (sd.length > 0) {
              sd.addClass('sleep');
            }
          }
          if (st < 350) {
            if (navbar.hasClass('awake')) {
              navbar.removeClass('awake');
              navbar.addClass('sleep');
            }
            if (sd.length > 0) {
              sd.removeClass('sleep');
            }
          }
        });
      };
      scrollWindow();

      var counter = function () {
        $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {
          if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
            $('.number').each(function () {
              var $this = $(this),
                num = $this.data('number');
              console.log(num);
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_separator_number_step
                }, 7000
              );
            });
          }
        }, { offset: '95%' });
      };
      counter();

      var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {
          if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function () {
              $('body .ftco-animate.item-animate').each(function (k) {
                var el = $(this);
                setTimeout(function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight ftco-animated');
                  } else {
                    el.addClass('fadeInUp ftco-animated');
                  }
                  el.removeClass('item-animate');
                }, k * 50, 'easeInOutExpo');
              });
            }, 100);
          }
        }, { offset: '95%' });
      };
      contentWayPoint();

      $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300
        }
      });

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });

    })(jQuery);

  } catch (error) {
    console.error('Error initializing the application:', error);
  }
});
