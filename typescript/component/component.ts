import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import Templ from "../design/templ.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";

export default class Component implements IDrawable {
drawLayer : DrawLayer; 
public templ :Templ; //thestarting ctx that merge with transistion ctx
public transitions :Templ[];
public frameStart :number;   
public frameEnd :number;   

constructor (){
this.drawLayer = DrawLayer.MiddleGround;
this.transitions = [];
//****************************8 */
this.templ = ctxDefaultInit();
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

newTransition(frame :number=0):Templ{
let sa = new Templ(frame);    
this.transitions.push(sa);
return sa;
}
addTransition(sa :Templ):boolean{
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
 * Takes the current frame and apply transitions (actually templ objects) and merge with components templ.
 */
applyTransitons(frame :number){
for (let i = this.transitions.length -1; i >= 0; i--) {
    const trctxData = this.transitions[i];
    if(trctxData.startFrame < frame ){
        this.templ.merge(trctxData);
        this.transitions.splice(i,1);
    }
}
}
}