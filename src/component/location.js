import { Cornor } from "../design/cornor.js";
export default class Location {
    constructor(x = 0, y = 0, width, height, cornor) {
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > 100) {
            y = 100;
        }
        if (y < 0) {
            y = 0;
        }
        this.x = x;
        this.y = y;
        this.cornor = Cornor.leftTop;
        this.width = width;
        this.height = height;
    }
    X(xPercent, cornor, width) {
    }
    Y(xPercent, cornor, width) {
    }
}