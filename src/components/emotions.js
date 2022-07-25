import { DrawLayer, BaseComponent, AniNumber } from "../bilza.js";
export default class Emotions extends BaseComponent {
    constructor(imgUrl, IconWidth = 70, IconHeight = 70) {
        super();
        this.sourceWidth = IconWidth;
        this.sourceHeight = IconHeight;
        this.width.set(this.sourceWidth);
        this.height.set(this.sourceHeight);
        this.responsiveDims = false;
        this.responsivePadding = false;
        this.row = new AniNumber(0);
        this.column = new AniNumber(0);
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
    update(msDelta, p) {
        this.row.update(msDelta);
        this.column.update(msDelta);
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        p.drawImageSrcDest(this.img, (this.column.value() * this.sourceWidth), (this.row.value() * this.sourceWidth), this.sourceWidth, this.sourceHeight, this.xAligned(), this.yAligned(), this.contentWidth(), this.contentWidth());
        this.postDraw(p);
        return true;
    }
    gotoImage(atFrame, row, column) {
        this.row.goto(atFrame, row);
        this.column.goto(atFrame, column);
    }
}
