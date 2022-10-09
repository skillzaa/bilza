import LineStruct from "./lineStruct.js";
export default class Seg {
    constructor(data, x, y, color = "black", lineWidth = 4, lineCap = 0, lineJoin = 0, lineDash = [1, 0]) {
        this.startX = x;
        this.startY = y;
        this.color = color;
        this.data = data;
        this.lineWidth = lineWidth,
            this.lineCap = lineCap;
        this.lineJoin = lineJoin;
        this.lineDash = lineDash;
        this.localData = [];
    }
    add(x, y, color = this.color, lineWidth = this.lineWidth, lineCap = this.lineCap, lineJoin = this.lineJoin, lineDash = this.lineDash) {
        if (this.localData.length == 0) {
            const l = new LineStruct(this.startX, this.startY, x, y, color, lineWidth, lineCap, lineJoin, lineDash);
            this.localData.push(l);
        }
        else {
            const endX = this.localData[this.localData.length - 1].x2;
            const endY = this.localData[this.localData.length - 1].y2;
            const l = new LineStruct(endX, endY, x, y, color, lineWidth, lineCap, lineJoin, lineDash);
            this.localData.push(l);
        }
        return this;
    }
    save() {
        for (let i = 0; i < this.localData.length; i++) {
            const line = this.localData[i];
            this.data.push(line);
        }
    }
}
