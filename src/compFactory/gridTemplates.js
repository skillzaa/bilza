import Grid from "../components/grid/grid.js";
export default class GridTemplates {
    constructor(insert) {
        this.insert = insert;
    }
    dashed(linesColor = "#dee1e2") {
        let g = new Grid();
        g.shadowsOff();
        this.insert(g);
        g.d.showNumbers = false;
        g.d.colorNumbers = "#ff0000";
        g.d.lineWidthHorizontal = 1;
        g.d.lineWidthVertical = 1;
        g.d.fontSize = 25;
        g.d.colorHorizontalLines = linesColor;
        g.d.colorVerticalLines = linesColor;
        g.d.lineDash = [15, 5];
        return g;
    }
    demo() {
        let grid = new Grid();
        this.insert(grid);
        grid.d.showNumbers = true;
        grid.data.colorNumbers = "red";
        grid.d.fontSize = 12;
        grid.d.cellWidthPerc = 100;
        grid.d.cellHeightPerc = 20;
        grid.d.colorHorizontalLines = "blue";
        grid.d.colorVerticalLines = "brown";
        grid.d.lineWidthVertical = 10;
        grid.d.lineWidthHorizontal = 2;
        return grid;
    }
    simple(linesColor = "#dee1e2") {
        let grid = new Grid();
        this.insert(grid);
        grid.d.colorHorizontalLines = linesColor;
        grid.d.colorVerticalLines = linesColor;
        return grid;
    }
}
