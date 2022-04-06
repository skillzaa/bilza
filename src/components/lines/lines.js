import { Component } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import Vertex from "./Vertex.js";
export default class Lines extends Component {
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
        p.commitCtxData(this.style);
        p.ctx.beginPath();
        if (this.d.responsive == true) {
            p.ctx.moveTo(p.xPerc(this.moveTo.x), p.yPerc(this.moveTo.y));
        }
        else {
            p.ctx.moveTo((this.moveTo.x), (this.moveTo.y));
        }
        for (let i = 0; i < this.vertices.length; i++) {
            const pos = this.vertices[i];
            if (this.d.responsive == true) {
                p.ctx.lineTo(p.xPerc(pos.x), p.yPerc(pos.y));
            }
            else {
                p.ctx.lineTo((pos.x), (pos.y));
            }
        }
        p.ctx.closePath();
        if (this.d.flagFilled == true) {
            p.ctx.fill();
        }
        else {
            p.ctx.stroke();
        }
        return true;
    }
    add(x = 0, y = 0) {
        let v = new Vertex(x, y);
        this.vertices.push(v);
    }
}
