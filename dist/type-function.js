"use strict";
/* function createPicture(title: string, date: string, size: SquareSize)
{
    console.log(`Creamos una foto usando: ${title} ${date} ${size}`);
}

createPicture('My home', '2020-08-15', '500x500');
 */
// Parametros opcionales dentro de una funcion
function createPicture(title, date, size) {
    console.log(`Creamos una foto usando: ${title} ${date} ${size}`);
}
createPicture('My home', '2020-08-15', '500x500');
createPicture('Colombia trips', '2020-08-10');
createPicture('Argentina trip');
//////////////////////
//Flat array function notation
let createPhoto = (title, date, size) => {
    //construimos un objeto con los parametros de nuestra funcion
    /* return {
        title: title,
        date: date,
        size: size
    } o tambien*/
    return { title, date, size };
};
//invocamos a createPhoto
const picture = createPhoto('Platzi Session', '2020-03-10', '100x100');
console.log(picture);
//---------- TIPO DE RETORNO EN FUNCIONES CON TS -----------------//
//el tipo never relanza yun error desde el ambito de la funcion
function handleError(code, message) {
    //Procesamiento del codigo, mensaje
    if (message == 'error') {
        //re-lanzamos el error
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'se ha producido un error';
    }
}
try {
    let result = handleError(8000, 'OK');
    console.log(result);
}
catch (error) {
    //atrapamos el error cuando pasamos a la funcion handleError el parametro 'error'
}
