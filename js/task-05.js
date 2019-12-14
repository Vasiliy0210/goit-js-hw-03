// ------------------HW-3__task--05

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    let arrProperties = [];
    for (const elem of arr) {
        for (const key in elem) {
            if (key === prop) {
                arrProperties.push(elem[key]);
            }
        }
    }
    return arrProperties;
};


console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));