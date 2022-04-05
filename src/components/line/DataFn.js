export class ObjectData {
    constructor() {
        this.msStart = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 800;
        this.y2 = 100;
        this.lineWidth = 15;
        this.flagShadow = false;
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
