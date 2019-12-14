// ------------------HW-3__task--04

const countTotalSalary = function (employees) {
    let total = 0;
    for (const key in employees) {
        total += employees[key];
    }

    return `Общая сумма, подлежащая выплате сотрудникам составляет: ${total}`;
}

console.log(countTotalSalary({}));

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
);