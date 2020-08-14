"use strict";
// Orientacion para las fotografias
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log("Landscape: " + landscape);
console.log("Landscape: " + PhotoOrientation[landscape]);
var PictureOrientarion;
(function (PictureOrientarion) {
    PictureOrientarion[PictureOrientarion["Landscape"] = 10] = "Landscape";
    PictureOrientarion[PictureOrientarion["Portrait"] = 11] = "Portrait";
    PictureOrientarion[PictureOrientarion["Squere"] = 12] = "Squere";
    PictureOrientarion[PictureOrientarion["Panorama"] = 13] = "Panorama";
})(PictureOrientarion || (PictureOrientarion = {}));
var Country;
(function (Country) {
    Country["Bolivia"] = "BOL";
    Country["Colombia"] = "COL";
    Country["Argentina"] = "AR";
    Country["Peru"] = "PE";
})(Country || (Country = {}));
var country = Country.Peru;
console.log("Pa\u00EDs: " + country);
