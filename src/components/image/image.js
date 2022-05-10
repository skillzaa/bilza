import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./imageData.js";
import { XAlignment } from "../../BaseComponent/xAlignment.js";
import { YAlignment } from "../../BaseComponent/yAlignment.js";
export default class BilzaImage extends Component {
    constructor(startTime = 0, duration = 300, imgId, x = 0, y = 0) {
        super(DataFn);
        this.startTime = startTime;
        this.duration = duration;
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.img = document.getElementById(imgId);
        if (this.img == null) {
            throw new Error("image could not be found");
        }
        else {
            document.body.appendChild(this.img);
            this.orignalWidth = this.img.clientWidth;
            this.orignalHeight = this.img.clientHeight;
            this.img.style.display = "none";
        }
        this.d.x = x;
        this.d.y = y;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        if (this.d.useDynResize == true) {
            let wd = p.canvasWidth() / 100 * this.d.dynWidthPercent;
            ;
            return wd;
        }
        else {
            let wd = this.orignalWidth;
            return wd;
        }
    }
    height(p) {
        if (this.d.useDynResize == true) {
            return p.canvasHeight() / 100 * this.d.dynHeightPercent;
        }
        else {
            return this.orignalHeight;
        }
    }
    draw(p) {
        p.drawImage(this.img, this.getX(p), this.getY(p), this.width(p), this.height(p));
        return true;
    }
    getX(p) {
        let x = p.xPerc(this.d.x);
        switch (this.d.xAlignment) {
            case this.xAlignmentOptions.Left:
                break;
            case this.xAlignmentOptions.Mid:
                x = x - ((this.width(p) / 2));
                break;
            case this.xAlignmentOptions.Right:
                x = x - (this.width(p));
                break;
        }
        return x;
    }
    getY(p) {
        let y = p.yPerc(this.d.y);
        switch (this.d.yAlignment) {
            case this.yAlignmentOptions.Top:
                break;
            case this.yAlignmentOptions.Mid:
                y = y - ((this.height(p) / 2));
                break;
            case this.yAlignmentOptions.Bot:
                y = y - (this.height(p));
                break;
        }
        return y;
    }
}
