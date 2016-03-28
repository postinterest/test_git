var CounterBuilder = {
	hNum: '',
	start: 0,
	diff: '',
	timerId: null,
	makeDivNum: function () {
		var h1;
		this.hNum = document.querySelector('.col-md-8');
		h1 = document.createElement('h1');
		h1.classList.add('numbers');
		this.hNum.appendChild(h1);
	},

	getTime: function () {
		var stop = new Date().getTime();
		var diff = stop - this.start;
		this.diff = diff

		
	
	},

	presentNul: function() {
		var milisec = this.diff % 1000,
		numSecTmp = this.diff / 1000,
		numSec = Math.floor(numSecTmp),
		numMinTmp = numSec / 60,
		numMin = Math.floor(numMinTmp),
		sec = numSec - (numMin * 60),
		numHour = numMin / 60,
		hour = Math.floor(numHour),
		min = numMin - (hour * 60); 
		
		if (sec < 10) {sec = '0' + sec};
		if (min < 10) {min = '0' + min};
		if (hour < 10) {hour = '0' + hour};
		if (milisec < 0) {milisec = '00' + milisec};
		if (milisec < 100 && milisec > 10) {milisec = '0' + milisec};
		time = hour + ':' + min + ':' + sec;
		var h1 = document.querySelector('.numbers');
		h1.innerHTML = time + milisec;
		return 	this.diff
	},

	startFunc: function(){
		var btn = document.querySelector('.pause_button');
		btn.classList.remove('.pause_button');
		var startbtn = document.querySelector('.startbtn');
		startbtn.classList.add('.pause_button');
		if (this.timerId) { CounterBuilder.stopFunc();};
		if (this.diff == 0) {
			this.start = new Date().getTime();
		} else { this.start = new Date().getTime() - this.diff}
		this.timerId = setInterval(CounterBuilder.getTime,100);

	},

	stopFunc: function(){
		clearInterval(this.timerId);
		this.timerId = null;
	},

	clearFunc: function(){
		clearInterval(this.timerId);
		this.timerId = null;
		this.start = 0;
		this.diff = 0;
		var h1 = document.querySelector('.numbers');
		h1.innerHTML = ('00:00:00');


	},

};

CounterBuilder.makeDivNum();
CounterBuilder.getTime();
CounterBuilder.presentNul();

var startRun = document.querySelector('.startbtn');
startRun.addEventListener('click', CounterBuilder.startFunc());
var stopRun = document.querySelector('.stopbtn');
startRun.addEventListener('click', CounterBuilder.stopFunc());
var resetRun = document.querySelector('.resetbtn');
startRun.addEventListener('click', CounterBuilder.clearFunc());


