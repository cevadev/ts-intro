"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id;
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
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _id)}, ${this.title}, ${this.orientation}]`;
    }
}
_id = new WeakMap();
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Family pics');
album.addPicture(new Picture(1, 'Stay at home', PhotoOrientation.Landscape));
console.log('Album ', album);
/* console.log(`My ${album.title} album.`);
console.log(`My pictures: ${album.pictures}`) */
