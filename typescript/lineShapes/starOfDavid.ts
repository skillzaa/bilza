import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";


export default function starOfDavid (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{

//---I can get lineWidth , filled , closed etc
//--step-01--its defaultbut just to be safe        
lineSeg.startX = 0;
lineSeg.startY = 75;

//--step-02 --set default width and height
lineSeg.setWdHt(20,35);

//--step-03--the vertices
lineSeg.lineTo(100,75);
lineSeg.lineTo(50,0);
lineSeg.lineTo(0,75);

//---fill
lineSeg.fill();
////--move to 
lineSeg.moveTo(0,25);

lineSeg.lineTo(100,25);
lineSeg.lineTo(50,100);
lineSeg.lineTo(0,25) ;

//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(filled);
//--step-06--set closed--totally creator decision no need for giving it to user--better to draw closing line ur self
// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}