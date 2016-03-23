var testBuilder = {
  title: "",
  count: "",
  makeDiv: function(){
    var div = document.createElement('div');
    div.classList.add('wrapper');
    document.body.appendChild(div);
    return div;
    //создаем главный див wrapper
  },

  makeTitle: function(){
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Тест по программированию';
    console.log('h1 = ', h1);
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(h1);
    console.log('body = ', document.bodyElement);
    //создаем заголовок, вставляем в wrapper
  },
  


 makeMenu: function(){

    for (i=1; i<4; i++) {
      var ul = document.createElement('ul');
      ul.classList.add('wrapper__ul');
      console.log('ul = ', ul);
      var wrapper = document.querySelector('.wrapper');
      wrapper.appendChild(ul);
      ul.innerHTML = +i+'<span>. Введите вопрос № '+i+ '</span>';
      console.log('asd');
    }
},

 makeLi: function(){
      for (var i = 0; i < 3; i++) {
        var ul = document.querySelectorAll('.wrapper__ul');
        for (k=0; k<ul.length; k++) {
        var li = document.createElement('li');
        li.classList.add('wrapper__li');
        ul[k].appendChild(li);
         }
  } 
 },

 makeLabel: function(){
    for (var i = 0; i < 9; i++) {
        var li = document.querySelectorAll('.wrapper__li');
        
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        var label = document.createElement('label');
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode("Вариант ответа № "+(i+1)+""));
        li[i].appendChild(label);
    }
 },

makeBottomButton: function() {
  var wrapper = document.querySelector('.wrapper');
  var button = document.createElement('button');
  button.type = "button";
  button.classList.add('btn');
  button.classList.add('btn-success');
  var text = 'Проверить мои результаты';
  button.appendChild(document.createTextNode(text));
  wrapper.appendChild(button);  
},

makeMagic: function() {
  var btn = document.querySelector('.magic');
  btn.classList.add('btn-magic');
  
  
  
},  

makeMainFunc: function() {
testBuilder.makeDiv();
testBuilder.makeTitle();
testBuilder.makeMenu();
testBuilder.makeLi();
testBuilder.makeLabel();
testBuilder.makeBottomButton();
testBuilder.makeMagic();
},  
  

};






  