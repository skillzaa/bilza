import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function h1bp3 ( startTime :number,endTime :number, hslColorNo :number ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    const txt = cf.text("Test Scene",hsl(0));
    // txt.setTimings(2,endTime);
    scene.add(txt,1,1); // this makes scene min-duration = 4
    
    txt.templ.jumbotron();
    // txt.templ.h1();
    txt.theme.color(240);
    txt.entryAni.fadeIn();
    txt.exitAni.fadeOut();
return scene;
}
