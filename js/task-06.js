// ------------------HW-3__task--06

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    let totalPriceOfProducts = 0;
    for (const elem of allProdcuts) {
        if (elem.name === productName) {
            totalPriceOfProducts = elem.price * elem.quantity
        }
    }
    return `Общая стоимость ${productName}ов составляет - ${totalPriceOfProducts}`;
};


console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));

console.log(calculateTotalPrice(products, 'Сканер'));