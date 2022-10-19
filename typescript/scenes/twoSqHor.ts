import {hsl} from "../bilza.js";
import Scene from "../scene/scene.js";


export default function towSqHor (scene :Scene,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120)){

    const sq1 =  scene.add().fillRect(colorSq1);
    sq1.setxy(0,0);
    sq1.width.set(100);
    sq1.height.set(50);

    // sq1.exitAni.fadeOut();
    // sq1.entryAni.leftIn();
//--------------------------------------------    
    // const sq2 = getRect(colorSq2,0,50);
    const sq2 =  scene.add().fillRect(colorSq2);
    sq2.setxy(0,50);
    sq2.width.set(100);
    sq2.height.set(50);

    // sq2.exitAni.fadeOut();
    // sq2.entryAni.rightIn();
       
}
