var sum = 0;

while (true) {
  var value = +prompt('Введите число');
  if (!value) break;
  sum += value;
}

alert('Сумма ' + sum);
