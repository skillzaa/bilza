import { DrawLayer, BaseComponent, AniNumber } from "../../bilza.js";
import ImageData from "./imageData.js";
export default class SpriteSheet extends BaseComponent {
    constructor(imgUrl) {
        super();
        this.imagesList = [];
        this.currentImage = new AniNumber(0);
        this.responsiveDims = false;
        this.responsivePadding = false;
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
    defineImage(name, x, y, width, height) {
        const a = new ImageData(name, x, y, width, height);
        this.imagesList.push(a);
    }
}
