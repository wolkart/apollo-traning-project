$(document).ready(function(){

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
    // Создаем переменые для кнопки и для меню
	var pull = $("#navigation-toggle");
	var nav = $(".navigation ul");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();

		// Добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');

	});


    // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			nav.slideToggle();
		}
	};




	// Вызов слайдера Owl-carousel
	$("#top-slider").owlCarousel({
		singleItem : true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed : 600
	});



	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

});

