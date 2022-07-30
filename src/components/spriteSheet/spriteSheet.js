import { DrawLayer, AniNumber } from "../../bilza.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheet extends BaseSpriteSheet {
    constructor(imgUrl, iconWidth, iconHeight, totalColumns, totalRows) {
        super(imgUrl);
        this.totalColumns = totalColumns;
        this.totalRows = totalRows;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
        this.width.set(this.iconWidth);
        this.height.set(this.iconHeight);
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
        p.drawImageSrcDest(this.img, (this.leftExtraPix + (this.column.value() * this.iconWidth)), (this.topExtraPix + (this.row.value() * this.iconHeight)), this.iconWidth, this.iconHeight, this.xAligned(), this.yAligned(), this.contentWidth(), this.contentHeight());
        this.postDraw(p);
        return true;
    }
    gotoImage(atFrame, row, column) {
        if (row > this.totalRows || column > this.totalColumns) {
            console.info(`the value of row (${row}) or column (${column}) exceeds total rows (${this.totalRows}) or total columns (${this.totalColumns})`);
            return;
        }
        this.row.goto(atFrame, row);
        this.column.goto(atFrame, column);
    }
}
