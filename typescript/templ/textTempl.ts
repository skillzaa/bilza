import Text from "../components/text/text.js";

export default class TextTempl {

static h1( content :string="",colorHax :string="#008000", dynWidth :number=30 ) {
let g = new Text(content,colorHax);
g.showBg = true;

return g;    
}


}