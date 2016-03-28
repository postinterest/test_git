//function someFunction() {
//	console.log('it works');
//}

//var timerId = setTimeout (someFunction, 5000); //через какое время будет запускаться функция

var timerId = setInterval (someFunction, 500); //через какой промежуток времени будет запускаться функция

//clearTimeout (timerId) //очищает наш таймер
var counter = 0;
function someFunction() {
	console.log('it works');
	counter++;
	if (counter === 10) {
			clearInterval(timerId);

	}
}
