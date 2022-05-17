import CompDataBase from "../../../BaseComponent/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.listGapFactor = 1;
        this.maxDisplayCharsPerLine = 70;
        this.border = 1;
        this.colorFont = "black";
        this.colorBorder = "black";
        this.colorBg = "white";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
