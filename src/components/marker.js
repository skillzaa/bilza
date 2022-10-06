import Circle from "./circle/circle.js";
export default class Marker extends Circle {
    constructor(startTime, endTime, componentPack, x = 50, y = 50, color = "red", radius = 2) {
        super(componentPack);
        this.width.set(radius / 2);
        this.x.set(x);
        this.y.set(y);
        this.color.set(color);
    }
}
