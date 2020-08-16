export {};
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

interface Picture{
    title: string,
    date: string,
    orientation: PhotoOrientation,
}

// Funcion para mostrar una fotografia
/* function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation})
{
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
 */

function showPicture(picture: Picture)
{
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

//construimos un objeto picture
let myPicture = {
    title: 'My vacations',
    date: '2020-01-01',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPicture);
// Le pasamos a la funcion un objeto anonimo
showPicture({
    title: 'My trip',
    date: '2019-12-20',
    orientation: PhotoOrientation.Panorama
});

//------------ Interface con propiedades opcionales -------------------//
//Interface que sera utilizada como contrato para generar un objeto de este tipo
interface PictureConfig{
    //definimos los atributos de la interface como opcionales
    title?: string,
    date?: string,
    orientation?: PhotoOrientation,
}

function generatePicture(config: PictureConfig)
{
    const pic = {title: 'default', date: '2020-02-10'}
    if(config.title)
    {
        pic.title = config.title;
    }

    if(config.date)
    {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log(`Picture: ${picture.title}, ${picture.date}`);

picture = generatePicture({title: 'My last vacations'});
console.log(`my pictures: ${picture.title}, ${picture.date}`);


//----------- INTERFACES CON ATRIBUTOS SOLO DE LECTURA ------------//
interface User
{
    //atributo id solo de lectura, solo se podrá asignar un valor al momento de crear el objeto pero 
    //una vez asignado un valor no se podrá modificar.
    readonly id: number,
    username: string,
    isPro: boolean,
}

let user: User;
user = {
    id: 1,
    username: 'barcvilla',
    isPro: true,
}
//mostramos el estado del objeto user
console.log(`Objeto user: ${user.id}, ${user.username}, ${user.isPro}`);

//cambiamos el estado de la variable user
user.username= 'cevadev';
console.log(`Objeto user: ${user.id}, ${user.username}, ${user.isPro}`);