import { Component } from "../../bilzaa2d/index.js";
export default class Clip extends Component {
    constructor() {
        super();
        this.comps = [];
    }
    add(comp) {
        this.comps.push(comp);
        return comp;
    }
    width(p) {
        return 100;
    }
    height(p) {
        return 100;
    }
    draw(p) {
        this.comps.forEach(comp => comp.draw(p));
        return true;
    }
    update(frame, p) {
        // this.comps.forEach( comp => comp.draw(p));  
        // this.compData.apply(frame); //--important!!
        return true;
    }
}
