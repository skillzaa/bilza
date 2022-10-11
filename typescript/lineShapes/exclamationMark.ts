import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";

export default function exclamationMark (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{
//---I can get lineWidth , filled , closed etc

//--step-01--its defaultbut just to be safe        
lineSeg.startX = 50;
lineSeg.startY = 5;
lineSeg.lineWidth = 15;
//--step-02 --set default width and height
lineSeg.setWdHt(10,20);

//--step-03--the vertices
lineSeg.lineTo(50,65);

lineSeg.moveTo(50,85);
lineSeg.lineTo(50,93);
        
        
//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(false);

// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}