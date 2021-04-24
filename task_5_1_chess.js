"use strict";

// 2. Сделать генерацию корзины динамической: вёрстка корзины не должна
//    находиться в HTML-структуре. Там должен быть только div, в который
//    будет вставляться корзина, сгенерированная на базе JS:
//    a. Пустая корзина должна выводить строку «Корзина пуста»;
//    b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

function addProductBasket(basketDesc, name, price, quantity) {
    basketDesc.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

function countBasketPrice(basketDesc) {
    let sum = 0;
    for (let i = 0; i < basketDesc.length; i++) {
        sum += basketDesc[i].total();
    }
    return sum;
}

function descBasketPrice(basketDesc) {
    let str = '';
    for (let i = 0; i < basketDesc.length; i++) {
        str += (i + 1) + '. ' + basketDesc[i].product + ': ' + basketDesc[i].price +
            ' * ' + basketDesc[i].quantity + ' = ' + (basketDesc[i].total()) + '\n';
    }
    return str;
}

function basket() {
    let content = document.getElementById("basket");
    if (basket_ === []) {
        content.innerHTML = 'Корзина пуста';
    }
    else {
        content.innerHTML = 'В корзину добавлены следующие товары:\n'
            + descBasketPrice(basket_) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket_);
    }
}

Window.onload = basket;

let basket_ = [
    {
        product: 'футболка',
        price: 500,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'джинсы',
        price: 2700,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'жилет',
        price: 2100,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'носки',
        price: 250,
        quantity: 5,
        total: totalSum
    },
]

// alert('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));
