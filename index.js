function getFirstSelector(selector) {
  var x = document.querySelector(selector);
  return x;
}

function nestedTarget() {

  var x = document.querySelector('#nested').getElementsByClassName('target')[0];
  return x;

}

function increaseRankBy(n) {
  var x = document.querySelectorAll('.ranked-list')
  var i = 0;
  for (i = 0; i < x.length; i++) {
    x = parseInt(x);
    x[i+n];
  }
  return x;


}

function deepestChild() {

}
