import { Album } from "./Album";
import { PhotoOrientation } from "./PhotoOrientation";
import { Picture } from "./Picture";
import { User } from "./User";

//Archivo que es el punto de entrada del proyecto.
const user = new User(1, 'barcvilla', 'Carlos', true);
const album = new Album(10, 'Platz i picture');
const picture = new Picture(1, 'Typescript Course', '2020-03-10', PhotoOrientation.Landscape);

// Creamos las relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('User: ', user);

//borramos album
user.removeAlbum(album);
console.log('User: ', user);