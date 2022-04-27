import CompDataBase from "../../design/CompDataBase.js";
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.fontSize = 8;
        this.cellWidth = 50;
        this.cellHeight = 50;
        this.colorHorizontalLines = "grey";
        this.colorVerticalLines = "grey";
        this.colorNumbers = "grey";
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
        this.lineWidthVertical = 1;
        this.lineWidthHorizontal = 1;
        this.lineDash = [];
    }
}
