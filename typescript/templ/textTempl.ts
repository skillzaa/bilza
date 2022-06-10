import {OffScreenYOpt,XAlignment,YAlignment} from "../Bilza.js";
import Text from "../components/text/text.js";

export default class TextTempl {

static TinHdg(content :string="",colorHax :string="#008000", fromSec :number=0,toSec:number=4,x:number=0,yUpto:number= 3, dynWidth :number=30 ,maxHeight :number=20,padding :number=12) {
let g = new Text(content,colorHax);
g.useDynWidth = true;
g.useMaxHeight = true;
g.paddingLeft.setValue(padding);
g.paddingRight.setValue(padding);
g.paddingTop.setValue(padding);
g.paddingBottom.setValue(padding);
g.maxHeight = maxHeight;
g.dynWidth.setValue(dynWidth);
g.showBg = true;
g.border.setValue(2);
g.goto(0,x,OffScreenYOpt.YTop,XAlignment.Mid,YAlignment.Top);    
g.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,yUpto,XAlignment.Mid,XAlignment.Mid);
return g;    
}


}