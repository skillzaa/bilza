import {IComponent, CompFactory as cf } from "../Bilza.js";

export default function bulletPoint(startFrame :number = 1,endFrame :number = 2, content :string = "bulletPoint",colorHax :string = "#000000" ,y :number = 5):IComponent{
    
const jt = cf.text(content,colorHax);

jt.dynWidth.setValue(80);

jt.maxHeight = 10;    

jt.goto(0,jt.offScreenXOpt.XLeft,y,jt.xAlign.Left,jt.yAlign.Top);

jt.border.setValue(0);

jt.animate(
    startFrame,endFrame,    
    jt.offScreenXOpt.XLeft,50, //x                  
    y,y,
    jt.xAlign.Mid,jt.xAlign.Mid,
    jt.yAlign.Top,jt.yAlign.Top
    );
    return jt;
}
//------------------------------

