// import BaseComp from "../component/baseComp.js";
import Grid from "../corecomps/grid/grid.js";
export default class Components {
    constructor(comps) {
        this.comps = comps;
    }
    // addText(content :string):Text{
    //     let t = new Text(content);
    //     this.comps.push(t);
    //     return t;
    // }
    addGrid() {
        let g = new Grid();
        this.comps.push(g);
        return g;
    }
}
