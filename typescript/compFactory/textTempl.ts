import Text from "../components/text-dynamicFontSize.js";


export default class TextTempl {

constructor(){
    
}

static megatron(content :string="",colorHax :string="#000000"):Text{
    let g = new Text(content,colorHax);
    g.xAlign = g.XAlignOpt.Mid;
    g.yAlign = g.YAlignOpt.Mid;
    g.showBackground.set(true);
    g.border.set(3);
    g.colorBorder.set(colorHax);
    g.paddingLeft.set(2);
    g.paddingRight.set(2);
    g.paddingTop.set(2);
    g.paddingBottom.set(2);
    g.x.set(50);
    g.y.set(50);
    g.width.set(80);
    return g;    
}
static welcome(content :string="",colorHax :string="#000000"):Text{
    let g = new Text(content,colorHax);
    g.xAlign = g.XAlignOpt.Mid;
    g.yAlign = g.YAlignOpt.Mid;
    g.showBackground.set(true);
    g.border.set(3);
    g.colorBorder.set(colorHax);
    g.paddingLeft.set(2);
    g.paddingRight.set(2);
    g.paddingTop.set(8);
    g.paddingBottom.set(8);
    g.x.set(50);
    g.y.set(50);
    g.width.set(50);
    return g;    
}
static h1(content :string="",colorHax :string="#000000"):Text{
    let g = new Text(content,colorHax);
    g.xAlign = g.XAlignOpt.Mid;
    g.yAlign = g.YAlignOpt.Top;

    g.showBackground.set(true);
    g.border.set(1);
    g.colorBorder.set(colorHax);
    g.paddingLeft.set(0);
    g.paddingRight.set(0);
    g.paddingTop.set(0);
    g.paddingBottom.set(0);
    g.x.set(50);
    g.y.set(2);
    g.height.set(15);
    g.width.set(60);
    return g;    
}
static footNote(content :string="",colorHax :string="#000000"):Text{
    let g = new Text(content,colorHax);
    g.xAlign = g.XAlignOpt.Right;
    g.yAlign = g.YAlignOpt.Bot;
    g.showBackground.set(true);
    g.border.set(1);
    g.colorBorder.set(colorHax);
    g.paddingLeft.set(0);
    g.paddingRight.set(0);
    g.paddingTop.set(0);
    g.paddingBottom.set(0);
    g.x.set(98);
    g.y.set(98);
    g.height.set(15);
    g.width.set(10);
    return g;    
}





}