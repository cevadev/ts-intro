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
    console.log('User Info: ', "\n        User id: " + user.id + ",\n        User Name: " + user.name + ",\n        Nick Name: " + user.nickName + "\n    ");
}
showFormattedInfo({ id: '1A', name: 'ceva_19', nickName: 'Carlos' });
//Tipo void como tipo de dato
var unusable;
unusable = undefined;
