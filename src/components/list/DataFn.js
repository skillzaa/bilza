import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.align = "left";
        this.x = 10;
        this.y = 10;
        this.widthPerc = 80;
        this.colorBg = "blue";
        this.paddingX = 4;
        this.paddingY = 4;
        this.gap = 10;
        this.colorFont = "black";
        this.colorBorder = "black";
        this.colorBg = "green";
        this.items = [];
        this.flagShowBorder = true;
        this.flagShowBg = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
