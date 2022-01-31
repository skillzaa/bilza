export default class Location {
    constructor(x = 0, y = 0) {
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
    }
    X() {
    }
    Y() {
    }
}
