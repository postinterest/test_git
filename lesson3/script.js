//lesson 3

/*var num = 123;

var obj = {
	test: 123
};

function updateObj(a) {
	a.test = 5;
}

function updateNum(a) {
	a = 5;
}

updateObj(obj);
updateNum(num);

console.log(num);
console.log(obj);*/



//this

/*var dog = {
	name: 'jack',
	age: 3,
	bones: 50,
	woof: function () {
		alert ('wooof');
	},
	eat: function () {
		dog.bones--;
	}
}

dog.eat();
dog.eat();
dog.eat();

console.log(dog.bones);

// with using this

var dog = {
	name: 'jack',
	age: 3,
	bones: 50,
	woof: function () {
		alert ('wooof');
	},
	eat: function () {
		this.bones--;
	}
}

dog.eat();
dog.eat();
dog.eat();

console.log(dog.bones); */

//lesson 4
//редактирование DOM элементов
/*var element = document.getElementById('box');

console.log(element);

var element1 = document.getElementsByTagName('li');
console.log(element1);*/



/*var element = document.querySelectorAll('.menu-item a');

var link = element[2];


link.innerHTML = '<strong>new</strong> text';

link.removeAttribute('href');

console.log(link.className);

link.className = link.className + ' js-class';

console.log(link.classList);

link.classList.add('js-second-class');
link.style.backgroundColor = 'green'; */

//cоздание DOM элементов
var element = document.createElement('div'); //-создали новый элемент
element.classList.add('box');//присвоили ему класс
element.innerHTML = 'dynamically created element'; //создаём текст в элементе

var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(element);
//wrapper.insertBefore(element, wrapper.children[0]); вставляем перед нулевым элементом

var list = wrapper.querySelector('ul');
wrapper.removeChild(list);

