import {IComponent, CompFactory as cf } from "../Bilza.js";

export default function topInHdg(startFrame :number=1,endFrame :number=2, content :string="Top In Heading",colorHax :string = "#000000",yUpto :number = 2):IComponent{
    const jt = cf.text(content,colorHax);
    jt.dynWidth.setValue(80);
    
    jt.goto(0,50,jt.offScreenYOpt.YTop,jt.xAlign.Mid,jt.yAlign.Top);
    jt.border.setValue(2);
jt.animate(
    startFrame,endFrame,    
    50,50, //x                  
    jt.offScreenYOpt.YTop,yUpto,
    jt.xAlign.Mid,jt.xAlign.Mid,
    jt.yAlign.Top,jt.yAlign.Top
    );
    return jt;
}
//------------------------------

