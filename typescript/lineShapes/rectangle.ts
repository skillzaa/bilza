import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";
//-dont pass color here pass it to linesDb
export default function rectangle (lines :ILines,
    lineWidth :number = 4
    ):ILines{

    lines.setxy(0);
    lines.width.set(40);
    lines.height.set(40);
    //--------------------------------
    lines.seg(0,0,lineWidth)

    .add(100,0) //top
    .add(100,100)
    .add(0,100)
    .add(0,0)
    .save();
    //----------------------------------------
return lines;
}