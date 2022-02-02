
import BaseComp from "../component/baseComp.js";
import pack from "../pack/pack.js";

export default class First extends BaseComp {
constructor(){
super();    
}

draw(p: pack): boolean {
    p.ctx.drawText("aaaaa",100,100,this.style);
    return true;
}
}