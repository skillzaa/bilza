import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function sixSq ( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180) ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    //-----------Row - 1
    const sq1 = getRect(colorSq1,0,0);
    scene.add(sq1);
    const sq2 = getRect(colorSq2,33,0);
    scene.add(sq2);
    const sq3 = getRect(colorSq3,66,0);
    scene.add(sq3);
    //-----------Row -2
    const sq4 = getRect(colorSq4,0,50);
    scene.add(sq4);
    const sq5 = getRect(colorSq5,33,50);
    scene.add(sq5);
    const sq6 = getRect(colorSq6,66,50);
    scene.add(sq6);
    
return scene;
}

function getRect(color :string,x :number,y :number){
  const rect = cf.fillRect(color)  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(34);
    rect.height.set(50);
    return rect;
}