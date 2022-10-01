import AniColorDb from "./propTypes/AniColorDb.js";
export default class BackgroundDb {
    constructor(color = "blue") {
        this.color = new AniColorDb(color);
    }
}
