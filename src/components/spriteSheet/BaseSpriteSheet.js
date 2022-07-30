import { DrawLayer, BaseComponent } from "../../bilza.js";
export default class BaseSpriteSheet extends BaseComponent {
    constructor(imgUrl) {
        super();
        this.leftExtraPix = 0;
        this.topExtraPix = 0;
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
    init(p) {
        super.init(p);
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
    draw(p) { return true; }
}
