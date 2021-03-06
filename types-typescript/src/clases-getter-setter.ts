export { };
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

//Otra forma de aplicar propiedades privadas en anteponiendo el simbolo #. 
class Picture {
    //#_id: number;
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        //this.#_id = _id;
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    //metodos accesors
    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get orientation(){
        return this._orientation;
    }

    set title(title: string){
        this._title = title;
    }

    set orientation(orientation: PhotoOrientation)
    {
        this._orientation = orientation;
    }

    //Comportamiento
    public toString() {
        return `[id: ${this._id}, ${this._title}, ${this._orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    constructor(_id: number, title: string) {
        this._id = _id;
        this._title = title;
        this.pictures = [];
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    set id(id: number){
        this._id = id;
    }

    set title(title: string){
        this._title = title;
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
album.title = 'Vaciones 2019';
console.log(`Album Title: ${album.title}`);