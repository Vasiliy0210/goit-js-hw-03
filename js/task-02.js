// ------------------HW-3__task--02

const countProps = function (obj) {
    const arrayProps = Object.keys(obj);
    return console.log(arrayProps.length);
};

countProps({});

countProps({ name: 'Mango', age: 2 });

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });