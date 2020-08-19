const invoice = 100;
const stock = 100;

// Write code under this line
const message =
  invoice > stock
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);

//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'
