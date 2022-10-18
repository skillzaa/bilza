import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function fourSq ( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(300) ):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------

    const sq1 = getRect(scene,colorSq1,0,0);
    const sq2 = getRect(scene,colorSq2,50,0);
    const sq3 = getRect(scene,colorSq3,0,50);
    const sq4 = getRect(scene,colorSq4,50,50);
    
return scene;
}

function getRect(scene :Scene,color :string,x :number,y :number){
    const rect =  scene.add().fillRect(color);
//   const rect = cf.fillRect(color)  
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(50);
    rect.height.set(50);
    rect.entryAni.fadeIn();
    rect.exitAni.fadeOut();
    return rect;
}