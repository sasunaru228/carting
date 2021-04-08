$(document).ready(function() {

	// City picker
	$('#city-picker .dropdown ul li a').on('click', function(e) {
		Cookies.set('city', 'selected', {expires: 1/96, domain: 'blackstarkarting.ru'});
	});

	// Scroll 2 ID
	$("a[rel='m_PageScroll2id']").mPageScroll2id({
		offset: 50
	});

	//Promo time
	if ( $('#promo-details').length ) {
		$('#promo-details .dates .item p.value').each(function() {
			if ( $(this).text().length < 5)
				$(this).parent('.item').remove();
		});
	}

	// Parallax

	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		hideDistantElements: true
	});

	// AOS animation

	AOS.init();

	// City picker
	$('#city-picker').hover(function () {
		$('#current-city').addClass('active');
    	$('#city-picker ul').fadeIn(300);
	}, 
	function () {
		$('#current-city').removeClass('active');
	    $('#city-picker ul').fadeOut(300);
	});

	// Mobile city picker
	$('#mobile-city-picker').on('touchstart', function() {
		if ( !$('#mobile-current-city').hasClass('active') ) {
			$('#mobile-current-city').addClass('active');
    		$('#mobile-city-picker ul').fadeIn(300);
		} else {
			$('#mobile-current-city').removeClass('active');
	    	$('#mobile-city-picker ul').fadeOut(300);
		}
	});

	// Scroll menu

	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if ( height  > 50 ) {
	        $('header').addClass('scroll');
	        if (window.matchMedia("screen and (min-width: 1025px)").matches) {
	        	$('header .contacts p, header #city-picker').fadeOut('100');
	        	$('#main-logo').fadeOut('300');
	        	$('#scroll-logo').fadeIn('300');
	        	$('header .contacts p').fadeOut('300');
	    	}
	    } else {
	    	$('header').removeClass('scroll');
	    	if (window.matchMedia("screen and (min-width: 1025px)").matches) {
	    		$('header .contacts p, header #city-picker').fadeIn('300');
	    		$('#scroll-logo').fadeOut('300');
	    		$('#main-logo').fadeIn('300');
	    	}
	    }
	});

	// Mobile menu background

	$(document).on('opening', '.mobile-menu', function () {
		$('body').addClass('mobile-menu-open');
	});
	$(document).on('closed', '.mobile-menu', function () {
		$('body').removeClass('mobile-menu-open');
	});

	// Main slider

	var menu = ['Карты', 'Карты', 'Карты',  'Сертификаты', 'Школа', 'Соревнования']
	var swiper = new Swiper('.main-slider', {
		spaceBetween: 500,
		effect: 'coverflow',
		grabCursor: false,
		simulateTouch: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 5,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 700,
			modifier: 1,
			slideShadows : false
		},
		pagination: {
	    	el: '.main-pagination',
			clickable: true,
	        renderBullet: function (index, className) {
		        return '<li class="' + className + '">' + '<p>' + (menu[index]) + '</p>' + '</li>';
	        },
	    },
		breakpoints: {
			1440: {
				coverflowEffect: {
					modifier: 1.5,
					spaceBetween: 200
				}
			},
			1024: {
				coverflowEffect: {
					spaceBetween: 0,
					stretch: 450,
					modifier: 0.7
				}
			},
			768: {
				coverflowEffect: {
					spaceBetween: 0,
					depth: 200,
					stretch: 450,
					modifier: 0.9
				}
			},
			414: {
				effect: 'slide',
				spaceBetween: 0,
				slidesPerView: 1,
				navigation: {
					nextEl: '.main-slider .next',
					prevEl: '.main-slider .prev',
				}
			}
		}
	});

	swiper.on('slideChangeTransitionStart', function () {
	  if ( $('.hide-bullet').hasClass('swiper-slide-active') ) {
	  	$('#services .swiper-pagination-bullet:nth-child(1)').addClass('swiper-pagination-bullet-active');
	  }
	  if ( $('.kart-slide').hasClass('swiper-slide-active') ) {
	  	$('#services .info-container .info:not(#kart-info)').css('display', 'none');
	  	$('#kart-info').fadeIn(300);
	  } else if ( $('.certificate-slide').hasClass('swiper-slide-active') ) {
	  	$('#services .info-container .info').css('display', 'none');
	  	$('#certificate-info').fadeIn(300);
	  } else if ( $('.rent-slide').hasClass('swiper-slide-active') ) {
	  	$('#services .info-container .info').css('display', 'none');
	  	$('#rent-info').fadeIn(300);
	  } else if ( $('.school-slide').hasClass('swiper-slide-active') ) {
	  	$('#services .info-container .info').css('display', 'none');
	  	$('#school-info').fadeIn(300);
	  } else if ( $('.competition-slide').hasClass('swiper-slide-active') ) {
	  	$('#services .info-container .info').css('display', 'none');
	  	$('#competition-info').fadeIn(300);
	  }
	});

	$('.main-slider').on('click', '.swiper-slide', function (e) {
	    e.stopPropagation();
	    var index = $(this).index();
	    if (swiper.activeIndex === index + 1) {
	      e.preventDefault();
	      swiper.slidePrev();
	    }
	    else if (swiper.activeIndex === index - 1) {
	      e.preventDefault();
	      swiper.slideNext();
		}
	});

	// Rent main slider

	var rentSwiper = new Swiper('.rent-slider', {
		speed: 400,
		spaceBetween: 0,
		effect: 'coverflow',
		grabCursor: false,
		simulateTouch: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 8,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 500,
			modifier: 1,
			slideShadows : false
		},
		breakpoints: {
			414: {
				spaceBetween: 10,
				coverflowEffect: false
			}
		}
	});

	if (window.matchMedia('(min-width: 768px)').matches) {

		$('.rent-slider').on('click', '.swiper-slide', function (e) {
		    e.stopPropagation();
		    var index = $(this).index();
		    if (rentSwiper.activeIndex === index + 1) {
		      e.preventDefault();
		      rentSwiper.slidePrev();
		    }
		    else if (rentSwiper.activeIndex === index - 1) {
		      e.preventDefault();
		      rentSwiper.slideNext();
			}
		});

	}

	// Rent past events slider

	var rentPastSwiper = new Swiper('.rent-past-slider', {
	    speed: 600,
	    slidesPerView: 5,
	    spaceBetween: 16,
	    loop: true,
	    autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: '#rent-past .rent-next',
			prevEl: '#rent-past .rent-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			}
		}
	});

	$('.rent-past-slider').magnificPopup({
		disableOn: function() {
			if( $(window).width() < 768 ) {
			return false;
		}
		return true;
		},
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Изображение не найдено.'
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	// Copyright's year

	$('.current-year').html(new Date().getFullYear());

	// Input mask

	$('#modal-phone, #rent-phone, #school-phone, #race-phone').inputmask({"mask": "+ 7 [9][9][9][9][9][9][9][9][9][9]"});
	$('#rent-date, #race-date').inputmask({"mask": "99.99.9999"});

	// Modal form

	$('input').focusin(function() {
		$(this).siblings('.error').fadeOut('fast');
	});
	$('input').focusout(function() {
		$(this).siblings('.error').fadeIn('fast');
	});

	$("#modal-form").validate({
    	highlight: function(element) {
    		$(element).removeClass('is-valid').addClass('is-invalid');
	    	$(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
	    },
	    unhighlight: function(element) {
	    	$(element).removeClass('is-invalid').addClass('is-valid');
	    	$(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
	    },
	    rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 11
			},
			email: {
				required: true,
				email: true
			},
			rules: {
				required: true
			}
	    },
		messages: {
			name: {
				required: 'Заполните это поле',
				minlength: ''
			},
			phone: {
				required: 'Заполните это поле',
				minlength: ''
			},
			email: {
				required: 'Заполните это поле',
				email: ''
			},
			rules: {
				required: ''
			}
		},
		invalidHandler: function(event, validator) {
			$(':input').removeAttr('placeholder');
			// $('#modal-phone').inputmask('remove');
		},
		submitHandler: function() {
			var th = $("#modal-form");
			$.ajax({
				type: "POST",
				url: "assets/app/mail.php",
				data: th.serialize()
			}).done(function() {
				$('[data-remodal-id=modal]').remodal().close();
				setTimeout(function() {
					th.trigger("reset");
				}, 2000);
			});
			return false;
		}
	});

	// School form 

		$("#school-form").validate({
		errorPlacement: function(error, element) {},
    	highlight: function(element) {
    		$(element).removeClass('is-valid').addClass('is-invalid');
	    	$(element).siblings('label').removeClass('is-valid').addClass('is-invalid');
	    },
	    unhighlight: function(element) {
	    	$(element).removeClass('is-invalid').addClass('is-valid');
	    	$(element).siblings('label').removeClass('is-invalid').addClass('is-valid');
	    },
	    rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 11
			},
			email: {
				required: true,
				email: true
			},
			rules: {
				required: true
			}
	    },
		messages: {
			name: {
				required: '',
				minlength: ''
			},
			phone: {
				required: '',
				minlength: ''
			},
			email: {
				required: '',
				email: ''
			},
			rules: {
				required: ''
			}
		},
		// invalidHandler: function(event, validator) {
		// 	$(':input').removeAttr('placeholder');
		// },
		submitHandler: function() {
			var th = $("#school-form");
			$.ajax({
				type: "POST",
				url: "assets/app/mail.php",
				data: th.serialize()
			}).done(function() {
				$('[data-remodal-id=thanks]').remodal().open();
				setTimeout(function() {
					$('[data-remodal-id=thanks]').remodal().close();
					th.trigger("reset");
				}, 3000);
			});
			return false;
		}
	});

	// Rent form 

		$("#rent-form").validate({
		errorPlacement: function(error, element) {},
    	highlight: function(element) {
    		$(element).removeClass('is-valid').addClass('is-invalid');
	    	$(element).siblings('label').removeClass('is-valid').addClass('is-invalid');
	    },
	    unhighlight: function(element) {
	    	$(element).removeClass('is-invalid').addClass('is-valid');
	    	$(element).siblings('label').removeClass('is-invalid').addClass('is-valid');
	    },
	    rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 11
			},
			email: {
				required: true,
				email: true
			},
			rules: {
				required: true
			},
			date: {
				required: true
			},
			persons: {
				required: true
			}
	    },
		messages: {
			name: {
				required: '',
				minlength: ''
			},
			phone: {
				required: '',
				minlength: ''
			},
			email: {
				required: '',
				email: ''
			},
			date: {
				required: '',
				email: ''
			},
			persons: {
				required: '',
				email: ''
			},
			rules: {
				required: ''
			}
		},
		// invalidHandler: function(event, validator) {
		// 	$(':input').removeAttr('placeholder');
		// },
		submitHandler: function() {
			var th = $("#rent-form");
			$.ajax({
				type: "POST",
				url: "assets/app/mail.php",
				data: th.serialize()
			}).done(function() {
				$('[data-remodal-id=thanks]').remodal().open();
				setTimeout(function() {
					$('[data-remodal-id=thanks]').remodal().close();
					th.trigger("reset");
				}, 3000);
			});
			return false;
		}
	});

	// Race form 

		$("#race-form").validate({
		errorPlacement: function(error, element) {},
    	highlight: function(element) {
    		$(element).removeClass('is-valid').addClass('is-invalid');
	    	$(element).siblings('label').removeClass('is-valid').addClass('is-invalid');
	    },
	    unhighlight: function(element) {
	    	$(element).removeClass('is-invalid').addClass('is-valid');
	    	$(element).siblings('label').removeClass('is-invalid').addClass('is-valid');
	    },
	    rules: {
			name: {
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				minlength: 11
			},
			email: {
				required: true,
				email: true
			},
			rules: {
				required: true
			},
			date: {
				required: true
			}
	    },
		messages: {
			name: {
				required: '',
				minlength: ''
			},
			phone: {
				required: '',
				minlength: ''
			},
			email: {
				required: '',
				email: ''
			},
			date: {
				required: '',
				email: ''
			},
			rules: {
				required: ''
			}
		},
		// invalidHandler: function(event, validator) {
		// 	$(':input').removeAttr('placeholder');
		// },
		submitHandler: function() {
			var th = $("#race-form");
			$.ajax({
				type: "POST",
				url: "assets/app/mail.php",
				data: th.serialize()
			}).done(function() {
				$('[data-remodal-id=thanks]').remodal().open();
				setTimeout(function() {
					$('[data-remodal-id=thanks]').remodal().close();
					th.trigger("reset");
				}, 3000);
			});
			return false;
		}
	});

	// Price's

	// $('#prices .kart-prices .item:not(a.button)').mouseover(function(e) {
	// 	if ( !$(this).hasClass('active') ) {		
	// 		$(this).addClass('active');
	// 		$(this).children('.info').children('.preview-lower').css('display', 'none');
	// 		$(this).children('.info').children('.full-lower').fadeIn('300');
	// 	}
	// });
	// $('#prices .kart-prices .item:not(a.button)').mouseleave(function(e) {
	// 	if ( $(this).hasClass('active') ) {
	// 		$(this).removeClass('active');
	// 		$(this).children('.info').children('.full-lower').css('display', 'none');
	// 		$(this).children('.info').children('.preview-lower').fadeIn('300');	
	// 	}
	// });

	// Certificates items

	if (window.matchMedia('(min-width: 768px)').matches) {

		$('.certificates-common .item').mouseover(function(e) {
			e.preventDefault();
			$(this).removeClass('no-active');
			$(this).parent('.col').siblings().children('.item').addClass('no-active');
		});
		$('.certificates-common .item').mouseleave(function(e) {
			e.preventDefault();
			$('.certificates-common .item').removeClass('no-active');
		});

	}

	// Rules popup

	$('.iframe-popup').magnificPopup({
		disableOn: function() {
			if( $(window).width() < 750 ) {
			return false;
		}
		return true;
		},
		type: 'iframe',
		fixedContentPos: true,
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	// Mobile map popup

	$('#resize').magnificPopup({
		disableOn: function() {
			if( $(window).width() > 414 ) {
			return false;
		}
		return true;
		},
	 	type: 'image',
	 	callbacks: {
		    open: function() {    
				// $.magnificPopup.instance.wrap.addClass('mfp-track');
				$('body').addClass('track-open');
		    },
		    close: function() {
		    	$('body').removeClass('track-open');
		    }
		 },
	    items: {
	      src: 'assets/app/spb-main/img/track-map-spb.png'      
	    },
	    fixedContentPos: true,
	    fixedBgPos: true,
	    overflowY: 'hidden',
	    removalDelay: 300,
	    mainClass: 'mfp-fade',
	    closeOnBgClick: false
	});

	// Rent form's current date

	var MyDate = new Date();
	var MyDateString;

	MyDate.setDate(MyDate.getDate());

	MyDateString = ('0' + MyDate.getDate()).slice(-2) + '.'
	             + ('0' + (MyDate.getMonth()+1)).slice(-2) + '.'
	             + MyDate.getFullYear();

	$('#rent-date').attr('placeholder', MyDateString);

	$('#rent-date').datepicker({
		// inline: true,
		autoClose: true,
		minDate: new Date()
	});

	// $('.datepicker--content').append('<div class="lower"><p class="free">Свободно</p><p class="busy">Забронировано</p></div>');

	// Rent form number arrows

	$(".arr-button").on("click", function() {
		if ( !$("#rent-request form .form-group:nth-of-type(3) input").val() ) {
			$("#rent-request form .form-group:nth-of-type(3) input").val('13');
		}
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.hasClass('up')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
			  var newVal = parseFloat(oldValue) - 1;
			} else {
			  newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	// Rating menu

	if (window.matchMedia('(min-width: 768px)').matches) {

		$('#rating .rating .menu ul.dropdown li input').each(function() {
			if ($(this).is(':checked')) {
				var targetLi = $(this).parent('li').parent('ul').parent().children('p');
				var thisLi = $(this).siblings('label').text();
				targetLi.text(thisLi);
			}	
		});

		if (window.matchMedia('(min-width: 1366px)').matches) {

			$('#rating .rating .menu > ul > li, #rating .top-scores .menu table tr th').mouseenter(function(e) {
				$(this).children('ul').fadeIn(300);
			}).mouseleave(function() {
			    $(this).children('ul').fadeOut(300);
			});

		} else {

			$('#rating .rating .menu > ul > li p, #rating .top-scores .menu table tr th:last-of-type p').on('click', function() {
				$(this).siblings('ul').fadeIn(300);
			});

		}

		$('#rating .rating .menu ul.dropdown li label').on('click', function(e) {
			var targetLi = $(this).parent('li').parent('ul').parent().children('p');
			var thisLi = $(this).text();
			targetLi.text(thisLi);
			$('#rating .rating .menu ul.dropdown').fadeOut(300);
		});

	}

	// Rating list

	$('#rating #time-rating .list table tr:gt(4), #rating #points-rating .list table tr:gt(4)').hide();

	$('#rating #time-rating .up').click(function() {
	    var first = $('#rating #time-rating .list table').children().children('tr:visible:first');
	    first.prevAll(':lt(5)').show();
	    first.prev().nextAll().hide()
	});

	$('#rating #points-rating .up').click(function() {
	    var first = $('#rating #points-rating .list table').children().children('tr:visible:first');
	    first.prevAll(':lt(5)').show();
	    first.prev().nextAll().hide()
	});

	$('#rating #time-rating .down').click(function() {
	    var last = $('#rating #time-rating .list table').children().children('tr:visible:last');
	    last.nextAll(':lt(5)').show();
	    last.next().prevAll().hide();
	});

	$('#rating #points-rating .down').click(function() {
	    var last = $('#rating #points-rating .list table').children().children('tr:visible:last');
	    last.nextAll(':lt(5)').show();
	    last.next().prevAll().hide();
	});

	// Rating search input

	$('input.rating-search').val('');
	
	$('input.rating-search').on('keyup',function() {
		var searchIcon  = $(this).siblings('.rating-magnifier');
			closeIcon   = $(this).siblings('.rating-close');
			ratingBtn   = $(this).siblings('.rating-button');
		if ( $(this).val().length > 0 ) {
			searchIcon.css('display', 'none');
			closeIcon.fadeIn(300);
			ratingBtn.fadeIn(300);
		} else {
			closeIcon.css('display', 'none');
			ratingBtn.fadeOut(300);
			searchIcon.fadeIn(300);
		}
	});

	$('#rating .rating-close').on('click', function() {
		var searchIcon  = $(this).siblings('.rating-magnifier');
			ratingBtn   = $(this).siblings('.rating-button');
		$(this).siblings('input.rating-search').val('');
		$(this).css('display', 'none');
		ratingBtn.fadeOut(300);
		searchIcon.fadeIn(300);
	});

	// Race offer link

	if ( window.location.href.indexOf("competition") > -1 && $('#race-details a.regulations').attr('href') == '' ) {
		$('#race-details a.regulations').css('display', 'none');
	}

	// No race

	if ( window.location.href.indexOf("competition") > -1 ) {
		$('#competition .upcoming:not(:has(div.item))').hide();
		$('#competition .past:not(:has(div.item))').hide();
	}


});

// Google map

function initMap() {

	if (window.matchMedia('(min-width: 768px)').matches) {

		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.706200, lng: 37.637051},
			disableDefaultUI: true,
			zoom: 16,
			styles: [ { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [ { "color": "#05040C" } ] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.sports_complex", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.attraction", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] },{ "featureType": "poi.school", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] },{ "featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.man_made", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#0b1328" }, { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "color": "#152b43" }, { "visibility": "on" }, { "weight": 1.5 } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#193042" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#203068" } ] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#05040c" } ] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#173246" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#03438a" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#0f5093" } ] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [ { "weight": 1.5 } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#05040c" } ] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#173246" } ] }, { "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#34373e" } ] }, { "featureType": "water", "elementType": "labels.text", "stylers": [ { "color": "#34373e" } ] } ]
		});

	} else {

		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.706400, lng: 37.640051},
			disableDefaultUI: true,
			zoom: 16,
			styles: [ { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [ { "color": "#05040C" } ] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.sports_complex", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] }, { "featureType": "poi.attraction", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] },{ "featureType": "poi.school", "elementType": "geometry.fill", "stylers": [ { "color": "#203168" } ] },{ "featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.man_made", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#0b1328" }, { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "color": "#152b43" }, { "visibility": "on" }, { "weight": 1.5 } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#193042" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#203068" } ] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#05040c" } ] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#173246" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#03438a" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#0f5093" } ] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [ { "weight": 1.5 } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#05040c" } ] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#173246" } ] }, { "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [ { "color": "#d5bda3" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.stroke", "stylers": [ { "color": "#042648" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#34373e" } ] }, { "featureType": "water", "elementType": "labels.text", "stylers": [ { "color": "#34373e" } ] } ]
		});

	}

	var bskDot = {lat: 55.704701, lng: 37.640776};
	var marker_image = new google.maps.MarkerImage(
		'assets/app/img/icons/marker.png',
		new google.maps.Size(41,54),
		new google.maps.Point(0,0),
		new google.maps.Point(20,54)
	);
	var marker = new google.maps.Marker({
		// clickable: true,
		map: map,
		position: bskDot,
		icon: marker_image
	});

}