import  {hsl} from "../bilza.js";

import Scene from "../scene/scene.js";


export default function swingJt ( scene :Scene,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene{


    const txt = scene.add().text(content);

    txt.templ.jumbotron();
    txt.alignRotate(1,0);
    txt.rotation.oscillate(startTime,endTime,-15 , 15,3);
    txt.theme.color(hslColorNo);
    txt.exitAni.fadeOut();

return scene;
}
