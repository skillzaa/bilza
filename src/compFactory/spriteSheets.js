import SpriteSheet from "../components/spriteSheet.js";
export default class SpriteSheets {
    static emoji() {
        const g = new SpriteSheet("../images/emoji.png", 72, 72, 16, 10);
        return g;
    }
}
