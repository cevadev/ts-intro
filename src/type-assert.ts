// <> // Angle brackets syntax

let nombreUsuario: any;
nombreUsuario = 'barcvilla';

//vamos a tener una cadenas, TS confia en mi
let mensaje: string = (<string>nombreUsuario).length > 6 ? 
    `Nombre de usuario ${nombreUsuario} correcto` : `user name must be more than 6 characters `;

console.log(mensaje);