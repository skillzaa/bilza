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
        let g = new CurveDb(this.linker.startTime(), this.linker.endTime(), this.linker.insertAction(), this.linker.canvasWidth(), this.linker.canvasHeight(), startX, startY, midX, midY, endX, endY, color);
        this.linker.push(g);
        return g;
    }
    arrow(x1, y1, x2, y2, color = "black") {
        let g = new ArrowDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, x1, y1, x2, y2, color);
        this.comps.push(g);
        return g;
    }
    canvasBorder(color = "grey", width = 0.25) {
        let g = new CanvasBorderDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color, width);
        this.comps.push(g);
        return g;
    }
    fillRect(color = "#000000") {
        let g = new FillRectDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        return g;
    }
    particleSystem(count = 20, color = "#008000", delay = 50) {
        let g = new ParticleSystemDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, count, color, delay);
        this.comps.push(g);
        return g;
    }
    rect(color = "#000000") {
        let g = new RectDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        return g;
    }
    text(content, color = "#000000") {
        let g = new TextDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, this.charsWidth, content, color);
        this.comps.push(g);
        return g;
    }
    grid(color = "grey", cellWidth = 10, cellHeight = 10) {
        let g = new GridDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color, cellWidth, cellHeight);
        this.comps.push(g);
        return g;
    }
    circle(radius = 5, color = "black") {
        let g = new CircleDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, radius, color);
        this.comps.push(g);
        return g;
    }
    marker(x, y, color = "red", radius = 1) {
        let g = new MarkerDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, x, y, color, radius);
        this.comps.push(g);
        return g;
    }
    line(x1, y1, x2, y2, color = "black") {
        let g = new LineDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, x1, y1, x2, y2, color);
        this.comps.push(g);
        return g;
    }
    lineSeg(x, y, hue_0_360 = 0, lineWidth = 4) {
        let g = new LineSegDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, x, y, hue_0_360, lineWidth);
        this.comps.push(g);
        return g;
    }
    pic(imgUrl, width = 25, height = 25) {
        let g = new PicDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, imgUrl, width, height);
        this.comps.push(g);
        return g;
    }
}
