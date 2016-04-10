
var timerId;
var beginStart = new Date().getTime();
console.log(beginStart);

function getTime() {
	
	var gettime = new Date().getTime();
	console.log(gettime);
	var diff = gettime - beginStart;
	console.log(diff);


	var mili = Math.abs(diff % 1000);
	difsecTmp = diff / 1000;
	difsec = Math.floor(difsecTmp);
	difminTmp = difsec / 60;
	difmin = Math.floor(difminTmp);
	sec = difsec - (difmin*60);
	difhour = difmin/60;
	hour = Math.floor(difhour);
	realhour = Math.abs(hour);
	min = difmin - (hour*60);
	realmin = Math.abs(min);

	if (min <= 9) {min = "0" + min };
	if (sec <= 9) {sec = "0" + sec};
	if (mili <= 99) {mili = "0" + mili};

	var time =  min + ":" + sec + ":" + mili;


	return time;
	};

function inner() {
		var h1;
		var hNum = document.querySelector('.col-md-8');
		h1 = document.createElement('h1');
		h1.classList.add('numbers');
		hNum.appendChild(h1);
		h1.innerHTML = "00:00:00";
	};	

inner();

function init() {
		timerId = setInterval(update, 100);
	};

function update(){
		var h2 = document.querySelector('.numbers');
		h2.innerHTML = getTime();
	};



 function start() {
		var btn = document.querySelector('.pause_button');
		btn.classList.remove('pause_button');
		var startbtn = document.querySelector('.startdiv');
		startbtn.classList.add('pause_button');
		init();
	};

 function clear(){
 		clearInterval(timerId);
		timerId = null;
		var btn = document.querySelector('.startdiv');
		btn.classList.remove('pause_button');
		var pausediv = document.querySelector('.pausediv');
		console.log(pausediv);
		pausediv.classList.add('pause_button');
		var h2 = document.querySelector('.numbers');
		h2.innerHTML = "00:00:00";
	};

function stop (){
		clearInterval(timerId);
		timerId = null;
		var btn = document.querySelector('.startdiv');
		btn.classList.remove('pause_button');
		var pausediv = document.querySelector('.pausediv');
		console.log(pausediv);
		pausediv.classList.add('pause_button');
	};


var startRun = document.querySelector('.startbtn');
startRun.addEventListener('click', start);

var stopRun = document.querySelector('.stopbtn');
stopRun.addEventListener('click', stop);

var resetRun = document.querySelector('.resetbtn');
resetRun.addEventListener('click', clear);
	




