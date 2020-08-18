export { };
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

//Uso de herencia en TS
interface Entity
{
    readonly id: number,
    title: string
}

interface Album extends Entity
{
    description: string
}

interface Picture extends Entity
{
    orientation: PhotoOrientation,
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Fotos relacionadas con los meetups',
};

const picture: Picture = {
    id: 1,
    title: 'Family pictures',
    orientation: PhotoOrientation.Landscape
};

//definimos newPicture como objeto vacio de tipo Picture
let newPicture: Picture = {} as Picture;
//newPicture.id = 2;
newPicture.title = 'Moon';

console.log(`Album: ${album.id}, ${album.title}, ${album.description}`);
console.log(`Picture: ${picture.id}. ${picture.title}, ${picture.orientation}`);
console.log(`New Picture: ${newPicture.id}. ${newPicture.title}`);