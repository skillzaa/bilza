export class ObjectData {
    constructor() {
        this.frameStart = 0;
        this.x = 0;
        this.y = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.radius = 100;
        this.fill = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
