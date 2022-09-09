import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function SwingJt ( startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    const txt = cf.text(content);
    // txt.setTimings(2,endTime);
    scene.add(txt);
    
    txt.templ.jumbotron();
    txt.alignRotate(1,0);
    txt.rotation.oscillate(startTime,endTime,-15 , 15,3);
    txt.theme.color(hslColorNo);
    txt.exitAni.fadeOut();

return scene;
}
