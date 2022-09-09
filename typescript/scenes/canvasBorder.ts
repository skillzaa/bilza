import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function canvasBorder ( startTime :number,endTime :number,color :string= hsl(0), borderWidth :number=5):Scene{

//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//----------------------------------------------
    const left = getRect(color,0,0,borderWidth,100);
    scene.add(left);
    const right = getRect(color,100 - borderWidth,0,borderWidth,100);
    scene.add(right);
    
    const top = getRect(color,0,0,100,borderWidth);
    scene.add(top);
    const bottom = getRect(color,0,100 - borderWidth,100,borderWidth);
    scene.add(bottom);
       
return scene;
}

function getRect(color :string,x :number,y :number,width:number,height:number){
    const rect = cf.fillRect(color);  
    rect.align(0,0);
    rect.x.set(x);
    rect.y.set(y);
    rect.width.set(width);
    rect.height.set(height);
    return rect;
}