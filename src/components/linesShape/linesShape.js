import { Component } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Vertex from "./Vertex.js";
export default class LinesShape extends Component {
    constructor(x = 0, y = 0) {
        super(DataFn);
        this.moveTo = new Vertex(x, y);
        this.vertices = [];
    }
    draw(p) {
        if (this.vertices.length < 2) {
            console.warn("Lines component needs atleast 3 pair of vertices");
            return false;
        }
        p.beginPath();
        p.moveTo(p.xPerc(this.moveTo.x), p.yPerc(this.moveTo.y));
        for (let i = 0; i < this.vertices.length; i++) {
            const pos = this.vertices[i];
            p.lineTo(p.xPerc(pos.x), p.yPerc(pos.y), this.style);
        }
        p.closePath();
        if (this.d.flagFilled == true) {
            p.fill(this.style);
        }
        else {
            p.stroke();
        }
        return true;
    }
    add(x = 0, y = 0) {
        let v = new Vertex(x, y);
        this.vertices.push(v);
    }
}
