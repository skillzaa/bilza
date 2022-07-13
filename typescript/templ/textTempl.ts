
import Text from "../components/text.js";

export default class TextTempl {

static hdg(content :string="",colorHax :string="#008000",width :number=30 ,maxHeight :number=20,padding :number=12) {
let g = new Text(content,colorHax);

// g.useMaxHeight = true;
g.paddingLeft.set (padding);
g.paddingRight.set(padding);
g.paddingTop.set(padding);
g.paddingBottom.set(padding);
g.maxHeight = maxHeight;
g.width.set(width);
g.showBackground.set(true);
g.border.set(2);
return g;    
}


}