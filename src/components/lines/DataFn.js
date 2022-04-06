export class ObjectData {
    constructor() {
        this.msStart = 0;
        this.responsive = true;
        this.lineWidth = 5;
        this.flagShadow = false;
        this.flagFilled = true;
        this.color = "red";
        this.colorShadow = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
