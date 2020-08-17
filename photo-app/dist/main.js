"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Album_1 = require("./Album");
const PhotoOrientation_1 = require("./PhotoOrientation");
const Picture_1 = require("./Picture");
const User_1 = require("./User");
//Archivo que es el punto de entrada del proyecto.
const user = new User_1.User(1, 'barcvilla', 'Carlos', true);
const album = new Album_1.Album(10, 'Platz i picture');
const picture = new Picture_1.Picture(1, 'Typescript Course', '2020-03-10', PhotoOrientation_1.PhotoOrientation.Landscape);
// Creamos las relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('User: ', user);
//borramos album
user.removeAlbum(album);
console.log('User: ', user);
