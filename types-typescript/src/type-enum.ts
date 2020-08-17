// Orientacion para las fotografias
enum PhotoOrientation{
    Landscape = 0,
    Portrait = 1,
    Squere = 2,
    Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log(`Landscape: ${landscape}`);
console.log(`Landscape: ${PhotoOrientation[landscape]}`);

enum PictureOrientarion{
    Landscape = 10,
    Portrait,
    Squere,
    Panorama
}

enum Country{
    Bolivia = 'BOL',
    Colombia = 'COL',
    Argentina = 'AR',
    Peru = 'PE'
}

let country: Country = Country.Peru;
console.log(`País: ${country}`);