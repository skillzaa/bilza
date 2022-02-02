// import BaseComp from "../component/baseComp.js";
// import Grid from "../corecomps/grid.js";
import Text from "../corecomps/text.js";
export default class Components {
    constructor(comps) {
        this.comps = comps;
    }
    addText(content) {
        let t = new Text(0, content, 100, 100);
        this.comps.push(t);
        return t;
    }
}
