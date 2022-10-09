import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";

export default function triangle (lines :ILines):ILines{

    lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    //--------------------------------
    lines.seg(0,75,15)
    .add(100,75)
    .add(50,0)
    .add(0,75)
    .save();
return lines;
}