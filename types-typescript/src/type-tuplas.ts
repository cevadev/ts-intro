let usuario: [number, string];
usuario = [1, 'barcvilla'];
//impresion tupla
console.log(`${usuario}`);

//acceso a elementos en la tupla
console.log(`User id: ${usuario[0]}, User name: ${usuario[1]}`);

// Tuplas con varios valores
let usuarioInfo: [number, string, boolean];
usuarioInfo = [2, 'Juan José Pelaes', false];

// Arreglo de tuplas
let arreglo: [number, string][] = []; //debemos primero inicializar el array, sino da error
arreglo.push([1, 'Pedro']);
arreglo.push([2, 'Fernanda']);
arreglo.push([3, 'Antonio']);

console.log(`Array: ${arreglo}`);

// Uso de funciones de la clase Array
//ejemplo accedemos al ultimo elemento del array
arreglo[1][1] = arreglo[1][1].concat(' María');
arreglo[2][1] = arreglo[2][1].replace('Antonio', 'Mario');

console.log(`Array: ${arreglo}`);