/*var arr = ['alex', 'saho', 'denis', 'dima', 'miho'];

console.log ('arr =', arr[2]);

for (var i = arr.length-1; i >= 0; i--) {
	
	console.log ('i = ', i);
	console.log ('arr[i] = ', arr[i]);	
}

alert ('хорош уже');
console.log (arr.length);

arr.push ('semen');
console.log ('massiv ', arr);

if (arr.length > 4 )  {
	
	console.log ('arr[i last] = ', arr[5]);
	var itemplus = arr.push();
	console.log ('itemplus ', itemplus); 	
}

arr.unshift ('нежданчик');
console.log (arr);

arr.pop ();
var lastdelete = arr.pop();

console.log (lastdelete);

var objekt = {
	first: 'floor',
	second: 'room',
	third: 'kitchen',
	'its your love': 7
}

for (var key in objekt) {
	console.log (key);
	console.log (objekt[key])
}

var keylist = Object.keys(objekt);
console.log (keylist);*/

/*var str = '12px';
var num = parseInt (str);
var newnum = num + '';
console.log (typeof newnum);

var newnomber = 12.3;
var roundResult = Math.round(newnomber);
console.log (roundResult);*/

/*var arr = [1,3,5,2];
var newArr = arr.sort(); //сортировка в массиве

console.log (newArr);

arr.push ('test sstring'); //добавление в конец массива один элемент

console.log (newArr);

arr.pop (''); // удаление из массива последний элемент

console.log (newArr);*/



function pow(a) {
	var firstNum = prompt('введите число, которое необходимо возвести в степень', '');
	console.log('число ', firstNum);
	var secondNum = prompt('введите степень, в которую необходимо возвести число', '');
	console.log('в степени ', secondNum);




			if (firstNum <= 99) {
				if (secondNum <= 99) {
					
					for (i = 0; i < secondNum; i++) {
						var result = 1;
						result *= firstNum
						var finalResult = result * firstNum;
					}
					
				alert (finalResult);

				console.log ('результат = ', finalResult);}
				else{
			    alert ('введите число до 99')};
			} 
			else {
			alert ('введите число до 99')}; 


	
}


//var calculateResult = calculate(2, 3, 4);
