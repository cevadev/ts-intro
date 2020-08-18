//TS PRIMITIVE DATA TYPES
//1. NUMBER
//Explicito
let telefono: number;
telefono = 125.68745;
//telefono = 'hola'; //no puede aceptar cadenas

//Inferido
let phone = 56897;
phone = 99999;
//phone = true; //error

let hex: number = 0xf00d; //hexagecimal inicia con 0x
let binary: number = 0b001; //binario inicia con 0b digitos entre 0-9 y a-f
let octal: number = 0o744; //octal digitos en tre 0-7

//2. Tipo Boolean
//Tipado explicito
let isPro: boolean;
isPro = true;

//tipado inferido
let isUserPro = false;
isUserPro = true;

//3. Tipo String
//Tipado explicito
let nombre: string;
nombre = 'José';
nombre = "Maria";

//Tipado inferido
let nickName = "ceva";

//4. Template String
//Usando back-tick (``)
let message: string = `
    Username: ${nombre},
    UserPassword: rpgile400,
    UserNickname: ${nickName},
    Nivel Pro: ${isPro}
`;

console.log(message);
