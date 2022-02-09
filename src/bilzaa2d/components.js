// import BaseComp from "../component/baseComp.js";
import Grid from "../corecomps/grid/grid.js";
import Text from "../corecomps/text/text.js";
export default class Components {
    constructor(comps) {
        this.comps = comps;
    }
    addText(content) {
        let t = new Text(content);
        this.comps.push(t);
        return t;
    }
    addGrid() {
        let g = new Grid();
        this.comps.push(g);
        return g;
    }
}
