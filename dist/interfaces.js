"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Funcion para mostrar una fotografia
/* function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation})
{
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
 */
function showPicture(picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
}
//construimos un objeto picture
var myPicture = {
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
function generatePicture(config) {
    var pic = { title: 'default', date: '2020-02-10' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log("Picture: " + picture.title + ", " + picture.date);
picture = generatePicture({ title: 'My last vacations' });
console.log("my pictures: " + picture.title + ", " + picture.date);
var user;
user = {
    id: 1,
    username: 'barcvilla',
    isPro: true,
};
//mostramos el estado del objeto user
console.log("Objeto user: " + user.id + ", " + user.username + ", " + user.isPro);
//cambiamos el estado de la variable user
user.username = 'cevadev';
console.log("Objeto user: " + user.id + ", " + user.username + ", " + user.isPro);
