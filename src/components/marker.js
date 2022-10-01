import Circle from "./circle.js";
export default class Marker extends Circle {
    constructor(startTime, endTime, componentPack, x = 50, y = 50, color = "red", radius = 2) {
        super(startTime, endTime, componentPack);
        this.width.setNonResponsive();
        this.height.setNonResponsive();
        this.align(1, 1);
        this.alignRotate(1, 1);
        this.width.set(radius / 2);
        this.x.set(x);
        this.y.set(y);
        this.color.set(color);
    }
}
