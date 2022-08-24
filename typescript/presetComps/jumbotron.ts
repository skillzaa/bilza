import {IComponent } from "../bilza.js";

import Text from "../components/text.js";

export default function jumbotron(startFrame :number=1,endFrame :number=2, content :string="Jumbotron",colorHax :string = "#000000"):IComponent{
    const jt = new Text(content,colorHax);
    jt.width.set(90);
    // jt.goto(0,50,jt.offScreenYOpt.YTop,jt.xAlign.Mid,jt.yAlign.Mid);

    return jt;
}
//------------------------------

