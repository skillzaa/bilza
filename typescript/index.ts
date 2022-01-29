import Pack from "./pack/pack.js";
import IDrawable from "./design/IDrawable.js";
import {DrawLayer} from "./design/drawLayer.js";

export default class Bilzaa2d {
private comps:IDrawable[];
public gapH:number;
public gapV:number;
private pack:Pack;

constructor (){
this.pack = new Pack();        
this.comps = [];  
this.gapH = 5;
this.gapV = 5;

} 
//--function arguments shd be arguments and not classes unless required absoliutely.
draw(x:number=0,y:number=0):boolean{    
this.drawBackground();
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        this.pack.ctx().save();
        if (comp.drawLayer == DrawLayer.MiddleGround){
                comp.draw(this.pack,x,y);
        }
        //--keep both unless resetCtx has all items
        this.pack.ctx().restore();
        this.pack.ctx().resetCtx();//why needed??

        if (comp.width(this.pack) > 0){
                x += comp.width(this.pack) + this.gapH;
        }
}
return true;
}
drawBackground():boolean{    

for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];        
        //--save ctx
        this.pack.ctx().save();
        if (comp.drawLayer == DrawLayer.BackGround){
                comp.draw(this.pack,0,0);
        }
        //--keep both unless resetCtx has all items
        this.pack.ctx().restore();
        this.pack.ctx().resetCtx();//why needed??
        //--no width for background items
}
return true;
}
//--so a lat machine can always get segments from outside as long as they complyby IDrawable interface
add_comp(comp:IDrawable):IDrawable{
this.comps.push(comp);
return comp;
}
}//ends