"use strict";
//Void
//Tipo explicito que tambien aplica a funciones donde el compilador si encuentra la palabra return traia
//de inferir el tipo de dato que retorna. si no hay return coloca void
function userInfo(user) {
    console.log('User info: ', user.id, user.userName, user.firstName);
}
userInfo({ id: 1, userName: 'barcvilla', firstName: 'Villanueva' });
console.log(userInfo);
//Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info: ', `
        User id: ${user.id},
        User Name: ${user.name},
        Nick Name: ${user.nickName}
    `);
}
showFormattedInfo({ id: '1A', name: 'ceva_19', nickName: 'Carlos' });
////////////////////////
//Tipo void como tipo de dato
let unusable;
unusable = undefined;
////////////////////
//Tipo Never: tipo inferido -> funcion que nunca retorna un valor u objeto
function handleError(code, message) {
    //procesamiento del error
    //generamos un mensaje
    throw new Error(`${message}. ${code}`);
}
try {
    handleError(404, 'Resource not found');
}
catch (error) {
}
/* function sumNumbers(limit: number): never
{
    let sum = 0;
    //ciclo infinito
    while(true)
    {
        sum++;
    }
} */
