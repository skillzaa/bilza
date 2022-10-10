import ILines from "../components/lines/ILines.js";
import { hsl } from "../bilza.js";
/**
 * Use seg for close shapes and lines for open lines
 */
export default function tickRight (
    lines :ILines,
    hue_0_360 : number = 360,
    filled :boolean=true, 
    lineWidth :number = 4
    ):ILines{

    lines.width.set(10);
    lines.height.set(25);
    //--------------------------------
    lines.add(0,80,20,100,hsl(hue_0_360),lineWidth);
    lines.add(20,100,100,0,hsl(hue_0_360),lineWidth);
return lines;
}