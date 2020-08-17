"use strict";
//---------------  Type obect  ---------------//
let user;
user = {}; //Object
user = {
    id: 1,
    username: 'Paparazzi',
    firstName: 'Pablo',
    isPro: true,
}; //TS considera a esta variable no como un tipo de la clase Object sino como un tipo object
console.log('User: ', user);
//Object vs object (Clase JS vs tipo object para TS)
const myConst = {
    id: 1,
    username: 'Paparazzi',
    firstName: 'Pablo',
    isPro: true,
}; //TS considera a esta variable como una instancia de la Object de JS
const isInstance = myConst instanceof Object;
console.log(`myConst es una instancia de la Object?: ${isInstance}`);
console.log(`other user: ${myConst.id} ${myConst.username}`);
