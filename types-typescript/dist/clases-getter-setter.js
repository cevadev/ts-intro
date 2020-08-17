"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Otra forma de aplicar propiedades privadas en anteponiendo el simbolo #. 
class Picture {
    constructor(id, title, orientation) {
        //this.#_id = _id;
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    //metodos accesors
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get orientation() {
        return this._orientation;
    }
    set title(title) {
        this._title = title;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this._id}, ${this._title}, ${this._orientation}]`;
    }
}
class Album {
    constructor(_id, title) {
        this._id = _id;
        this._title = title;
        this.pictures = [];
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set id(id) {
        this._id = id;
    }
    set title(title) {
        this._title = title;
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
album.title = 'Vaciones 2019';
console.log(`Album Title: ${album.title}`);
