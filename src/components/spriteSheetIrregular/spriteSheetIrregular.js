import { DrawLayer, BaseComponent, AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseComponent {
    constructor(imgUrl) {
        super();
        this.imagesList = [];
        this.currentImage = new AniNumber(0);
        this.responsiveDims = false;
        this.responsivePadding = false;
        this.imagesList.push(new ImageData("aaaa", 0, 0, 30, 30));
        this.imagesList.push(new ImageData("bbbb", 10, 10, 30, 30));
        this.imagesList.push(new ImageData("cccc", 30, 30, 30, 30));
        this.imagesList.push(new ImageData("dddd", 20, 20, 30, 30));
        this.img = new Image();
        this.img.src = imgUrl;
        if (this.img == null) {
            throw new Error("image could not be found");
        }
        else {
            document.body.appendChild(this.img);
            this.orignalWidth = this.img.clientWidth;
            this.orignalHeight = this.img.clientHeight;
            this.img.style.display = "none";
        }
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        if (this.imagesList.length < 1) {
            throw new Error("no images added");
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
        super.update(msDelta, p);
        return true;
    }
    addImage(name, x, y, width, height) {
        const a = new ImageData(name, x, y, width, height);
        this.imagesList.push(a);
    }
    draw(p) {
        this.preDraw(p);
        p.drawImageSrcDest(this.img, 0, 0, 500, 500, 0, 0, 500, 500);
        this.postDraw(p);
        return true;
    }
    gotoImage(atFrame, imageName) {
        let nameAdded = false;
        for (let i = 0; i < this.imagesList.length; i++) {
            if (this.imagesList[i].name == imageName) {
                nameAdded = true;
                this.currentImage.set(i);
                return true;
            }
        }
        return false;
    }
}
