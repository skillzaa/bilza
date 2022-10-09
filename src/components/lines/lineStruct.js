export default class LineStruct {
    constructor(x1, y1, x2, y2, color = "black", lineWidth = 4, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.lineWidth = lineWidth;
        this.lineCap = lineCap;
        this.lineJoin = lineJoin;
        this.lineDash = lineDash;
    }
}
