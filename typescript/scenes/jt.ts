import Bilza, {Ui, CompFactory,hsl,Scene,getRandom} from "../bilza.js";

export default function jt ( startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    const txt = scene.add().text(content);
    txt.align(1,1);
    txt.x.set(50);
    txt.y.set(50);
    txt.templ.jumbotron()
    .theme.color(hslColorNo)
    .entryAni.fadeIn()
    .exitAni.fadeOut();

return scene;
}
