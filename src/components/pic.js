import { DrawLayer, BaseComponent } from "../bilza.js";
export default class Pic extends BaseComponent {
    constructor(imgUrl, width = 10, height = 10) {
        super();
        this.width.set(width);
        this.height.set(height);
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
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.img.setAttribute("width", this.widthInPix().toString());
        this.img.setAttribute("height", this.heightInPix().toString());
        return true;
    }
    widthInPix() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        return this.canvasWidth / 100 * this.width.value();
    }
    heightInPix() {
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        return this.canvasHeight / 100 * this.height.value();
    }
    draw(p) {
        p.drawImage(this.img, this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix());
        return true;
    }
}
