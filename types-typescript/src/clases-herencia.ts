export { };
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

//Creamos una nueva clase que defina las propiedad id, title y sean heredadas por Picture y Album
abstract class Item{
    //Implementacion del modo readonly para el id
    private readonly _id: number;
    private _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }

    public toString(){
        return `[id: ${this._id}, title: ${this._title}]`;
    }
}

//Otra forma de aplicar propiedades privadas en anteponiendo el simbolo #. 
class Picture extends Item{
    //Miembro accesible a nivel de clase
    public static photoOrientation = PhotoOrientation;

    private _orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    //Comportamiento
    public toString() {
        return `[id: ${super.id}, ${super.title}, ${this._orientation}]`;
    }
}

class Album extends Item {
    private pictures: Picture[];

    constructor(id: number, title: string) {
        super(id, title);
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Family pics');
album.addPicture(new Picture(1, 'Stay at home', PhotoOrientation.Landscape));
console.log('Album ', album);

//Accediendo a los miembros publicos
console.log(`Album id: ${album.id}`); //invocamos al metodo get id()
//accedemos al metodo set title()
album.title = 'Vaciones 2020';
console.log(`Album Title: ${album.title}`);

// Accediendo al miembro static de la clase Picture
console.log(`PhotoOrientation: ${Picture.photoOrientation.Landscape}`);