import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import CtxData from "../design/ctxData.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";

export default class Component implements IDrawable {
drawLayer : DrawLayer; 
public ctxData :CtxData; //thestarting ctx that merge with transistion ctx
public transitions :CtxData[];
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

newTransition(frame :number=0):CtxData{
let sa = new CtxData(frame);    
this.transitions.push(sa);
return sa;
}
addTransition(sa :CtxData):boolean{
this.transitions.push(sa);
return true;
}
/**
 * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super or apply transitions your self.
 */
update(frame: number, p: Pack): boolean {
this.applyTransitons(frame);
return true;    
}
/**
 * Takes the current frame and apply transitions (actually ctxData objects) and merge with components ctxData.
 */
applyTransitons(frame :number){
for (let i = this.transitions.length -1; i >= 0; i--) {
    const trctxData = this.transitions[i];
    if(trctxData.startFrame < frame ){
        this.ctxData.merge(trctxData);
        this.transitions.splice(i,1);
    }
}
}
}