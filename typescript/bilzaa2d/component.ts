import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
import Style from "./style/style.js";
import Xy from "./design/xy.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component  implements IDrawable {
public drawLayer : DrawLayer; 
public style :Style; 
public styleTransitions :Style[];
public frameStart :number;   
public frameEnd :number;
public xy:Xy;   
constructor (style = new Style()){
this.xy = new Xy();
this.drawLayer = DrawLayer.MiddleGround;
/*****************************/
this.style = style;
this.styleTransitions = [];
//**************************** */
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

newStyleTransition(frame :number=0):Style{
let sa = new Style(frame);    
this.styleTransitions.push(sa);
return sa;
}

addStyleTransition(sa :Style):boolean{
this.styleTransitions.push(sa);
return true;
}
/**
 * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
 */
update(frame: number, p: Pack): boolean {
this.applyStyleTransitons(frame); //--important!!
// this.applyDataTransitons(frame); //--important!!
return true;    
}

applyStyleTransitons(frame :number){
for (let i = this.styleTransitions.length -1; i >= 0; i--) {
    const trctxData = this.styleTransitions[i];
    if(trctxData.frameStart < frame ){
        this.style.merge(trctxData);
        this.styleTransitions.splice(i,1);
    }
}
}
applyDataTransitons(frame :number){
//--- every comp must fill this   
}

xPerc(n :number , p :Pack):number{
let xy = new Xy();
return xy.X(n,this.width(p),p.canvasWidth());
}

yPerc(n :number , p :Pack):number{
    let xy = new Xy();
return xy.X(n,this.width(p),p.canvasWidth());
}

}