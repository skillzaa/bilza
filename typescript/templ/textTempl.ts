import Text from "../components/text.js";

export default class TextTempl {

static h1(content :string="",colorHax :string="#008000",x:number=0,y:number =0,dynWidth :number=30){
let g = new Text(content,colorHax,x,y,dynWidth);
g.showBg = true;

return g;    
}


}