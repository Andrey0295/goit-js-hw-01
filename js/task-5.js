const countryName = 'Китай';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

// 1.Нормализация регистра в названии стран
if (countryName == null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  // 2.Свитч для определения стоимости
  switch (country) {
    case 'Китай':
      price = 50;
      break;
    case 'Австралия':
      price = 170;
      break;
    case 'Индия':
      price = 80;
      break;
    case 'Ямайка':
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
      break;
  }
}

if (price !== 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else {
  message = NO_DELIVERY;
}
//3.Если цена больше нуля . сформировать сообщение о доставке.
// console.log(price);
// country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
// console.log(country);
console.log(message);
// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
