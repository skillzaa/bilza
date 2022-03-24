export class ObjectData {
    constructor() {
        this.frameStart = 0;
        this.cellWidth = 50;
        this.cellHeight = 50;
        this.colorHorizontalLines = "black";
        this.colorVerticalLines = "black";
        this.colorNumbers = "black";
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
