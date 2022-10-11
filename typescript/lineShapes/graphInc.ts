import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";


export default function graphInc (
    lineSeg :ILineSeg,
    filled :boolean=false
    ):ILineSeg{

//--step-02 --set default width and height
lineSeg.setWdHt(30,20);
//--step-01--its defaultbut just to be safe        
lineSeg.startX = 2;
lineSeg.startY = 90;

//--step-03--the vertices
lineSeg.lineTo(30,50); 
lineSeg.lineTo(30,85);
lineSeg.lineTo(60,30);
lineSeg.lineTo(60,70);
lineSeg.lineTo(95,5);


lineSeg.moveTo(0,0);
lineSeg.lineTo(0,95);
lineSeg.lineTo( 95 , 95 );

//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(false);

// lineSeg.setClosed(true);

//----------------------------------------
return lineSeg;
}
