import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
export default class Component implements IDrawable {

drawLayer : DrawLayer;    
constructor (){
this.drawLayer = DrawLayer.MiddleGround;
}
width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}
draw(p: Pack, startingX: number, startingY: number): boolean {
    return true;
}
}