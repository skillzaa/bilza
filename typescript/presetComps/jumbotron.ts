import Bilza, {IComponent, CompFactory as cf } from "../Bilza.js";

export default function jumbotron(startFrame :number=1,endFrame :number=2, content :string="Jumbotron",colorHax :string = "#000000"):IComponent{
    const jt = cf.text(content,colorHax);
    jt.dynWidth.setValue(90);
    jt.goto(0,50,jt.offScreenYOpt.YTop,jt.xAlign.Mid,jt.yAlign.Mid);

jt.animate(
    startFrame,endFrame,                            //--frames
    50,50,                          // x from and to
    jt.offScreenYOpt.YTop,50,
    jt.xAlign.Mid,jt.xAlign.Mid,
    jt.yAlign.Mid,jt.yAlign.Mid
);

    return jt;
}
//------------------------------

