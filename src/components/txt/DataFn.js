import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.content = "Txt";
        this.x = 0;
        this.y = 0;
        this.padding = 2;
        this.margin = 2;
        this.colorMargin = "black";
        this.colorBg = "#EFEEE3";
        this.color = "black";
        this.widthPercent = 10;
        this.flagDrawMargin = true;
        this.flagDrawBg = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
