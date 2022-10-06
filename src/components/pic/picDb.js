import CompDb from "../../compDb/compDb.js";
import Pic from "./pic.js";
export default class PicDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, imgUrl, width = 25, height = 25) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
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
    getEngineComp(pack) {
        const comp = new Pic(this, pack);
        return comp;
    }
}
