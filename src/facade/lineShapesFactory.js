import LineSegDb from "../components/lineSeg/lineSegDb.js";
import starOfDavid from "../lineShapes/starOfDavid.js";
import triangle from "../lineShapes/triangle.js";
import cross from "../lineShapes/cross.js";
import tickRight from "../lineShapes/tickRight.js";
import tickLeft from "../lineShapes/tickLeft.js";
import graphInc from "../lineShapes/graphInc.js";
import rectangle from "../lineShapes/rectangle.js";
import exclamationMark from "../lineShapes/exclamationMark.js";
import rightTriangle from "../lineShapes/rightTriangle.js";
import questionMark from "../lineShapes/questionMark.js";
import arrow from "../lineShapes/arrow.js";
import home from "../lineShapes/home.js";
export default class CompFactory {
    constructor(linker) {
        this.linker = linker;
    }
    triangle(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        triangle(g, filled);
        return g;
    }
    questionMark(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        questionMark(g, filled);
        return g;
    }
    arrow(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        arrow(g, filled);
        return g;
    }
    home(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        home(g, filled);
        return g;
    }
    exclamationMark(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        exclamationMark(g, filled);
        return g;
    }
    rectangle(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        rectangle(g, filled);
        return g;
    }
    rightTriangle(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        rightTriangle(g, filled);
        return g;
    }
    tickLeft(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        tickLeft(g, filled);
        return g;
    }
    tickRight(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        tickRight(g, filled);
        return g;
    }
    graphInc(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        graphInc(g, filled);
        return g;
    }
    cross(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        cross(g, false);
        return g;
    }
    starOfDavid(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.linker, 0, 0, hue_0_360, lineWidth);
        this.linker.push(g);
        starOfDavid(g, filled);
        return g;
    }
}
