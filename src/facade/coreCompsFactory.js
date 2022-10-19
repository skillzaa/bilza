import FillRectDB from "../components/fillRect/fillRectDb.js";
import RectDB from "../components/rect/rectDb.js";
import CanvasBorderDb from "../components/canvasBorder/canvasBorderDb.js";
import GridDb from "../components/grid/gridDb.js";
import CircleDb from "../components/circle/circleDb.js";
import MarkerDb from "../components/circle/markerDb.js";
import PicDb from "../components/pic/picDb.js";
import LineDb from "../components/line/lineDb.js";
import ArrowDb from "../components/arrow/arrowDb.js";
import ParticleSystemDB from "../components/particleSystem/particleSystemDb.js";
import TextDB from "../components/text/textDb.js";
import LineSegDb from "../components/lineSeg/lineSegDb.js";
import CurveDb from "../components/curve/curveDb.js";
export default class CompFactory {
    constructor(linker) {
        this.linker = linker;
    }
    curve(startX, startY, midX, midY, endX, endY, color = "black") {
        let g = new CurveDb(this.linker, startX, startY, midX, midY, endX, endY, color);
        this.linker.push(g);
        return g;
    }
    arrow(x1, y1, x2, y2, color = "black") {
        let g = new ArrowDb(this.linker, x1, y1, x2, y2, color);
        this.linker.push(g);
        return g;
    }
    canvasBorder(color = "grey", width = 0.25) {
        let g = new CanvasBorderDb(this.linker, color, width);
        this.linker.push(g);
        return g;
    }
    fillRect(color = "#000000") {
        let g = new FillRectDB(this.linker, color);
        this.linker.push(g);
        return g;
    }
    particleSystem(count = 20, color = "#008000", delay = 50) {
        let g = new ParticleSystemDB(this.linker, count, color, delay);
        this.linker.push(g);
        return g;
    }
    rect(color = "#000000") {
        let g = new RectDB(this.linker, color);
        this.linker.push(g);
        return g;
    }
    text(content, color = "#000000") {
        let g = new TextDB(this.linker, content, color);
        this.linker.push(g);
        return g;
    }
    grid(color = "grey", cellWidth = 10, cellHeight = 10) {
        let g = new GridDb(this.linker, color, cellWidth, cellHeight);
        this.linker.push(g);
        return g;
    }
    circle(radius = 5, color = "black") {
        let g = new CircleDb(this.linker, radius, color);
        this.linker.push(g);
        return g;
    }
    marker(x, y, color = "red", radius = 1) {
        let g = new MarkerDb(this.linker, x, y, color, radius);
        this.linker.push(g);
        return g;
    }
    line(x1, y1, x2, y2, color = "black") {
        let g = new LineDb(this.linker, x1, y1, x2, y2, color);
        this.linker.push(g);
        return g;
    }
    lineSeg(x, y, hue_0_360 = 0, lineWidth = 4) {
        let g = new LineSegDb(this.linker, x, y, hue_0_360, lineWidth);
        this.linker.push(g);
        return g;
    }
    pic(imgUrl, width = 25, height = 25) {
        let g = new PicDb(this.linker, imgUrl, width, height);
        this.linker.push(g);
        return g;
    }
}
