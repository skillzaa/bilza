import Bilza, {Ui,hsl} from "../bilza.js";
import Scene from "../scene-old/scene.js";


export default function eightSq ( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180),colorSq7 :string= hsl(0),colorSq8 :string= hsl(100) ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------

    //-----------Row - 1
    const sq1 = getRect(scene,colorSq1,0,0);
    const sq2 = getRect(scene,colorSq2,25,0);
    const sq3 = getRect(scene,colorSq3,50,0);
    const sq4 = getRect(scene,colorSq4,75,0);
    //-----------Row -2
    const sq5 = getRect(scene,colorSq5,0,50);
    const sq6 = getRect(scene,colorSq6,25,50);
    const sq7 = getRect(scene,colorSq7,50,50);
    const sq8 = getRect(scene,colorSq8,75,50);
return scene;
}

function getRect(scene :Scene,color :string,x :number,y :number){
  const rect = scene.add().fillRect(color);  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(25);
    rect.height.set(50);
    return rect;
}