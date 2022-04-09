import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.content = "Text";
        this.padding = 2;
        this.margin = 2;
        this.colorMargin = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.widthPercent = 10;
        this.heightPercent = 10;
        this.flagDrawMargin = true;
        this.flagDrawBg = true;
        this.xAlignment = 1;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
