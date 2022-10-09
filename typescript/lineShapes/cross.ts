import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";

export default function cross (
    lines :ILines,
    hue_0_360 : number = 360,
    filled :boolean=true, 
    lineWidth :number = 4
    ):ILines{

    // lines.setxy(0);
    lines.width.set(20);
    lines.height.set(35);
    //--------------------------------
    lines.add(0,0,100,100,hsl(hue_0_360),lineWidth);
    lines.add(0,100,100,0,hsl(hue_0_360),lineWidth);
return lines;
}