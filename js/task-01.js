// ------------------HW-3__task--01

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user['hobby'] = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
let message;
for (const key of keys) {
    console.log(message = `${key} = ${user[key]}`)
}


