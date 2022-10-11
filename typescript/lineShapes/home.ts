import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";

export default function home (
    lineSeg :ILineSeg,
    filled :boolean
    ):ILineSeg{
//---I can get lineWidth , filled , closed etc

//--step-01--its defaultbut just to be safe        
lineSeg.setWdHt(30,30);

lineSeg.lineWidth = 10;

lineSeg.startX = 50;
lineSeg.startY = 5;
//--step-02 --set default width and height
//--step-03--the vertices
lineSeg.lineTo( 5     , 40 );

lineSeg.lineTo( 95 , 40);
lineSeg.lineTo( 50 , 5);
/////////////////////////////////
lineSeg.moveTo( 20 , 40);

lineSeg.lineTo( 80 , 40);
lineSeg.lineTo( 80 , 90);
lineSeg.lineTo( 20 , 90);
lineSeg.lineTo( 20 , 40);

        
        
//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(filled);

// lineSeg.setClosed(true);
        
    //----------------------------------------
return lineSeg;
}