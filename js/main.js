$(document).ready(function() {

//scroll//
	(function($) {
		$(window).on("load", function() {
			$(".scroll").mCustomScrollbar();
		});
	})(jQuery);
	$(".scroll").mCustomScrollbar({
		theme: "dark-thin",
		setHeight: false,
		scrollInertia: 500,
		scrollEasing: "linear",
		moveDragger: true
	});


	$("#element").introLoader({

        animation: {
            name: 'cssLoader',
            options: {
                exitFx:'slideUp',
                ease: "easeOutSine",
                style: 'ocean',
                delayBefore: 200, //delay time in milliseconds
                exitTime: 300
            }
        }

    });







	//burger//
	$('#burger-container ').click(function(e) {
		// Prevent link from jumping to the top of the page
		$(this).toggleClass('open');
		e.preventDefault();

		$('.menu-mobile').slideToggle('open');

	});



	//lang dropdown//
	$('.main-lang').click(function(e) {
		$('.menu-lang').slideToggle('open');
		return false;
	});
	$('body').click(function(e) {
		$('.menu-lang').slideUp('open');

	});
	//end lang dropdown//


	//country dropdown//
	$('p.select-title-country').click(function(e) {
		$(this).css({
			'borderBottomLeftRadius': "0px",
			'borderBottomRightRadius': "0px"
		});
		$(this).siblings('.scroll').slideToggle('open');
		return false;
	});
	$('body').on('click', '.country .scroll li', function(e) {
		var txt = $(this).text();
		$(this).closest('.scroll').parents('div').find('p.select-title-country span').text(txt);
		$(this).closest('.scroll').slideToggle('open');

	});

	
	//end country, city dropdown//



	//city dropdown//
	$('p.select-title-city').click(function(e) {
		$(this).css({
			'borderBottomLeftRadius': "0px",
			'borderBottomRightRadius': "0px"
		});
		$(this).siblings('.scroll').slideToggle('open');
		return false;
	});
	$('body').on('click', '.city .scroll li', function(e) {
		var txt = $(this).text();
		$(this).closest('.scroll').parents('div').find('p.select-title-city span').text(txt);
		$(this).closest('.scroll').slideToggle('open');
	});
	//city dropdown//


	//people dropdown//
	$('p.select-title').click(function(e) {
		$(this).css({
			'borderBottomLeftRadius': "0px",
			'borderBottomRightRadius': "0px"
		});
		$(this).siblings('.scroll').slideToggle('open');
		return false;
	});
	$('body').on('click', '.people .scroll li', function(e) {
		var txt = $(this).text();
		$(this).closest('.scroll').parents('div').find('p.select-title span').text(txt);
		$(this).closest('.scroll').slideToggle('open');

	});
	//end people dropdown//



	//time dropdown//
	$('p.select-title-time').click(function(e) {
		$(this).css({
			'borderBottomLeftRadius': "0px",
			'borderBottomRightRadius': "0px"
		});
		$(this).siblings('.scroll').slideToggle('open');
		return false;
	});
	$('body').on('click', '.time .scroll li', function(e) {
		var txt = $(this).text();
		$(this).closest('.scroll').parents('div').find('p.select-title-time span').text(txt);
		$(this).closest('.scroll').slideToggle('open');

	});
	//end time dropdown//



	$(document).click(function(e) {
		var expand = $(".scroll");

		if (!expand.is(e.target) // если клик был не по нашему блоку
			&& expand.has(e.target).length === 0) { // и не по его дочерним элементам
			expand.slideUp(); // скрываем его

		$('p.select-title').css({
			'borderBottomLeftRadius': "4px",
			'borderBottomRightRadius': "4px"
		});
		$('p.select-title-country').css({
			'borderBottomLeftRadius': "4px",
			'borderBottomRightRadius': "4px"
		});
		$('p.select-title-city').css({
			'borderBottomLeftRadius': "4px",
			'borderBottomRightRadius': "4px"
		});
		$('p.select-title-time').css({
			'borderBottomLeftRadius': "4px",
			'borderBottomRightRadius': "4px"
		});
	}

});



	//datepicker, calendar//

	$(".mydate").datepicker().datepicker("setDate", new Date());
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
		],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
		],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$('input.datepicker').datepicker({
		showOn: 'both',
		buttonImageOnly: true,
		buttonImage: '/images/026.png'
	});


	//end datepicker, calendar//



	//filtr//


	$('.filtr h4').click(function(event) {
		event.preventDefault();
		var $this = $(this);
		$this.toggleClass('see');
		if ($this.hasClass('see')) {
			$this.text('Развернуть фильтр').css({
				'fontSize': '11px',
				'color': '#485d7b',
				'fontFamily': 'Roboto Medium'
			});
		} else {
			$this.text('Свернуть фильтр').css({
				'fontSize': '11px',
				'color': '#485d7b',
				'fontFamily': 'Roboto Medium'
			});
		}
		$('.expand-pick-kitchen').slideToggle(300);


	});


	// $('.show-all').click(function(event) {
	// 	event.preventDefault();
	// 	var $this = $(this);
	// 	$this = $(this);
	// 	$this.toggleClass('show-rest');
	// 	if ($this.hasClass('show-rest')) {
	// 		$this.html('<i class="fa fa-chevron-up"></i>' + ' ' + 'СКРЫТЬ');
	// 	} else {
	// 		$this.html('<i class="fa fa-chevron-down"></i>' + ' ' + 'ПОКАЗАТЬ ВСЕ');
	// 	}

	// 	$('#hidden_order').slideToggle(300);
	// });






	//expand-pick-kitchen Pop Up //

	// $('.background-pop-up').hide();
	// $('.popup').hide();


	$('.pop-up').click(function() {
		$('.background-pop-up').fadeIn();
		$('.popup').fadeIn();
	});
	$('.background-pop-up').click(function() {
		$(".background-pop-up").fadeOut();
		$('.popup').fadeOut(200);
	});
	$('.expand-pick-kitchen .close-modal').click(function() {
		$(".background-pop-up").fadeOut();
		$('.popup').fadeOut(200);
	});
	$(document).keypress(function(e) {
		if (e.keyCode == 27) {
			$(".background-pop-up").fadeOut();
			$(".popup").fadeOut(200);
		}
	});



	//input range

	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 300,
		values: [20, 80],
		slide: function(event, ui) {
			$("#amount").val("\u20ac " + ui.values[0] + " - \u20ac " + ui.values[1]);
		}
	});
	$("#amount").val("\u20ac " + $("#slider-range").slider("values", 0) +
		" - \u20ac " + $("#slider-range").slider("values", 1));


	$('#slider-range span').css({
		'borderRadius': '50%',
		'position': 'absolute',
		'top': '-7px',
		'width': '25px',
		'height': '25px',
		'background': '#4E6482'
	})

	//end input range




	$('.rest-word button.search').click(function() {
		$(this).toggleClass('open');
		$('.search-popup').toggleClass('open');

		if($('.search-popup').hasClass('open')) {
			$('.choose-popup-cont').removeClass('open');
		}
	});
	$('.search-popup .close').click(function(event) {
		$('.search-popup').removeClass('open');
		$('.rest-word button.search').removeClass('open');
	});




	var range = $('.input-range'),
	value = $('.range-value');

	value.html(range.attr('value') + ' €');

	range.on('input', function() {
		value.html(this.value + ' €');
	});


	$('.parametrs').click(function(event) {
		$('.choose-popup-cont').toggleClass('open');
		$(this).toggleClass('open');

		if($('.choose-popup-cont').hasClass('open')) {
			$('.search-popup').removeClass('open');
		} 
	});
	$('.choose-popup-cont .close').click(function(event) {
		$('.choose-popup-cont').toggleClass('open');
		$('.parametrs').toggleClass('open');
	});

	$('.show-content').click(function(event) {
		$('.hidden-kitchen-js').toggleClass('open');
		
		if($('.hidden-kitchen-js').hasClass('open')) {
			$(this).text('Скрыть');
		} else {
			$(this).text('Показать все');
		}
	});
	$('.show-content-2').click(function(event) {
		$('.hidden-kitchen-js-2').toggleClass('open');
		
		if($('.hidden-kitchen-js-2').hasClass('open')) {
			$(this).text('Скрыть');
		} else {
			$(this).text('Показать все');
		}
	});
	$('.show-content-3').click(function(event) {
		$('.hidden-kitchen-js-3').toggleClass('open');
		
		if($('.hidden-kitchen-js-3').hasClass('open')) {
			$(this).text('Скрыть');
		} else {
			$(this).text('Показать все');
		}
	});

	$('footer .portal .menu-button').click(function(event) {
		$('footer .top-menu .portal .menu-list').toggleClass('open');
		$(this).toggleClass('open');
	});




	$(".slider-main").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: $(".pp2"),
		nextArrow: $(".nn2"),
		speed: 300,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},

		]
	});
	$(".testimonials-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: $(".pp3"),
		nextArrow: $(".nn3"),
		speed: 200,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},

		]
	});


	$('.for-restaurant').click(function(event) {

		$(this).css({
			background: '#414D60'
		});
		$('.for-user').css({
			background: '#768fb4'
		});
		$('.propositions').text('Оферты');
		$('.item.promo > label').text('Регистрационный №:');
		$('.item.promo > label + img').hide();
	});
	$('.for-user').click(function(event) {

		$(this).css({
			background: '#414D60'
		});
		$('.for-restaurant').css({
			background: '#768fb4'
		});
		$('.propositions').text('Пользовательского соглашения');
		$('.item.promo > label').text('Промо-код:');
		$('.item.promo > label + img').show();

	});


	



});