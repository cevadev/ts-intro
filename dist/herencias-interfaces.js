"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Meetups',
    description: 'Fotos relacionadas con los meetups',
};
var picture = {
    id: 1,
    title: 'Family pictures',
    orientation: PhotoOrientation.Landscape
};
//definimos newPicture como objeto vacio de tipo Picture
var newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.log("Album: " + album.id + ", " + album.title + ", " + album.description);
console.log("Picture: " + picture.id + ". " + picture.title + ", " + picture.orientation);
console.log("New Picture: " + newPicture.id + ". " + newPicture.title);
