//объявляем переменные в которые будем записывать числа, которые ввёл пользователь
var firstNumber, secondNumber;

//объявляем функцию для ввода данных
function getUserInput(){
  firstNumber = prompt('введите число, которое необходимо возвести в степень', '');
	secondNumber = prompt('введите степень, в которую необходимо возвести число', '');
}

//объявляем функцию для возведения в степень
function pow (a, b) {
  var result = a;
  for ( i = 1; i < b; i++) {
       result *= a;    //это сокращенная форма записи. если писать полностью то тут написано result = result * a;
    }
    return result;
 }

//функция для начала всей нашей программы. её можно зациклить 
function start(){
  
  getUserInput(); //вызов функции для ввода данных
  
  if (secondNumber <= 1){
    alert('Степень ' + secondNumber + 'не поддерживается, введите целую степень, большую 1');
    start();  //перезапуск если была введена неправильная степень
  }
  else {  
    alert( pow(firstNumber, secondNumber) );
  }
}

//вызов


//начало программы по анализу имени
function nameStart(){
var arr = [];

for (var i = 0; i < 5; i++) {
 arr.push(prompt('Задайте имя'));
 }

console.log(arr);

var yourName = prompt('Введите ваше имя');
var mistake = 'Ошибка входа';

for (var i = 0; i < arr.length; i++) {

	if (yourName.toLowerCase() === arr[i].toLowerCase()) {
		
	mistake = yourName + ', это заявка на успех!';
	}
 
}

alert(mistake);
}