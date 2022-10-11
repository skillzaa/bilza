import ILineSeg from "../components/lineSeg/ILineSeg.js";
import { hsl } from "../bilza.js";


export default function graphInc (
    lineSeg :ILineSeg,
    filled :boolean=false
    ):ILineSeg{

//--step-02 --set default width and height
lineSeg.setWdHt(20,20);
//--step-01--its defaultbut just to be safe        
lineSeg.startX = 50;
lineSeg.startY = 5;

//--step-03--the vertices
lineSeg.lineTo( 90, 90 ); 
lineSeg.lineTo( 5 , 90 );
lineSeg.lineTo( 50, 5 );



//--step-04--seg other settings
lineSeg.setLineJoin("round");
//--step-05--we can decide to use user send filled or not
lineSeg.setFilled(filled);

// lineSeg.setClosed(true);

//----------------------------------------
return lineSeg;
}
