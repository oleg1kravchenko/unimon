$(document).ready(function() {

		/*animate*/
		new WOW().init();


	$(".list-tags a").click(function() {
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass("active");
	  });

	  $(".nav-page a").click(function() {
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass("active");
	  });

	$('.form').each(function() {
        const $form = $(this);
        const $button = $form.find('.btn-main');

        function validateForm() {
            let isValid = true;
            $form.find('[required]').each(function() {
                if ($(this).is(':invalid') || !$(this).val()) {
                    isValid = false;
                    return false;
                }
            });

            if (isValid) {
                $button.removeClass('disabled').prop('disabled', false);
            } else {
                $button.addClass('disabled').prop('disabled', true);
            }
        }

        validateForm();

        $form.find('[required]').on('input change', function() {
            validateForm();
        });
    });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

	//плавный скролл
	$(".top-article li a, .sidebar-article li a, .nav-catalog li a").mPageScroll2id({
		offset: 20
	});

	$(".item-question__head").click(function() {
		var index = $(this).parent().index();  // Получаем индекс текущего item-question
	
		// Обновляем активный item-question
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	
		// Обновляем активный tab-pane-functional
		$(".tab-pane-functional").eq(index).addClass("active").siblings().removeClass("active");
			// Инициализация: скрываем все tab-pane-functional, кроме первого
	$(".tab-pane-functional").fadeOut(0);
	$(".tab-pane-functional.active").fadeIn(200);
	});
	


	//кнопка sandwich
	$(".sandwich").click(function() {
		if ($(".menu-mobile").hasClass("active")) {
			$(".menu-mobile").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		} else {
			$(".menu-mobile").addClass("active");
			$(".menu-overlay").fadeIn(200);
			$("body").addClass("no-scroll");
		}
	});

	$(".menu-overlay, .menu-mobile__close").click(function() {
		$(".menu-mobile").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	$(".fixed-buttons__head").click(function() {
		$(".fixed-buttons__content").slideToggle(200);
		$(this).toggleClass("active");
	});

	$(".nav__haschld > a").click(function(e) {
		$(this).parent().siblings().find(".nav__dropdown").slideUp(200);
		$(this).parent().siblings().removeClass("active");
		$(this).siblings(".nav__dropdown").slideToggle(200);
		$(this).parent().toggleClass("active");
	});

	$(".encryption__plus").click(function(e) {
		$(this).siblings(".encryption__value").fadeToggle(200);
	});


	//слайдер

	$('.slider-recommendations').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-next slick-arrow"><span>Еще</span><img src="img/long_arrow.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><span>Еще</span><img src="img/long_arrow.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					variableWidth: true
				}
			}
		]
	});

	$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav, .slider-for-text',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
				}
			}
		]
	});

	$('.slider-for-text').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		asNavFor: '.slider-nav, .slider-for-text',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
	});

	$('.slider-nav').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		asNavFor: '.slider-for, .slider-for-text',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					
				}
			}
		]
	});

	$('.slider-for-vertical').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav-vertical, .slider-for-vertical-text',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
				}
			}
		]
	});

	$('.slider-for-vertical-text').slick({
		arrows: false,
		dots: false,
		infinite: true,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav, .slider-for-vertical-text',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
	});

	$('.slider-nav-vertical').slick({
		arrows: true,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for-vertical, .slider-for-vertical-text',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
				verticalSwiping: false,
				}
			}
		]
	});

	$('.slider-clients_first').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		slidesToShow: 15,
		slidesToScroll: 1,
		touchThreshold: 1000,
		centerMode: true,
		focusOnSelect: true,
		speed: 6000,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					variableWidth: true,
				verticalSwiping: false,
				}
			}
		]
	});

	$('.slider-clients_second').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		slidesToShow: 15,
		slidesToScroll: 1,
		touchThreshold: 1000,
		focusOnSelect: true,
		centerMode: true,
		speed: 6000,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					variableWidth: true,
				verticalSwiping: false,
				}
			}
		]
	});

	$('.slider-clients_third').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		slidesToShow: 15,
		slidesToScroll: 1,
		touchThreshold: 1000,
		centerMode: true,
		focusOnSelect: true,
		speed: 6000,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					variableWidth: true,
				verticalSwiping: false,
				}
			}
		]
	});

	$('.slider-for-card').slick({
		arrows: false,
		dots: false,
		infinite: true,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav-card',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev_card.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next_card.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
				}
			}
		]
	});

	$('.slider-nav-card').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for-card',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
				verticalSwiping: false,
				}
			}
		]
	});

	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	$(".item-calculation__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
	  });

	  $('.nav-card a').on('click', function(e) {
		e.preventDefault();
		
		var targetId = $(this).attr('href');
		
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		

		$('html, body').animate({
		  scrollTop: $(targetId).offset().top - 80
		}, 800); 

		setTimeout(() => {
			$(".header").removeClass("nav-down");
			$(".header").addClass("nav-up");
		}, 1000);
	  });



	  if ($('.nav-card').length > 0) {
		var navCard = $('.nav-card');
		var navCardOffset = navCard.offset().top;
	
		$(window).scroll(function() {
			if ($(window).scrollTop() >= navCardOffset) {
				navCard.addClass('fixed');
			} else {
				navCard.removeClass('fixed');
			}
		});
	  }

	  $(".fancybox-order").fancybox({
		autoFocus: false,
		backFocus: false,
		baseClass: "fancy-order"
	});

	

	  $(".add-to-calculation").click(function(e) {
		e.preventDefault();
		$(".btn-basket").fadeIn(200);
	  });

	  $(".btn-open-form").click(function(e) {
		e.preventDefault();
		$(".modal-order-wrap").addClass("active");
	  });

	  $(".open-calculation-form").click(function(e) {
		e.preventDefault();
		$(this).remove();
		$(".calculation__form").slideDown(200);
	  });


	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

	$(".fancybox-img").fancybox({
		autoFocus: false,
		backFocus: false,
		baseClass: "fancy-image"
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

