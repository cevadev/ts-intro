"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Creamos una nueva clase que defina las propiedad id, title y sean heredadas por Picture y Album
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    toString() {
        return `[id: ${this._id}, title: ${this._title}]`;
    }
}
//Otra forma de aplicar propiedades privadas en anteponiendo el simbolo #. 
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${super.id}, ${super.title}, ${this._orientation}]`;
    }
}
//Miembro accesible a nivel de clase
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Family pics');
album.addPicture(new Picture(1, 'Stay at home', PhotoOrientation.Landscape));
console.log('Album ', album);
//Accediendo a los miembros publicos
console.log(`Album id: ${album.id}`); //invocamos al metodo get id()
//accedemos al metodo set title()
album.title = 'Vaciones 2020';
console.log(`Album Title: ${album.title}`);
// Accediendo al miembro static de la clase Picture
console.log(`PhotoOrientation: ${Picture.photoOrientation.Landscape}`);
