"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        /**Buscar el objeto Album
         * si lo encontramos, lo eliminamos del arreglo de Album
         */
        const index = this.album.findIndex(a => a.id === album.id); //obtenemos el indice del objeto album a eliminar
        //recuperamos y guardamos el objeto album a eliminar
        let deletedAlbum;
        if (index >= 0) {
            //recuperamos elobjeto album
            deletedAlbum = this.album[index];
            //eliminamos el objeto
            this.album.splice(index, 1);
        }
        //retornamos el objeto que acabamos de eliminar
        return deletedAlbum;
    }
}
exports.User = User;
