import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";

export default function arrow (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{
//---I can get lineWidth , filled , closed etc

//--step-01--its defaultbut just to be safe        
lineSeg.setWdHt(30,20);

lineSeg.lineWidth = 10;

lineSeg.startX = 5;
lineSeg.startY = 50;
//--step-02 --set default width and height
//--step-03--the vertices
lineSeg.lineTo( 95 , 50 );

lineSeg.lineTo( 50 , 25);

lineSeg.moveTo( 95 , 50);
lineSeg.lineTo( 50 , 75);

        
        
//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(false);

// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}