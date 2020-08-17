import { Item } from "./Item";
import { Picture } from "./Picture";

export class Album extends Item {
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this.pictures = [];
    }
    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}