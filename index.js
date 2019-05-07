function getFirstSelector(selector) {
  var x = document.querySelector(selector);
  return x;
}

function nestedTarget() {

  var x = document.querySelector('#nested').getElementsByClassName('target')[0];
  return x;

}

function increaseRankBy(n) {

  var x = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (i = 0; i < x.length; i++) {

    x[i].innerHTML = ((parseInt(x[i].innerHTML)) + n)
    }
  }


function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]
}
