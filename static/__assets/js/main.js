/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Data Background
03. Menu Controls Js
04. Offcanvas Js
05. Search Js
06. Body overlay Js
07. Sticky Header Js
08. Slider Activation
09. Text Slider - 1
10. Text Slider - 2
11. Brand
12. Portfolio
13. Testimonial
14. Team List For Image
15. Award List For Image
16. Magnate Animation
17. Lettering Js
18. Footer Text Animation
19. Counter
20. Magnific Popup Image
21. Magnific Popup Video
22. Section Title Animation
23. Mouse Move Js
24. Button Hover Effect
25. Mouse Custom Cursor 
26. Mouse Custom Cursor - 2
27. Hover Reveal For Image
28. Hover Reveal For Text
29. Scroll Animation
30. Back To Top Js
31. Magnific Popup img view
32. Magnific Popup video view
33. Wow Js
34. Counter Js
35. Header Height
36. Jquery Appear Raidal
****************************************************/

(function($) {
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function() {
        $("#loading").fadeOut(500);
    });

    ////////////////////////////////////////////////////
    // 02. Data Background
    $("[data-background").each(function() {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    ////////////////////////////////////////////////////
    // 03. Menu Controls Js
    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;

        let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

        arrow.each(function() {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='far fa-angle-right'></i>";

            self.append(function() {
                return arrowBtn;
            });

            self.find("button").on("click", function(e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();


            });

        });
    }

    ////////////////////////////////////////////////////
    // 04. Offcanvas Js
    $(".tp-offcanvas-open-btn").on("click", function() {
        $(".tp-offcanvas__area").addClass("offcanvas-opened");
        $(".body-overlay").addClass("opened");
    });

    $(".tp-offcanvas-close-btn").on("click", function() {
        $(".tp-offcanvas__area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
    });

    ////////////////////////////////////////////////////
    // 05. Search Js
    $(".tp-search-open-btn").on("click", function() {
        $(".tp-search-area").addClass("opened");
        $(".body-overlay").addClass("opened");
    });

    $(".tp-search-close-btn").on("click", function() {
        $(".tp-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    ////////////////////////////////////////////////////
    // 06. Body overlay Js
    $(".body-overlay").on("click", function() {
        $(".tp-offcanvas__area").removeClass("offcanvas-opened");
        $(".tp-search-area").removeClass("opened");
        $(".cartmini__area").removeClass("cartmini-opened");
        $(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
    });

    ////////////////////////////////////////////////////
    // 07. Sticky Header Js
    windowOn.on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("header-sticky");
            $("#header-sticky-2").removeClass("header-sticky-2");
        } else {
            $("#header-sticky").addClass("header-sticky");
            $("#header-sticky-2").addClass("header-sticky-2");
        }
    });

    windowOn.on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".tp-side-menu-5").removeClass("sticky-active");
        } else {
            $(".tp-side-menu-5").addClass("sticky-active");
        }
    });

    ////////////////////////////////////////////////////
    // 08. Slider Activation 
    let sliderOne = new Swiper('.tp-slider-active', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 2000,
        effect: 'fade',
        breakpoints: {
            '1600': {
                slidesPerView: 1,
            },
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: '.prev',
            nextEl: '.next',
        },
        pagination: {
            el: ".tp-pagination",
            clickable: true,
        },

    });

    ////////////////////////////////////////////////////
    // 09. Text Slider - 1
    var tp_feature_slide = new Swiper(".tp-text__1-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 10000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    ////////////////////////////////////////////////////
    // 10. Text Slider - 2
    var tp_feature_slide = new Swiper(".tp-text__6-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: false,
        speed: 6000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    ////////////////////////////////////////////////////
    // 11. Brand
    var BrandSlider = new Swiper('.tp-brand__active', {
        slidesPerView: 5,
        loop: true,
        autoplay: true,
        speed: 1500,
        centeredSlides: true,
        breakpoints: {
            '1200': {
                slidesPerView: 5,
            },
            '992': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    ////////////////////////////////////////////////////
    // 12. Portfolio
    let portfolioSlider = new Swiper('.tp-portfolio-active', {
        slidesPerView: 2,
        loop: true,
        autoplay: true,
        speed: 1000,
        spaceBetween: 24,
        effect: 'slide',
        breakpoints: {
            '1600': {
                slidesPerView: 2,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".tp-testimonial-dots, .tp-testimonial-number",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

        navigation: {
            prevEl: '.prev',
            nextEl: '.next',
        }

    });

    ////////////////////////////////////////////////////
    // 13. Testimonial
    let testiSlider = new Swiper('.tp-testi-active', {
        slidesPerView: 2,
        loop: true,
        autoplay: true,
        speed: 1000,
        spaceBetween: 24,
        effect: 'slide',
        breakpoints: {
            '1600': {
                slidesPerView: 2,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: '.testi-prev',
            nextEl: '.testi-next',
        }

    });

    ////////////////////////////////////////////////////
    // 14. Team List For Image
    $('.tp-team-list-wrapp .tp-team-list-item').on("mouseenter", function() {
        $('#tp-team-thumb').removeClass().addClass($(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
    });

    ////////////////////////////////////////////////////
    // 15. Award List For Image
    $('.tp-award-list-wrapp .tp-award-list-item').on("mouseenter", function() {
        $('#tp-award-thumb').removeClass().addClass($(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
    });

    ////////////////////////////////////////////////////
    // 16. Magnate Animation
    var magnets = document.querySelectorAll('.gsap-magnetic')
    var strength = 50

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function(event) {
            TweenMax.to(event.currentTarget, 1, {
                x: 0,
                y: 0,
                ease: Power4.easeOut
            })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()
        TweenMax.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })
    }

    ////////////////////////////////////////////////////
    // 17. Lettering Js
    function injector(t, splitter, klass, after) {
        var a = t.text().split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
            });
            t.empty().append(inject);
        }
    }

    var methods = {
        init: function() {

            return this.each(function() {
                injector($(this), '', 'char', '');
            });

        },

        words: function() {

            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines: function() {

            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
                // (of the word "split").  If you're trying to use this plugin on that 
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function(method) {
        // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };

    $(".tp-circle-anime").lettering();

    ////////////////////////////////////////////////////
    // 18. Footer Text Animation
    if ($('.footer-big-text').length > 0) {

        let cta = gsap.timeline({
            repeat: -1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.footer-big-text',
                start: 'bottom 100%-=50px'
            }
        });
        gsap.set('.footer-big-text', {
            opacity: 0
        });
        gsap.to('.footer-big-text', {
            opacity: 1,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.footer-big-text',
                start: 'bottom 100%-=50px',
                once: true
            }
        });

        let mySplitText = new SplitText(".footer-big-text", {
            type: "words,chars"
        });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale(['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']);
        cta.to(chars, {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power1.out",
            stagger: 0.04,
            transformOrigin: 'center bottom'
        });
        cta.to(chars, {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8
        }, 0.5);
        cta.to(chars, {
            scaleY: 1,
            ease: "elastic.out",
            stagger: 0.03,
            duration: 1.5
        }, 0.5);
        cta.to(chars, {
            color: (i, el, arr) => {
                return endGradient(i / arr.length).hex();
            },
            ease: "power1.out",
            stagger: 0.03,
            duration: 0.3
        }, 0.5);
        cta.to(chars, {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8
        }, 0.7);
        cta.to(chars, {
            color: '#fff',
            duration: 1.4,
            stagger: 0.05
        });
    }

    ////////////////////////////////////////////////////
    // 19. Counter
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    ////////////////////////////////////////////////////
    // 20. Magnific Popup Image
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    ////////////////////////////////////////////////////
    // 21. Magnific Popup Video
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 22. Section Title Animation
    let st = $(".tp-split__text");
    if (st.length == 0) return;
    gsap.registerPlugin(SplitText);
    st.each(function(index, el) {
        el.split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "tp-split__line"
        });
        gsap.set(el, {
            perspective: 400
        });

        if ($(el).hasClass('tp-split__in-right')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                x: "50",
                ease: "Back.easeOut",
            });
        }
        if ($(el).hasClass('tp-split__in-left')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                x: "-50",
                ease: "circ.out",
            });
        }
        if ($(el).hasClass('tp-split__in-up')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                y: "80",
                ease: "circ.out",
            });
        }
        if ($(el).hasClass('tp-split__in-down')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                y: "-80",
                ease: "circ.out",
            });
        }
        el.anim = gsap.to(el.split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            x: "0",
            y: "0",
            rotateX: "0",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02,
        });
    });


    ////////////////////////////////////////////////////
    // 23. Mouse Move Js
    var moveSection = $(".tp-mouse-move-section");
    var moveSectionElements = $(".tp-mouse-move-element");

    if (moveSection && moveSectionElements) {
        moveSection.on("mousemove", function(e) {
            var x = e.clientX
            var y = e.clientY
            let viewportWidth = window.innerWidth;
            let viewportHeight = window.innerHeight;
            let center = viewportWidth / 2
            let centerHeight = innerHeight / 2

            if (x > center) {
                gsap.to(moveSectionElements, {
                    x: 20,
                    duration: 2,
                    ease: "power4.out"
                })
            } else {
                gsap.to(moveSectionElements, {
                    x: -20,
                    scale: 1.1,
                    duration: 2,
                    ease: "power4.out"
                })
            }
            if (y > centerHeight) {
                gsap.to(moveSectionElements, {
                    y: 5,
                    duration: 2,
                    ease: "power4.out"
                })
            } else {
                gsap.to(moveSectionElements, {
                    y: -5,
                    duration: 2,
                    ease: "power4.out"
                })
            }
        });
    }

    ////////////////////////////////////////////////////
    // 24. Button Hover Effect
    var hoverBtns = gsap.utils.toArray(".tp-hover__btn-wrap");
    const hoverBtnItem = gsap.utils.toArray(".tp-hover__btn-item");
    hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function(e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, hoverBtnItem[i], 80);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function(e) {
            gsap.to(hoverBtnItem[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });

    ////////////////////////////////////////////////////
    // 25. Mouse Custom Cursor 
    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("active"), t.classList.add("active");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("active"),
                            t.classList.remove("active"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();

    $(".tp-cursor-point-area").on("mouseenter", function() {
        $(".mouseCursor").addClass("cursor-big");
    });

    $(".tp-cursor-point-area").on("mouseleave", function() {
        $(".mouseCursor").removeClass("cursor-big");
    });

    $(".tp-cursor-point-area-2").on("mouseenter", function() {
        $(".cursor-inner").addClass("active");
    });

    $(".tp-cursor-point-area-2").on("mouseleave", function() {
        $(".cursor-inner").removeClass("active");
    });

    ////////////////////////////////////////////////////
    // 26. Mouse Custom Cursor - 2
    if (!$('body').hasClass("hide-magic-cursor")) {

        var magicCursor = document.getElementById("innerHTML");

        document.addEventListener("mousemove", mousemoveHandler);

        function mousemoveHandler(e) {

            var hideMagicCursor = $('.tp-work__2-item');
            hideMagicCursor.each(function(e) {
                $(this).on("mouseenter", function() {
                    gsap.set(magicCursor, {
                        opacity: 0
                    });
                });

                $(this).on("mouseleave", function() {
                    gsap.set(magicCursor, {
                        opacity: 1
                    });
                });
            })

        }
    }

    ////////////////////////////////////////////////////
    // 27. Hover Reveal For Image
    const hoverItem = document.querySelectorAll(".tp-hover__reveal-item");

    function moveImage(e, hoverItem, index) {
        const item = hoverItem.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverItem.children[index]) {
            hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    hoverItem.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveImage(e, item, 1), 50);
        });
    });

    ////////////////////////////////////////////////////
    // 28. Hover Reveal For Text
    const hoverText = document.querySelectorAll(".tp-hover__reveal-text");

    function moveText(e, hoverText) {
        const item = hoverText.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverText.children[0].children[2]) {
            hoverText.children[0].children[2].style.transform = `translate(${x}px, ${y}px)`;
        }
    }

    hoverText.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveText(e, item), 100);
        });
    });

    ////////////////////////////////////////////////////
    // 29. Scroll Animation
    function scrollAnimi() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.tp-section-hidden');
        hiddenElements.forEach((el) => observer.observe(el));

    }
    scrollAnimi();


    ////////////////////////////////////////////////////
    // 30. Back To Top Js
    function back_to_top() {
        var btn = $('#back_to_top');
        var btn_wrapper = $('.back-to-top-wrapper');

        windowOn.scroll(function() {
            if (windowOn.scrollTop() > 300) {
                btn_wrapper.addClass('back-to-top-btn-show');
            } else {
                btn_wrapper.removeClass('back-to-top-btn-show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    }
    back_to_top();

    ////////////////////////////////////////////////////
    // 31. Magnific Popup img view
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    ////////////////////////////////////////////////////
    // 32. Magnific Popup video view
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 33. Wow Js
    new WOW().init();

    ////////////////////////////////////////////////////
    // 34. Counter Js
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    ////////////////////////////////////////////////////
    // 35. Header Height
    if ($('.tp-header-height').length > 0) {
        var headerHeight = document.querySelector(".tp-header-height");
        var setHeaderHeight = headerHeight.offsetHeight;

        $(".tp-header-height").each(function() {
            $(this).css({
                'height': setHeaderHeight + 'px'
            });
        });
    }

    ////////////////////////////////////////////////////
    // 36.Jquery Appear Raidal
    if (typeof($.fn.knob) != 'undefined') {
        $('.knob').each(function() {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function() {
                    $(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function() {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150,
            });
        });
    }


})(jQuery);