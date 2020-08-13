//-----------------  Arrays  -----------------//
// Tipo Explicito
let users: string[];
users = ['Angela Woo', 'Paparazzi', 'Ice Cube'];

// Tipo Inferido
let otherUsers = ['Angela Woo', 'Paparazzi', 'Ice Cube'];

//Array<TIPO>
let pictureTitles: Array<String>;
pictureTitles = ['Favorite Sunset', 'Vacation time', 'Landscape'];

// Accediendo a los valores en un Array
console.log(`first user: ${users[0]}`);
console.log(`first title: ${pictureTitles[0]}`);

//Propiedades de un Array
console.log(`¿Cuántos users hay? ${users.length}`);

//Funciones de un Array
//users.push('Barcvilla');
    