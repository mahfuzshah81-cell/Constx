/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
  
    var InversWeb = {
        m: function (e) {
            InversWeb.d();
            InversWeb.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            // InversWeb.jaraLux();
            // InversWeb.fadeInrightScroll();
            // InversWeb.stickyStack();
            InversWeb.smoothScroll();
            InversWeb.metismenu();
            InversWeb.sideMenu();
            InversWeb.dateUpdate();
            InversWeb.swiperjsactive();
            InversWeb.odoMeter();
            InversWeb.stickyTopelements();
            // InversWeb.jarallax();
            InversWeb.stickyHeader();
            InversWeb.backToTopInit();
            InversWeb.pricingToggle();
            InversWeb.searchOption();
            InversWeb.feedbackCollupsShow();
            InversWeb.preloader();
            InversWeb.salActive();

        },

        jaraLux: function (e) {
            $(document).ready(function () {
              $('.jarallax').jarallax();
            });
        },
        fadeInrightScroll: function(){
          function rtlValue(value) {
            const isRTL = document.documentElement.dir === "rtl";
            return isRTL ? -value : value;
          }
          // Fade In on Scroll Animation
          function initFadeInRightOnScroll() {
            const panels = document.querySelectorAll(".inversweb-fadein-right-on-scroll");
            if (panels.length === 0) return;

            const startOffset = 50;
            panels.forEach((panel, i) => {
              gsap.set(panel, {
                xPercent: rtlValue(40),
                ease: "none",
              });
              gsap.to(panel, {
                xPercent: 0,
                scrollTrigger: {
                  trigger: panel,
                  start: `top bottom-=300`,
                  end: `bottom bottom-=300`,
                  pin: false,
                  pinSpacing: false,
                  scrub: true,
                  markers: false,
                  invalidateOnRefresh: true,
                },
              });
            });
          }
          initFadeInRightOnScroll();
        },


        stickyStack: function(){
          let mediaMatch = gsap.matchMedia();

          $(document).ready(function () {
            const serviceStack = gsap.utils.toArray(".elements-dashboard-sticky");
            if (serviceStack.length > 0) {
              mediaMatch.add("(min-width: 992px)", () => {
                serviceStack.forEach(item => {
                  gsap.to(item, {
                    opacity: 0,
                    scale: 0.9,
                    y: 50,
                    scrollTrigger: {
                      trigger: item,
                      scrub: true,
                      start: "top top",
                      pin: true,
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }

          });
      
        },

        smoothScroll: function (e) {
          $(document).ready(function () {
              var $anchors = $('.onepage .header-fixed-bottom a[href^="#"]');

              $anchors.on('click', function (e) {
                  e.preventDefault();

                  var targetSelector = $.attr(this, 'href');

                  if (targetSelector === "#" || targetSelector === "") {
                      return; // ignore empty/invalid href
                  }

                  var target = $(targetSelector);
                  if (target.length) {
                      $('html, body').animate(
                          { scrollTop: target.offset().top },
                          2000
                      );

                      $anchors.removeClass('active'); 
                      $(this).addClass('active'); 
                  }
              });

              // Scroll spy
              $(window).on('scroll', function () {
                  var scrollPos = $(document).scrollTop();

                  $anchors.each(function () {
                      var currLink = $(this);
                      var refSelector = currLink.attr('href');

                      if (refSelector === "#" || refSelector === "") return; // ignore invalid

                      var refElement = $(refSelector);

                      if (refElement.length) {
                          if (refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos + 100) {
                              $anchors.removeClass('active');
                              currLink.addClass('active');
                          }
                      }
                  });
              });
          });
        },

        backToTopInit: function () {
          jQuery(function ($) {
              var scrollTrigger = 100; // show for scroll tiggers
              var shown = false;

              function backToTopHandler() {
                  var scrollTop = $(window).scrollTop();

                  // Show / Hide elements
                  if (scrollTop > scrollTrigger && !shown) {
                      $('.show-on-scroll').addClass('show').removeClass('hide');
                      shown = true;
                  }
                  if (scrollTop <= scrollTrigger && shown) {
                      $('.show-on-scroll').addClass('hide').removeClass('show');
                      shown = false;
                  }

                  // Scroll progress (max height = 100px)
                  var pageHeight = $(document).height() - $(window).height();
                  var progress = (scrollTop / pageHeight) * 100; // % progress
                  var maxHeight = 100; // px
                  var barHeight = (progress / 100) * maxHeight;

                  $(".scrollbar-v").css("height", barHeight + "px");
              }

              // Scroll to top click (float-text + scrollbar-v)
              $('.float-text a, .scrollbar-v').on('click', function (e) {
                  e.preventDefault();
                  $('html, body').stop(true).animate({ scrollTop: 0 }, 700);
              });

              // Scroll listener
              $(window).on('scroll', backToTopHandler);

          }); 

        },

        metismenu: function () {
          $('#mobile-menu-active').metisMenu();
        },

        // side menu desktop
        sideMenu: function () {
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          // $(document).on('click', '.onepage .mainmenu li a', function () {
          //   $("#side-bar").removeClass("show");
          //   $("#anywhere-home").removeClass("bgshow");
          // });
        },

        dateUpdate: function () {

          let fullYear = document.querySelectorAll("#year");

          if (fullYear.length) {
            window.addEventListener("DOMContentLoaded", function () {
              document.getElementById("year").textContent = new Date().getFullYear();
            });
          }

        },
        swiperjsactive: function(){
          var swiper = new Swiper(".marqueeSwiper", {
            loop: true,
            freemode: true,
            slidesPerView: 'auto',
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            allowTouchMove: false,
            speed: 14000,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
          });
        },

        odoMeter: function () {
          $(document).ready(function () {
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function triggerOdometer(element) {
              const $element = $(element);
              if (!$element.hasClass('odometer-triggered')) {
                const countNumber = $element.attr('data-count');
                $element.html(countNumber);
                $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
              }
            }

            function handleOdometer() {
              $('.odometer').each(function () {
                if (isInViewport(this)) {
                  triggerOdometer(this);
                }
              });
            }

            // Check on page load
            handleOdometer();

            // Check on scroll
            $(window).on('scroll', function () {
              handleOdometer();
            });
          });
        },
        
        stickyTopelements: function () {
            var stickyElement = $('.inversweb-sticky-section');

            stickyElement.each(function () {
                var $this = $(this);

                $(window).on("scroll", function () {
                    var windowTop = $(window).scrollTop();     // Scroll position
                    var windowHeight = $(window).height();     // Window height
                    var triggerPoint = windowTop + (windowHeight * 0.2); // Top theke 20%

                    var elementTop = $this.offset().top;       // Section position

                    if (triggerPoint >= elementTop) {
                        $this.addClass('zoomactive');
                    } else {
                        $this.removeClass('zoomactive');
                    }
                });
            });


            var masonary = $('.invers-theme-masonary');
            masonary.each(function () {
                $('.invers-theme-masonary').imagesLoaded(() => {
                    $('.invers-theme-masonary').masonry({
                        itemSelector: '.invers-masonary-item',
                        horizontalOrder: true,
                    });
                })
            })


        },

        
        jarallax: function (e) {
          $(document).ready(function () {
              // Detect if device is mobile
              function isMobileDevice() {
                return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                );
              }

              // Initialize jarallax only if it's not a mobile device
              if (!isMobileDevice()) {
                $('.jarallax').jarallax({
                  speed: 0.4, // scroll speed 
                  imgSize: 'cover',
                  imgPosition: 'center',
                });
              } else {
                console.log('Jarallax skipped on mobile devices');
              }
          });
        },


        // sal animatioin activation
        salActive: function () {
          sal({
            threshold: 0.1,
            once: true,
          });
        },
  
        // sticky header activation
        stickyHeader: function (e) {

          $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
              $('.header--sticky').addClass('sticky')
            } else {
              $('.header--sticky').removeClass('sticky')
            }
          })

          $(document).ready(function () {
              var $header = $('.header--sticky.header-sticky-smooth');
              var initialHeight = $header.outerHeight(); // Default header height (with header-top)

              $(window).scroll(function () {
                  if ($header.length) {
                      if ($(this).scrollTop() > 150) {
                          // Use always the initial full height
                          $('body').css('padding-top', initialHeight + 'px');
                      } else {
                          $('body').css('padding-top', '0');
                      }
                  }
              });
          });


        },

        pricingToggle: function () {
            $(document).ready(function () {
              $(".pricing__toogle").change(function () {
                if ($(this).is(":checked")) {
                  $(".monthly__pricing").removeClass("active");
                  $(".yearly__pricing").addClass("active");
                } else {
                  $(".monthly__pricing").addClass("active");
                  $(".yearly__pricing").removeClass("active");
                }
              });
            });
        },

        searchOption: function () {
            $(document).on('click', '#search', function () {
                $(".search-input-area").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },

        feedbackCollupsShow: function () {
          document.addEventListener("DOMContentLoaded", function () {
              var e = document.querySelector(".button-area-box-shadow .tmp-btn"),
                  t = document.querySelector(".overlay-bottom-section"),
                  o = !1;
              e &&
                  t &&
                  e.addEventListener("click", function () {
                      o
                          ? ((e.style.margin = ""), (e.innerHTML = "View All Reviews"), t.classList.add("overlay-bottom-section"))
                          : ((e.style.margin = "0px auto 0 auto"), (e.innerHTML = "View Less Reviews"), t.classList.remove("overlay-bottom-section")),
                          (o = !o);
                  });
          });
        },

        preloader:function(){
        //   window.addEventListener('load', function () {
        //     document.querySelector('body').classList.add("loaded")
        //   });   
            document.addEventListener("DOMContentLoaded", function () {
              const body = document.body;
              let done = false;
            
              const hide = () => {
                if (done) return;
                done = true;
                body.classList.add("loaded");
              };
            
              // DOM ready = hide
              hide();
            
              // Safety fallback (1.5s)
              setTimeout(hide, 1500);
            });
    
        },
       

        
    }

    
    InversWeb.m();
  })(jQuery, window) 







