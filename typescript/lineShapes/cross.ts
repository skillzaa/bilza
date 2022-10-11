import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";


export default function cross (
    lineSeg :ILineSeg,
    filled :boolean=false
    ):ILineSeg{

//---I can get lineWidth , filled , closed etc
//--step-01--its defaultbut just to be safe        
lineSeg.startX = 5;
lineSeg.startY = 5;
//--step-02 --set default width and height
lineSeg.setWdHt(20,30);

//--step-03--the vertices
// lines.add(0,0,100,100,hsl(hue_0_360),lineWidth);
// lines.add(0,100,100,0,hsl(hue_0_360),lineWidth);

lineSeg.lineTo(95,95);
lineSeg.moveTo(5,95);
lineSeg.lineTo(95,5);



//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(false);
//--step-06--set closed--totally creator decision no need for giving it to user--better to draw closing line ur self
// lineSeg.setClosed(true);

//----------------------------------------
return lineSeg;
}

