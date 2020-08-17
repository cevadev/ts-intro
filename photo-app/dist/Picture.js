"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const Item_1 = require("./Item");
class Picture extends Item_1.Item {
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
