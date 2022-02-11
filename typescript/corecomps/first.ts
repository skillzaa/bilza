
import BaseComp from "../bilzaa2d/component.js";
import pack from "../bilzaa2d/pack/pack.js";

export default class First extends BaseComp {
constructor(){
super();    
}

draw(p: pack): boolean {
    
    p.drawText("aaaaa",100,100,this.style);
    return true;
}
}