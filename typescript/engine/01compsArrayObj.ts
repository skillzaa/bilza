import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import Fn from "../functions/fn.js";

export default class CompsArrayObj {
protected comps:IComponent[]; 
public util :Fn;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (){
    //--Test created
    this.comps = [];
    this.util = new Fn();  
} 
///insert moved to 03Canvas setup since it needs pack for comp.init 
protected drawByDrawLayer(msDelta :number,drawLayer :DrawLayer,pack :Pack):boolean{ 
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == drawLayer ){
            if (comp.getStartTime() <= msDelta && comp.getEndTime() > msDelta ){
                pack.save();
                comp.update(msDelta,pack);
                comp.draw(pack);//waoooo no msDelta
                pack.restore();
            }   
        }
}
return true;
}
//--Test created
chqCollision(x :number, y :number):IComponent | null{
   return null;
}


////---????????
resize(width :number = 800,height :number = 400){
    for (let i = 0; i < this.comps.length; i++) {
        const element = this.comps[i];
        element.resize(width,height); 
    }
}

}//ends