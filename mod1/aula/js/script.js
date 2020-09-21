console.log('oi');

var data = Array.from(document.querySelectorAll('.data'));

for (i = 0; i < data.length; i++) {
  var currentItem = data[i];
  currentItem.classList.add('emphasis');
}
