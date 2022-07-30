import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import ghosts from "./ghosts.js";
export default class PremadeSpriteSheets {
    static emoji() {
        const g = new SpriteSheet("../images/emoji.png", 72, 72, 16, 10);
        return g;
    }
    static ghosts(imgUrl) {
        const g = ghosts(imgUrl);
        return g;
    }
}
