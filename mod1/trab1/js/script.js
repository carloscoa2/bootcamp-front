window.addEventListener('load', start);

function start() {
  console.log('Documento carregado completamente.');
  activateEvents();

  var a = document.querySelector('#numA');
  a.focus();
}

function activateEvents() {
  var numA = document.querySelector('#numA');
  var numB = document.querySelector('#numB');

  numA.addEventListener('keyup', calculate);
  numB.addEventListener('keyup', calculate);
}

function clearFields() {
  var fields = Array.from(document.querySelectorAll('.numberOutputs input'));

  for (var i = 0; i < fields.length; i++) {
    var currentField = fields[i];
    currentField.value = '';
  }
}

function isEmpty() {
  var numA = document.querySelector('#numA');
  var numB = document.querySelector('#numB');

  a = numA.value;
  b = numB.value;

  if (a === '' || b === '') {
    return true;
  } else {
    return false;
  }
}

function isZero(arg) {
  var num = parseInt(arg);

  if (num === 0) {
    return true;
  } else {
    return false;
  }
}

function isNegative(arg) {
  var num = parseInt(arg);

  if (num < 0) {
    return true;
  } else {
    return false;
  }
}

function calculate() {
  if (isEmpty()) {
    clearFields();
    return;
  } else {
    var numA = document.querySelector('#numA');
    var numB = document.querySelector('#numB');

    a = numA.value;
    b = numB.value;

    sum(a, b, '#sum');
    sub(a, b, '#subOne');
    sub(b, a, '#subTwo');
    mult(a, b, '#mult');
    div(a, b, '#divOne');
    div(b, a, '#divTwo');
    square(a, '#squareA');
    square(b, '#squareB');
    divInt(a, '#divIntA');
    divInt(b, '#divIntB');
    fat(a, '#fatA');
    fat(b, '#fatB');
  }
}

function sum(a, b, selector) {
  var sum = document.querySelector(selector);
  sum.value = parseInt(a, 10) + parseInt(b, 10);
}

function sub(a, b, selector) {
  var sub = document.querySelector(selector);
  sub.value = parseInt(a, 10) - parseInt(b, 10);
}

function mult(a, b, selector) {
  var mult = document.querySelector(selector);
  mult.value = parseInt(a) * parseInt(b);
}

function div(a, b, selector) {
  var div = document.querySelector(selector);

  if (isZero(b)) {
    div.value = 'Divisão por zero';
  } else {
    var res = parseFloat(a) / parseFloat(b);

    if (res % 1 === 0) {
      div.value = res;
    } else {
      res = Intl.NumberFormat('pt-BR').format(res.toFixed(2));
      div.value = res;
    }
  }
}

function square(a, selector) {
  var square = document.querySelector(selector);
  square.value = parseInt(a) ** 2;
}

function divInt(a, selector) {
  var divInt = document.querySelector(selector);

  var num = parseInt(a);
  var lista = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      lista.push(i);
    }
  }

  var res = lista.join(', ') + ' (' + lista.length + ')';
  divInt.value = res;
}

function fat(a, selector) {
  var fat = document.querySelector(selector);
  var res = null;

  if (isNegative(a)) {
    res = 'Número negativo';
  } else if (isZero(a)) {
    res = 1;
  } else if (parseInt(a) > 21) {
    res = 'Muito grande';
  } else {
    var num = parseInt(a);
    res = 1;

    for (var i = 1; i <= num; i++) {
      res = res * i;
    }
  }

  fat.value = res;
}
