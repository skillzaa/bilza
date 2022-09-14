import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function welcome(startTime :number,endTime :number, hslColorNo :number):Scene{
    const scene = new Scene(startTime,endTime);
/////////////////////////////////////////////
    
    const txt = scene.add(startTime,endTime).text("Test Scene",hsl(0));
    // txt.templ.jumbotron();
    txt.templ.hdg();
    txt.theme.color(hslColorNo);
    
return scene;
}
