import CircleDb from "./circleDb.js";
export default class MarkerDb extends CircleDb {
    constructor(linker, x, y, color = "red", radius = 5) {
        super(linker, color, radius);
        this.x.set(x);
        this.y.set(y);
        this.filled.set(true);
        this.showBackground.set(false);
    }
}
