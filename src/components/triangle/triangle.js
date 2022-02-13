import { Component, Style, Transition } from "../../bilzaa2d/index.js";
import DataFn from "./DataFn.js";
export default class Triangle extends Component {
    constructor() {
        super();
        this.d = new Transition(DataFn);
        this.styleLine = new Style();
        this.styleVertexMarker = new Style();
    }
    width(p) {
        return 100;
    }
    height(p) {
        return 200;
    }
    draw(p) {
        //--draw line AB
        this.styleLine.strokeStyle = this.d.data.lineColorAB;
        this.styleLine.lineWidth = this.d.data.lineWidthAB;
        p.drawLine(this.d.data.a.x, this.d.data.a.y, this.d.data.b.x, this.d.data.b.y, this.styleLine);
        //--draw line BC  
        this.styleLine.strokeStyle = this.d.data.lineColorBC;
        this.styleLine.lineWidth = this.d.data.lineWidthBC;
        p.drawLine(this.d.data.b.x, this.d.data.b.y, this.d.data.c.x, this.d.data.c.y, this.styleLine);
        //--draw line CA    
        this.styleLine.strokeStyle = this.d.data.lineColorCA;
        this.styleLine.lineWidth = this.d.data.lineWidthCA;
        p.drawLine(this.d.data.c.x, this.d.data.c.y, this.d.data.a.x, this.d.data.a.y, this.styleLine);
        //--vertex markerS 
        if (this.d.data.showVertexMarker == true) {
            this.drawVertexMarkers(p);
        }
        return true;
    }
    drawVertexMarkers(p) {
        this.drawVertexMarker(p, this.d.data.a, this.d.data.vertexMarkerAColor);
        //--vertex marker B
        this.drawVertexMarker(p, this.d.data.b, this.d.data.vertexMarkerBColor);
        //--vertex marker C
        this.drawVertexMarker(p, this.d.data.c, this.d.data.vertexMarkerCColor);
    }
    drawVertexMarker(p, pos, color) {
        this.styleVertexMarker.lineWidth = 0;
        // this.styleVertexMarker.fillStyle = this.d.data.vertexMarkerAColor;
        this.styleVertexMarker.fillStyle = color;
        this.styleVertexMarker.strokeStyle = color;
        p.drawCircle(pos.x - 6, pos.y - 6, 8, true, this.styleVertexMarker);
    }
    update(frame, p) {
        this.d.apply(frame); //--important!!
        return true;
    }
}
