import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import CtxData from "../design/ctxData.js";
import TransitionData from "../design/transitionData.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";

export default class Component implements IDrawable {
drawLayer : DrawLayer; 
public ctxData :CtxData;
public transitions :TransitionData[];
public frameStart :number;   
public frameEnd :number;   

constructor (){
this.drawLayer = DrawLayer.MiddleGround;
this.transitions = [];
//****************************8 */
this.ctxData = ctxDefaultInit();
//****************************8 */
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
addTransition(frame :number=0):TransitionData{
let sa = new TransitionData(frame);    
this.transitions.push(sa);
return sa;
}
}