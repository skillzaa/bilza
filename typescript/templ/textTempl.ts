import Text from "../components/text.js";

export default class TextTempl {

static h1( content :string="",colorHax :string="#008000", dynWidth :number=30 ) {
let g = new Text(content,colorHax,dynWidth);
g.showBg = true;

return g;    
}


}