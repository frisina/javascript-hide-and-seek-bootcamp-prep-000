function getFirstSelector(selector) {
  var x = document.querySelector(selector);
  return x;
}

function nestedTarget() {

  var x = document.querySelector('#nested').getElementsByClassName('target')[0];
  return x;

}
