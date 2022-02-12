import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component  implements IDrawable {
public drawLayer : DrawLayer; 
public frameStart :number;   
public frameEnd :number;
constructor (){
this.drawLayer = DrawLayer.MiddleGround;
this.frameStart = 0; //component startand end frames
this.frameEnd = 3000;
}
width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}
draw(p: Pack): boolean {
    return true;
}
update(frame: number, p: Pack): boolean {
return true;    
}

}