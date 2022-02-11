import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
import Xy from "./design/xy.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component  implements IDrawable {
public drawLayer : DrawLayer; 
public frameStart :number;   
public frameEnd :number;
private xy:Xy;   
constructor (){
this.xy = new Xy();
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

/**
 * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
 */
update(frame: number, p: Pack): boolean {
return true;    
}

protected xPerc(n :number , p :Pack):number{
let xy = new Xy();
return xy.X(n,this.width(p),p.canvasWidth());
}

protected yPerc(n :number , p :Pack):number{
    let xy = new Xy();
return xy.X(n,this.width(p),p.canvasWidth());
}

}