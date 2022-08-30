import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function welcome(startTime :number,endTime :number, hslColorNo :number):Scene{
    const sce = new Scene(startTime,endTime);
/////////////////////////////////////////////
    
    const txt = cf.text("Test Scene",hsl(0));
    txt.templ.jumbotron();
    txt.theme.color(hslColorNo);
    sce.push(txt,sce.startTimePlus(0) ,sce.endTimeMinus(0));
    
return sce;
}
