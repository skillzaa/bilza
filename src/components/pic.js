import { DrawLayer, AnimatedNoBase, BaseComponent } from "../bilza.js";
export default class Pic extends BaseComponent {
    constructor(imgUrl, dynWidth = 10, dynHeight = 10) {
        super();
        this.dynWidth = new AnimatedNoBase(dynWidth);
        this.dynHeight = new AnimatedNoBase(dynHeight);
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
        this.dynWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.dynHeight.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        const wd = (this.dynWidth.value() * (this.canvasWidth / 100)).toString();
        this.img.setAttribute("width", wd);
        const ht = (this.dynHeight.value() * (this.canvasHeight / 100)).toString();
        this.img.setAttribute("height", ht);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.dynWidth.update(msDelta);
        this.dynHeight.update(msDelta);
        return true;
    }
    width() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        let wd = this.canvasWidth / 100 * this.dynWidth.value();
        return wd;
    }
    height() {
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        return this.canvasHeight / 100 * this.dynHeight.value();
    }
    draw(p) {
        p.drawImage(this.img, this.loc.x(), this.loc.y(), this.width(), this.height());
        return true;
    }
    resize(fromTime, toTime, fromWidth, toWidth, fromHeight, toHeight) {
        this.dynWidth.animate(fromTime, toTime, fromWidth, toWidth);
        this.dynHeight.animate(fromTime, toTime, fromHeight, toHeight);
    }
}
