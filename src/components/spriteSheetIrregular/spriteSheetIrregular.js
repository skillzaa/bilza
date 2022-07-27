import { DrawLayer, BaseComponent, AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseComponent {
    constructor(imgUrl) {
        super();
        this.imagesList = [];
        this.currentImage = new AniNumber(0);
        this.responsiveDims = false;
        this.responsivePadding = false;
        this.imagesList.push(new ImageData("blue", 27, 21, 113, 112));
        this.imagesList.push(new ImageData("greenAlien", 146, 18, 116, 109));
        this.imagesList.push(new ImageData("angel", 263, 20, 135, 116));
        this.imagesList.push(new ImageData("redDeamon", 396, 16, 130, 123));
        this.imagesList.push(new ImageData("robot", 529, 15, 121, 119));
        this.imagesList.push(new ImageData("windows", 647, 22, 121, 123));
        this.imagesList.push(new ImageData("military", 26, 140, 118, 130));
        this.imagesList.push(new ImageData("candy", 144, 140, 109, 130));
        this.imagesList.push(new ImageData("chocolate", 269, 140, 134, 130));
        this.imagesList.push(new ImageData("cowboy", 402, 140, 126, 130));
        this.imagesList.push(new ImageData("bowtie", 525, 140, 128, 130));
        this.imagesList.push(new ImageData("wall", 653, 140, 123, 130));
        this.imagesList.push(new ImageData("cat", 27, 272, 121, 130));
        this.imagesList.push(new ImageData("chinese", 146, 260, 118, 130));
        this.imagesList.push(new ImageData("japnese", 257, 279, 139, 121));
        this.imagesList.push(new ImageData("kid", 398, 273, 121, 121));
        this.imagesList.push(new ImageData("ninja", 523, 269, 121, 123));
        this.imagesList.push(new ImageData("pirate", 640, 281, 123, 111));
        this.imagesList.push(new ImageData("nurse", 29, 400, 114, 132));
        this.imagesList.push(new ImageData("cop", 140, 400, 116, 128));
        this.imagesList.push(new ImageData("santa", 272, 400, 121, 125));
        this.imagesList.push(new ImageData("queen", 392, 395, 130, 130));
        this.imagesList.push(new ImageData("punk", 534, 395, 111, 121));
        this.imagesList.push(new ImageData("checker", 665, 411, 112, 103));
        this.imagesList.push(new ImageData("stripes", 277, 529, 111, 100));
        this.imagesList.push(new ImageData("glasses", 404, 528, 116, 100));
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
        this.width.set(this.imagesList[this.currentImage.value()].width);
        this.height.set(this.imagesList[this.currentImage.value()].height);
        super.update(msDelta, p);
        return true;
    }
    addImage(name, x, y, width, height) {
        const a = new ImageData(name, x, y, width, height);
        this.imagesList.push(a);
    }
    draw(p) {
        this.preDraw(p);
        p.drawImageSrcDest(this.img, this.imagesList[this.currentImage.value()].x, this.imagesList[this.currentImage.value()].y, this.imagesList[this.currentImage.value()].width, this.imagesList[this.currentImage.value()].height, this.xAligned(), this.yAligned(), this.contentWidth(), this.contentHeight());
        this.postDraw(p);
        return true;
    }
    gotoImage(atFrame, imageName) {
        for (let i = 0; i < this.imagesList.length; i++) {
            if (this.imagesList[i].name == imageName) {
                this.currentImage.goto(atFrame, i);
                return true;
            }
        }
        return false;
    }
}
