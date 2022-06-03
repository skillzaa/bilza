import Bilza, {TextTempl, CompFactory as cf } from "../Bilza.js";


export default function firstClip (){
    
    //---The heading
    let hdg = cf.text("Main Heading","#008000");
    // let hdg = TextTempl.h1("Main Heading","#008000",50,50);
    hdg.showBg = true;
    hdg.border = 5;
    hdg.colorBorder = "yellow";
    hdg.colorBg = "#008000";
    hdg.color = "#ff0000";
    
    // hdg.loc.goto(0,50,OffScreenYOpt.YTop,XAlignment.Mid);
    hdg.loc.goto(0,0,0);
    // hdg.loc.animate(0,1,50,50,OffScreenYOpt.YTop,3);
    hdg.duration = 10;
    
return hdg;
}