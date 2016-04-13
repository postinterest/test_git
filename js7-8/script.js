$(function () {

var	$tab1 = $('.link_tab_1');
$tab1.on('click', function (e) {
	e.preventDefault();
	var $textdisplay1 = $('div.text1');
	var $textdisplay2 = $('div.text2');
	var $textdisplay3 = $('div.text3');
	$textdisplay1.removeClass('textclass');
	$textdisplay2.addClass('textclass');
	$textdisplay3.addClass('textclass');
});

var	$tab2 = $('.link_tab_2');
$tab2.on('click', function (e) {
	e.preventDefault();
	var $textdisplay1 = $('div.text1');
	var $textdisplay2 = $('div.text2');
	var $textdisplay3 = $('div.text3');
	$textdisplay1.addClass('textclass');
	$textdisplay2.removeClass('textclass');
	$textdisplay3.addClass('textclass');
});

var	$tab3 = $('.link_tab_3');
$tab3.on('click', function (e) {
	e.preventDefault();
	var $textdisplay1 = $('div.text1');
	var $textdisplay2 = $('div.text2');
	var $textdisplay3 = $('div.text3');
	$textdisplay1.addClass('textclass');
	$textdisplay2.addClass('textclass');
	$textdisplay3.removeClass('textclass');
});

});