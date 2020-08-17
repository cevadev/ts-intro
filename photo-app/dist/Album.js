"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const Item_1 = require("./Item");
class Album extends Item_1.Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
