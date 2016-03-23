var elem = document.querySelector('a');
console.log(elem);

//handler, callback - срабатывание функции при клике на ссылку
// elem.onclick = function () {
// 	alert('alert');
// }

//наиболее правильный вид добавления события:
function handler () { alert('test');}
//для ие elem.attachEvent('onclick', handler);
elem.addEventListener('click', handler);

// удаление события
// elem.removeEventListener('click', handler);

