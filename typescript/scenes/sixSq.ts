import Scene from "../scene/scene.js";
import  {hsl} from "../bilza.js";

export default function sixSq ( scene :Scene,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180) ):Scene{


    //-----------Row - 1
    const sq1 = getRect(scene,colorSq1,0,0);
    const sq2 = getRect(scene,colorSq2,33,0);
    const sq3 = getRect(scene,colorSq3,66,0);
    //-----------Row -2
    const sq4 = getRect(scene,colorSq4,0,50);
    const sq5 = getRect(scene,colorSq5,33,50);
    const sq6 = getRect(scene,colorSq6,66,50);
    
return scene;
}

function getRect(scene :Scene,color :string,x :number,y :number){
  const rect = scene.add().fillRect(color)  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(34);
    rect.height.set(50);
}