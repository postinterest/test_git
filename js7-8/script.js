

// function printArguments() {
// 	// body...
// 	var args = [].slice.apply(arguments);

// 	args.push('test me');

// 	console.log(args);
// }

// printArguments([2,3,4]);





// //function expression
// var double = function (a) {
// 	console.log(a*2);
// }

// double(4);

// var userFunction;

// if (+prompt('Введите число')) {
// 	userFunction = function () {
// 		alert(1);
// 	}
// } 
// 	else {
// 		userFunction = function () {
// 		alert(0);
// 	}
// 	};

// userFunction();

// tripple(5);

// //function declaration
// function tripple (a) {
// 	console.log(a*3);
// }

// tripple(4);


// //new function
// var double = new Function('a','console.log(a*5)');
// double(7);


// //замыкания и модульность

// function calculateLength(r) {
// 	var Pi = 3.14;
// 	var length = 2 * Pi * r;
// 	console.log(length);
	
// }

// calculateLength(5);

// //Immidiately invoke function expression

// (function (num) {
// 	// body...
// 	var abc = 5 * num;
// 	console.log(abc + 'test');
// })(34);

// пример:

// var shop = (function () {
// 	// body...
// 	var appleAmount = 100;

// 	function sellApples(amount) {
// 		// body...
// 	}

// 	return
// 	console.log(abc + 'test');
// })();




//jQuery
//элемент, который позволяет нам отследить полную загрузку ДОМа, всей HTML - страницы и только потом начиать работу с ней


// $(function () {

// var $element = $('.wrapper');
// console.log($element);
// var $paragraph = $('a');
// $paragraph.addClass('red');
// $paragraph
// 	.css({
// 	color: 'red',
// 	background: 'blue',})
// 	.attr('href','http://google.com')
// 	.attr('target','_blank');

// $element.removeClass('selection');
// console.log($element);
// console.log($paragraph);

// $('body').append('<div>test</div>');

// $paragraph.on('hover', function () {
// 	alert('Подтвердите переход на страницу поиска');
// });



// })

$(function () {

var	$tabs = $('.tabs a');
console.log($tabs);
$tabs.on('click', function (e) {
	var $submenu = $(this).siblings('.textclass');
	e.preventDefault();
	console.log('$submenu', $submenu);
	$submenu.slideToggle();
});


});