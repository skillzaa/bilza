import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";

export default function tickRight (lines :ILines,
    lineWidth :number = 4
    ):ILines{

    lines.setxy(0);
    lines.width.set(10);
    lines.height.set(25);
    //--------------------------------
    // lines.add(0,0,100,100,lineWidth);
    // lines.add(0,100,100,0,lineWidth);
    lines.seg(0,80,lineWidth)
    .add(20,100)
    .add(100,0)
    .save();
return lines;
}