// ------------------HW-3__task--03

const findBestEmployee = function (employees) {
    console.log(employees)
    let mostProductive = 0;
    let bestEmployeer;
    for (const key in employees) {
        if (employees[key] > mostProductive) {
            mostProductive = employees[key];
            bestEmployeer = key;
        }
    }
    return bestEmployeer;

};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);