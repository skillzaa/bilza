import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";


export default function rectangle (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{
//---I can get lineWidth , filled , closed etc

//--step-01--its defaultbut just to be safe        
lineSeg.startX = 0;
lineSeg.startY = 0;

//--step-02 --set default width and height
lineSeg.setWdHt(20,20);

//--step-03--the vertices
lineSeg.add(100,0);
lineSeg.add(100,100);
lineSeg.add(0,100);
lineSeg.add(0,0);
        
        
//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(filled);
//--step-06--set closed--totally creator decision no need for giving it to user--better to draw closing line ur self
// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}