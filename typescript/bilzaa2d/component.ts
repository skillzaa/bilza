import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
import {XAlignment,YAlignment} from "./design/alignment.js";
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
// brilent do not send frame in draw args just send frame in update-
draw(p: Pack): boolean {
    return true;
}
update(frame: number, p: Pack): boolean {
return true;    
}
moveX(x :number, p: Pack, xAlign :XAlignment = XAlignment.Mid){
switch (xAlign) {
    case XAlignment.Left:
        return x;
    break;
    case XAlignment.Right:
        return x - (this.width(p));
    break;
    case XAlignment.Mid:
        return x - (this.width(p)/2);
    break;
    default:
        return x;
        break;
}
}
moveY(y :number, p: Pack, yAlign :YAlignment = YAlignment.Bottom){
switch (yAlign) {
    case YAlignment.Bottom:
        return y;
    break;
    case YAlignment.Top:
        return y - (this.height(p));
    break;
    case YAlignment.Mid:
        return y - (this.height(p)/2);
    break;
    default:
        return y;
        break;
}
}
}