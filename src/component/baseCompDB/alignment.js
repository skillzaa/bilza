export default class Alignment {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    align(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    xAlignment() {
        return this.x;
    }
    yAlignment() {
        return this.y;
    }
}
