export class ObjectData {
    constructor() {
        this.msStart = 0;
        this.x = 10;
        this.y = 10;
        this.widthPercent = 200;
        this.heightPercent = 50;
        this.flagShadow = false;
        this.color = "red";
        this.colorShadow = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.widthPercent = 10;
        this.heightPercent = 10;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
