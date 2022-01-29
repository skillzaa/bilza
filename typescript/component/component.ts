import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";

export default class Component implements IDrawable {
drawLayer : DrawLayer; 
public frameStart :number;   
public frameEnd :number;   
x :number;   
y :number;   

constructor (){
this.drawLayer = DrawLayer.MiddleGround;
this.x = 0;
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
}