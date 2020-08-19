const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = pricePerDroid * orderPieces; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
// 1. Если цена заказа меньше или равна credits, то покупка пройдет успешно.
// 2. Если кол-вщ заказанных дроидов(orderPieces) равно нул, это означает, что отмененно пользователем.
// 3.Если при умножении orderPieces и pricePerDroid значение больше,чем credits, недостаточно средств на счету.
if (totalPrice <= credits) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
  message = ACCESS_DENIED;
}
if (orderPieces === null) {
  message = CANCELED_BY_USER;
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
