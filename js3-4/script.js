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
    var ul = document.createElement('ul');
    ul.classList.add('wrapper__ul');
    console.log('ul = ', ul);

    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(ul);



    for (i=0; i < 3; i++) {
     var li = document.createElement('li');
     li.classList.add('wrapper__li');
     ul.appendChild(li);
     
     var wrapperLi = document.querySelectorAll('.wrapper__li');
     
     
     var ul_li = document.createElement('ul');
     ul_li.classList.add('wrapper__li__ul');
     wrapperLi.appendChild(ul_li); 
     } 
  },

makeInput: function(){
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    console.log('checkbox = ', checkbox); //увиделб что элемент создался
    var label = document.createElement('label');
    label.appendChild(checkbox);
    
    for (i=0; i<3; i) {
      var liInside = getElementsByTagName('li');
      liInside.appendChild(label);
     }
     console.log(liInside);
    },
    //



  
  
};



testBuilder.makeDiv();
testBuilder.makeTitle();
testBuilder.makeMenu();
testBuilder.makeInput();
console.log(document.body.childNodes);
  