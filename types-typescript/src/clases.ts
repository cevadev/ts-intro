export { };
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

class Picture
{
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation)
    {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //Comportamiento
    public toString()
    {
        return `[id: ${this.id}, ${this.title}, ${this.orientation}]`;
    }
}

class Album
{
    private id: number;
    private title: string;
    private pictures: Picture[];

    constructor(id: number, title: string)
    {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture)
    {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Family pics');
album.addPicture(new Picture(1, 'Stay at home', PhotoOrientation.Landscape));

console.log('Album ', album);
/* console.log(`My ${album.title} album.`);
console.log(`My pictures: ${album.pictures}`) */

