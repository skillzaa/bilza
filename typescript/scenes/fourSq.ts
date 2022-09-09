import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function fourSq ( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(300) ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    const sq1 = getRect(colorSq1,0,0);
    scene.add(sq1);
    const sq2 = getRect(colorSq2,50,0);
    scene.add(sq2);
    const sq3 = getRect(colorSq3,0,50);
    scene.add(sq3);
    const sq4 = getRect(colorSq4,50,50);
    scene.add(sq4);
    
return scene;
}

function getRect(color :string,x :number,y :number){
  const rect = cf.fillRect(color)  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(50);
    rect.height.set(50);
    return rect;
}