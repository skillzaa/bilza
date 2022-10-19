import Scene from "../scene/scene.js";
import  {hsl} from "../bilza.js";

export default function jt ( scene :Scene,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene{


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
