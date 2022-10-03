import Component from "../engineComponent/engineComponent.js";
export default class Pic extends Component {
    constructor(startTime, endTime, componentPack, imgUrl, width = 25, height = 25) {
        super(componentPack);
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
        this.drawLayer = 2;
    }
    init(p) {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.img.setAttribute("width", this.width.value().toString());
        this.img.setAttribute("height", this.height.value().toString());
        return true;
    }
    draw(p) {
        this.preDraw(p);
        p.drawImage(this.img, this.contentX(), this.contentY(), this.width.value(), this.height.value());
        this.postDraw(p);
        return true;
    }
}
