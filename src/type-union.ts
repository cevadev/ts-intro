/* let userId: number | string;
userId = 10;
userId = '10';

// Buscar un UserName dado un ID
function getUsernameById(id: number | string)
{
    //business logic para encontrar un usuario
    return 'Juan Antonio';
} */

/* getUsernameById(4);
getUsernameById('8'); */

//----------- ALIAS DE TIPOS -----------//
type IdUser= number | string; //definimos el alias para el tipo
let userId: IdUser;
userId = 10;
userId = '10';

// Buscar un UserName dado un ID
function getUsernameById(id: IdUser) {
    //business logic para encontrar un usuario
    return 'Juan Antonio';
}

getUsernameById(4);
getUsernameById('8');