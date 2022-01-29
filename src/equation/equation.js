import State from "../design/state.js";
import SegFactory from "../design/segFactory.js";
export default class Equation {
    constructor(ctx) {
        this.segments = [];
        this.state = new State(ctx);
        this.segments = [];
        this.segment_gap = 2;
        this.lat_width = 0;
        this.lat_height = 0;
        this.segFactory = new SegFactory(this.state, this.add_new_segment.bind(this));
    }
    add_seg() {
        return this.segFactory;
    }
    draw(startX, startY) {
        let x = startX;
        let y = startY;
        for (let i = 0; i < this.segments.length; i++) {
            //----load next seg to state
            this.state.load_current_seg(this.segments[i].width(), this.segments[i].height());
            //----draw operation
            let tf = this.segments[i].draw(x, y);
            //--there may be control segments which may not move the x in that case dont add gap
            if (this.segments[i].width() > 0) {
                x += (this.segments[i].width() + this.segment_gap);
            }
        }
        return true;
    }
    //=====================
    width() {
        return this.lat_width;
    }
    height() {
        return this.lat_height;
    }
    //--function arguments shd be concrete data types and not classes / objects unless required absoliutely.
    //--so a lat machine can always get segments from outside as long as they complyby IDrawable interface
    add_new_segment(segment) {
        this.lat_width += segment.width();
        if (segment.height() > this.lat_height) {
            this.lat_height = segment.height();
        }
        this.segments.push(segment);
        return segment;
    }
} //ends
