"use strict";
// <> // Angle brackets syntax
var nombreUsuario;
nombreUsuario = 'barcvilla';
//vamos a tener una cadenas, TS confia en mi
var mensaje = nombreUsuario.length > 6 ?
    "Nombre de usuario " + nombreUsuario + " correcto" : "user name must be more than 6 characters ";
console.log(mensaje);
