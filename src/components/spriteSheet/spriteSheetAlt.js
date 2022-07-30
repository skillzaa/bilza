import { AniNumber } from "../../bilza.js";
import ImageDataOpt from "./imageDataOpt.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheetAlt extends BaseSpriteSheet {
    constructor(imgUrl) {
        super(imgUrl);
        this.imagesList = [];
        this.currentImage = new AniNumber(0);
    }
    init(p) {
        super.init(p);
        if (this.imagesList.length < 1) {
            console.error("Sprite Sheet Optimized :no images added");
        }
        this.currentImage.set(0);
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.img.setAttribute("width", this.contentWidth().toString());
        this.img.setAttribute("height", this.contentHeight().toString());
        return true;
    }
    update(msDelta, p) {
        this.currentImage.update(msDelta);
        this.width.set(this.imagesList[this.currentImage.value()].width);
        this.height.set(this.imagesList[this.currentImage.value()].height);
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        p.drawImageSrcDest(this.img, this.imagesList[this.currentImage.value()].x, this.imagesList[this.currentImage.value()].y, this.imagesList[this.currentImage.value()].width, this.imagesList[this.currentImage.value()].height, this.xAligned(), this.yAligned(), this.contentWidth(), this.contentHeight());
        this.postDraw(p);
        return true;
    }
    defineImage(name, x, y, width, height) {
        const a = new ImageDataOpt(name, x, y, width, height);
        this.imagesList.push(a);
    }
    gotoImageName(atFrame, imageName) {
        for (let i = 0; i < this.imagesList.length; i++) {
            if (this.imagesList[i].name == imageName) {
                this.currentImage.goto(atFrame, i);
                return true;
            }
        }
        return false;
    }
}
