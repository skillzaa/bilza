import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import SpriteSheetIrregular from "../components/spriteSheet/spriteSheetAlt.js";
export default class SpriteSheets {
    static emoji() {
        const g = new SpriteSheet("../images/emoji.png", 72, 72, 16, 10);
        return g;
    }
    static ghosts() {
        const ss = new SpriteSheetIrregular("../images/ghosts.png");
        ss.addImage("blue", 27, 21, 113, 112);
        ss.addImage("greenAlien", 146, 18, 116, 109);
        ss.addImage("angel", 263, 20, 135, 116);
        ss.addImage("redDeamon", 396, 16, 130, 123);
        ss.addImage("robot", 529, 15, 121, 119);
        ss.addImage("windows", 647, 22, 121, 123);
        ss.addImage("military", 26, 140, 118, 130);
        ss.addImage("candy", 144, 140, 109, 130);
        ss.addImage("chocolate", 269, 140, 134, 130);
        ss.addImage("cowboy", 402, 140, 126, 130);
        ss.addImage("bowtie", 525, 140, 128, 130);
        ss.addImage("wall", 653, 140, 123, 130);
        ss.addImage("cat", 27, 272, 121, 130);
        ss.addImage("chinese", 146, 260, 118, 130);
        ss.addImage("japnese", 257, 279, 139, 121);
        ss.addImage("kid", 398, 273, 121, 121);
        ss.addImage("ninja", 523, 269, 121, 123);
        ss.addImage("pirate", 640, 281, 123, 111);
        ss.addImage("nurse", 29, 400, 114, 132);
        ss.addImage("cop", 140, 400, 116, 128);
        ss.addImage("santa", 272, 400, 121, 125);
        ss.addImage("queen", 392, 395, 130, 130);
        ss.addImage("punk", 534, 395, 111, 121);
        ss.addImage("checker", 665, 411, 112, 103);
        ss.addImage("stripes", 277, 529, 111, 100);
        ss.addImage("glasses", 404, 528, 116, 100);
        return ss;
    }
}
