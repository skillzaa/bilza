import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";

export default function graphInc (lines :ILines,
    lineWidth :number = 2
    ):ILines{

    lines.setxy(0);
    lines.width.set(60);
    lines.height.set(40);
    lines.showBackground.set(true);
    //--------------------------------
    // lines.add(0,0,100,100,lineWidth);
    // lines.add(0,100,100,0,lineWidth);
    lines.seg(
    0,100,lineWidth)
    .add(33,55)
    
    .add(33,90) //drop

    .add(66,33) // rise 
    .add(66,66)

    .add(99,0)
    
    .save();
return lines;
}