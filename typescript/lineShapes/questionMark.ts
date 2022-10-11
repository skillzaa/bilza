import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";

export default function questionMark (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{
//---I can get lineWidth , filled , closed etc

//--step-01--its defaultbut just to be safe        
lineSeg.setWdHt(10,20);
lineSeg.lineWidth = 15;

lineSeg.startX = 15;
lineSeg.startY = 20;
//--step-02 --set default width and height
//--step-03--the vertices
lineSeg.lineTo( 15 , 10 );

lineSeg.lineTo( 95 , 10);

lineSeg.lineTo( 95 , 50);
lineSeg.lineTo( 30 , 50);
lineSeg.lineTo( 30 , 70);

lineSeg.moveTo( 30 , 90);
lineSeg.lineTo( 30 , 94);
        
        
//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(false);

// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}