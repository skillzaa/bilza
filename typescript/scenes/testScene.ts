import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";

export default function testScene(startTime :number,endTime :number, color :string):Scene{
    
    const sce = new Scene(startTime,endTime);
/////////////////////////////////////////////
    const g = cf.grid();
    //--so now the scene need to be atleast 4 sec long
    sce.push(g,sce.getStartTime() + 1,sce.getEndTime() - 3);
    
//................................    
    const txt = cf.text("Text from scene",hsl(0));
    txt.fontSize.set(120);
    txt.align(1,1);
    txt.setxy(50,50);
    sce.push(txt,sce.getStartTime() + 2,sce.getEndTime() - 4);
    
return sce;
}
