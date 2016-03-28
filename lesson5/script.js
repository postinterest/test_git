var elem = document.querySelector('a');


//handler, callback - срабатывание функции при клике на ссылку
// elem.onclick = function () {
// 	alert('alert');
// }

//наиболее правильный вид добавления события:
//function handler() { console.log('elem', elem);

//event-встроенная память на события. тут: что происходитпри нажатии на клавишу. 
//if (event.keyCode === 13) {
//	alert("hello space");
//} else {
//	alert('hello other space');
//}
//}
//для ие elem.attachEvent('onclick', handler);

//elem.addEventListener('click', handler); - приклике на "а" вызывается функция handler -> console.log

// удаление события
// elem.removeEventListener('click', handler);

//function addEvent(el, event, callback) {
//	if (window.attachEvent) { //IE8-
//		el.attachEvent('on' + event, callback)
//
//	} else {
//		el.addEventListener(event, callback);
//			} 
//}

//addEvent(elem, 'click', handler)

//window.addEventListener('keydown', handler) //при клике в любом месте окна вызывается функция handler-> срабатывает console.log


function handler(event) { console.log('event', event.target);
event.preventDefault(); }//останавливает или предотвращает действие по умолчанию для элемента, на котором произошло событие
//event-встроенная память на события. тут: что происходитпри нажатии на клавишу. 
//if (event.keyCode === 13) {
//	alert("hello space");
//} else {
//	alert('hello other space');
//}
//}

//elem.addEventListener('click', handler); //- приклике на "а" вызывается функция handler -> console.log


//всплытие событий 
var listItem = document.querySelector('li');
function handlerElem(event) { 
console.log('event', event.target);
event.preventDefault(); }

function handlerListItem(event) { 
console.log('eventli', event.target);
event.preventDefault(); }

elem.addEventListener('click', handlerElem, true);//события будут происходить не снизу вверх, а сверху вниз по списку элементов в html
listItem.addEventListener('click', handlerListItem, true);//события будут происходить не снизу вверх, а сверху вниз по списку элементов в html