$(document).ready(function () {

	$('.container__header a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var offset = 100;
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset//можно вычесть высоту меню
		}, 500);
		return false;
	});
	$('.first-screen__content_buttons a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var offset1 = 100;
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset1//можно вычесть высоту меню
		}, 500);
		return false;
	});

});