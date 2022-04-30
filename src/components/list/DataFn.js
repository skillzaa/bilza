import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.align = "centre";
        this.x = 10;
        this.y = 10;
        this.widthBorder = 3;
        this.dynWidth = 80;
        this.colorBg = "blue";
        this.paddingX = 4;
        this.paddingY = 4;
        this.gap = 10;
        this.colorFont = "black";
        this.colorBorder = "#10c910";
        this.colorItemBorder = "blue";
        this.colorBg = "green";
        this.items = [];
        this.flagShowBorder = true;
        this.flagShowBg = true;
        this.flagShrinkTofitVertically = false;
        this.listDim = [0, 2];
        this.dimFontColor = "grey";
        this.dimBgColor = "#6B726D";
        this.dimBorderColor = "grey";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
