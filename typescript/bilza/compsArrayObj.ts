import {DrawLayer,IDrawable,Pack} from "../index.js";

export default class CompsArrayObj {
private comps:IDrawable[]; 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (){
this.comps = [];  
} 

protected drawByDrawLayer(msDelta :number,drawLayer :DrawLayer,pack :Pack):boolean{ 
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == drawLayer ){
            if (comp.getStart() < msDelta && comp.getEnd() > msDelta ){
                pack.save();
                comp.update(msDelta,pack);
                comp.draw(pack);//waoooo no msDelta
                pack.restore();
            }   
        }
}
return true;
}

chqCollision(x :number, y :number):IDrawable | null{
   return null;
}

insert(comp:IDrawable):IDrawable{
this.comps.push(comp);
return comp;
}


}//ends