import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function testScene(startTime :number,endTime :number, color :string):Scene{
    
    const scene = new Scene(startTime,endTime);
/////////////////////////////////////////////
    const g = cf.grid();
    //--grid will be visible for entire scene
    scene.add(g);
    
//................................    
    const txt = cf.text("Text from scene",hsl(0));
    txt.fontSize.set(120);
    txt.align(1,1);
    txt.setxy(50,50);
    //--start 1 sec after scene and end 1 sec before
    scene.add(txt,1,1);
    
return scene;
}
