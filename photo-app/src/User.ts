import { Album } from "./Album";

export class User {
    private album: Album[];

    constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
        this.album = [];
    }

    addAlbum(album: Album) {
        this.album.push(album);
    }

    removeAlbum(album: Album): Album | undefined
    {
        /**Buscar el objeto Album
         * si lo encontramos, lo eliminamos del arreglo de Album
         */
        const index = this.album.findIndex(a => a.id === album.id); //obtenemos el indice del objeto album a eliminar
        //recuperamos y guardamos el objeto album a eliminar
        let deletedAlbum;
        if(index >= 0)
        {
            //recuperamos elobjeto album
            deletedAlbum = this.album[index];
            //eliminamos el objeto
            this.album.splice(index, 1);
        }
        //retornamos el objeto que acabamos de eliminar
        return deletedAlbum;
    }
}