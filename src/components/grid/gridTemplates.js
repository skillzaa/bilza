import Grid from "./grid.js";
export default class GridTemplates {
    constructor() { }
    static dashedGrid() {
        let g = new Grid();
        g.styleNumber.fillStyle = "red";
        g.styleNumber.shadowOffsetX = 0;
        g.styleNumber.shadowOffsetY = 0;
        g.styleNumber.lineWidth = 1;
        g.styleNumber.fontSize = 15;
        g.styleLine.strokeStyle = "#dee1e2";
        g.styleLine.fillStyle = "green";
        g.styleLine.fontSize = 2;
        g.styleLine.lineWidth = 1;
        g.styleLine.lineDashWidth = 15;
        g.styleLine.lineDashGap = 5;
        return g;
    }
}
