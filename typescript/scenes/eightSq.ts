import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function sixSq ( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180),colorSq7 :string= hsl(0),colorSq8 :string= hsl(100) ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------

    //-----------Row - 1
    const sq1 = getRect(colorSq1,0,0);
    scene.add(sq1);

    const sq2 = getRect(colorSq2,25,0);
    scene.add(sq2);

    const sq3 = getRect(colorSq3,50,0);
    scene.add(sq3);

    const sq4 = getRect(colorSq4,75,50);
    scene.add(sq4);

    //-----------Row -2
    const sq5 = getRect(colorSq5,0,50);
    scene.add(sq5);

    const sq6 = getRect(colorSq6,25,50);
    scene.add(sq6);

    const sq7 = getRect(colorSq7,50,50);
    scene.add(sq7);

    const sq8 = getRect(colorSq8,75,50);
    scene.add(sq8);
    
return scene;
}

function getRect(color :string,x :number,y :number){
  const rect = cf.fillRect(color)  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(25);
    rect.height.set(50);
    return rect;
}