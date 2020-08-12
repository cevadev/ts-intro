"use strict";
//TS PRIMITIVE DATA TYPES
//1. NUMBER
//Explicito
var telefono;
telefono = 12568745;
//telefono = 'hola'; //no puede aceptar cadenas
//Inferido
var phone = 56897;
phone = 99999;
//phone = true; //error
var hex = 0xf00d; //hexagecimal inicia con 0x
var binary = 1; //binario inicia con 0b digitos entre 0-9 y a-f
var octal = 484; //octal digitos en tre 0-7
//2. Tipo Boolean
//Tipado explicito
var isPro;
isPro = true;
//tipado inferido
var isUserPro = false;
isUserPro = true;
//3. Tipo String
//Tipado explicito
var nombre;
nombre = 'José';
nombre = "Maria";
//Tipado inferido
var nickName = "ceva";
//4. Template String
//Usando back-tick (``)
var message = "\n    Username: " + nombre + ",\n    UserPassword: rpgile400,\n    UserNickname: " + nickName + ",\n    Nivel Pro: " + isPro + "\n";
console.log(message);
