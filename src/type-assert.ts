// <> // Angle brackets syntax

let nombreUsuario: any;
nombreUsuario = 'barcvilla';

//vamos a tener una cadenas, TS confia en mi
//gracias al operador angle brackets <string> podemos acceder a la propiedad lenght y hacer toda la logica
/* let mensaje: string = (<string>nombreUsuario).length > 6 ? 
    `Nombre de usuario ${nombreUsuario} correcto` : `user name must be more than 6 characters `;

console.log(mensaje); */

///////////////////////////////////

let usernameWithid: any = 'barcvilla 1';
//Cómo obtener el username de la variable usernameWithId?
nombreUsuario = (<string>usernameWithid).substring(0,9);
console.log(nombreUsuario);

/////////////////////
//Sintaxis "as"
let mensaje: string = (nombreUsuario as string).length > 6 ?
    `Nombre de usuario ${nombreUsuario} correcto` : `user name must be more than 6 characters `;

console.log(mensaje);

