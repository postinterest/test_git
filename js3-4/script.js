var testBuilder = {
  title: "",
  count: "", 
  wrapper: '', 

  setCount: function() {
    this.count = prompt("Введите кол-во вопросов", 3);
  },

  getCount: function() {
    return this.count;
  },

  setTitle: function() {
    this.title = prompt("Введи название теста", "Тест по программированию");
  },
  getTitle: function() {
    return this.title;
  },
  
  makeDiv: function() {
   
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    document.body.appendChild(this.wrapper);
  },

  makeTitle: function() {
    var h1 = document.createElement('h1');
    h1.innerHTML = this.getTitle();
    this.wrapper.appendChild(h1);
  },

  makeMenu: function() {
    var ul;
    var count = this.count;
    for (var i = 1; i <= count; i++) {
      ul = document.createElement('ul');
      ul.classList.add('wrapper__ul');
      ul.innerHTML = +i + '<span>. Введите вопрос № ' + i + '</span>';

      this.wrapper.appendChild(ul);
    }
  },

  makeLi: function() {
    var ul, li;

    for (var i = 0; i < 3; i++) {
      ul = document.querySelectorAll('.wrapper__ul');
      for (var k = 0; k < ul.length; k++) {
        li = document.createElement('li');
        li.classList.add('wrapper__li');
        ul[k].appendChild(li);
      }
    }
  },

  makeLabel: function() {
    var ul, collectionOfLi;
    
    ul = document.querySelectorAll('.wrapper__ul');
    
    for(var i = 0;i<ul.length;i++){  

      collectionOfLi = ul[i].querySelectorAll('.wrapper__li');
      for(var k = 1; k<=collectionOfLi.length; k++){
        collectionOfLi[k-1].innerHTML = '<label><input type="checkbox"> Вариант ответа '+ k +'</input></label>';
      }
    }
  },

  makeBottomButton: function() {
    var button, text;
    button = document.createElement('button');
    button.type = "button";
    button.classList.add('btn', 'btn-success');
    text = 'Проверить мои результаты';
    button.appendChild(document.createTextNode(text));
    this.wrapper.appendChild(button);
  },

  makeMagic: function() {
    var btn = document.querySelector('.magic');
    btn.classList.add('btn-magic');
  },

  makeMainFunc: function() {
    testBuilder.setTitle();
    testBuilder.setCount();
    testBuilder.makeDiv();
    testBuilder.makeTitle();
    testBuilder.makeMenu();
    testBuilder.makeLi();
    testBuilder.makeLabel();
    testBuilder.makeBottomButton();
    testBuilder.makeMagic();
  },

};

