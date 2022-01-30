import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import AniCtxData from "./aniCtxData.js";

export default class Component implements IDrawable {
drawLayer : DrawLayer; 
protected animations :any[];
public frameStart :number;   
public frameEnd :number;   
x :number;   
y :number;   

constructor (){
this.drawLayer = DrawLayer.MiddleGround;
this.x = 0;
this.animations = [];
this.y = 0;
this.frameStart = 0;
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
addAnimation(frame :number=0):AniCtxData{
let sa = new AniCtxData(frame);    
this.animations.push(sa);
return sa;
}
}