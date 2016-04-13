var timerId;
var diff = 0;
var previousTime = 0;
var beginStart = new Date().getTime();

function getTime() {

  var gettime = new Date().getTime();
  diff = gettime - beginStart + previousTime;

  var mili = Math.abs(diff % 1000);
  difsecTmp = diff / 1000;
  difsec = Math.floor(difsecTmp);
  difminTmp = difsec / 60;
  difmin = Math.floor(difminTmp);
  sec = difsec - (difmin * 60);
  difhour = difmin / 60;
  hour = Math.floor(difhour);
  realhour = Math.abs(hour);
  min = difmin - (hour * 60);
  realmin = Math.abs(min);

  if (min <= 9) {
    min = "0" + min
  };
  if (sec <= 9) {
    sec = "0" + sec
  };
  if (mili <= 99) {
    mili = "0" + mili
  };
  var time = min + ":" + sec + ":" + mili;
  return time;
};

function update() {
  var h2 = document.querySelector('.numbers');
  h2.innerHTML = getTime();
};

function start() {
  var btn = document.querySelector('.pause_button');
  var startbtn = document.querySelector('.startdiv');
  btn.classList.remove('pause_button');
  startbtn.classList.add('pause_button');
  if (!timerId) {
    beginStart = new Date().getTime();
    timerId = setInterval(update, 100);
  }
};

function clear() {
  var btn = document.querySelector('.startdiv');
  var pausediv = document.querySelector('.pausediv');
  var h2 = document.querySelector('.numbers');
  clearInterval(timerId);
  timerId = 0;
  previousTime=0;
  btn.classList.remove('pause_button');
  pausediv.classList.add('pause_button');
  h2.innerHTML = "00:00:00";
};

function stop() {
  var btn = document.querySelector('.startdiv');
  var pausediv = document.querySelector('.pausediv');
  clearInterval(timerId);
  timerId = 0;
  previousTime=diff;
  btn.classList.remove('pause_button');
  pausediv.classList.add('pause_button');
};

var startRun = document.querySelector('.startbtn');
startRun.addEventListener('click', start);

var stopRun = document.querySelector('.stopbtn');
stopRun.addEventListener('click', stop);

var resetRun = document.querySelector('.resetbtn');
resetRun.addEventListener('click', clear);