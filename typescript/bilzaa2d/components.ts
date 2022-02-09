// import BaseComp from "../component/baseComp.js";
import Grid from "../corecomps/grid/grid.js";
import Text from "../corecomps/text/text.js";
import IDrawable from "./design/IDrawable.js";

export default class Components {
    private comps:IDrawable[];    
constructor(comps:IDrawable[]){
this.comps = comps;    
}    
addText(content :string):Text{
    let t = new Text(content);
    this.comps.push(t);
    return t;
}
addGrid():Grid{
    let g = new Grid();
    this.comps.push(g);
    return g;
}

}