import Pack from "./pack/pack.js";
import IDrawable from "./design/IDrawable.js";
import {DrawLayer} from "./design/drawLayer.js";

export default class Bilzaa2d {
public comps:IDrawable[];
private pack:Pack;
public totalFrames :number; //the size of video
public frame :number
constructor (){
this.pack = new Pack();        
this.comps = [];  
this.totalFrames = 3000; //5min
this.frame = 0; 
} 
//--function arguments shd be arguments and not classes unless required absoliutely.
draw():boolean{ 
this.frame += 1; /// importanto         
this.pack.ctx().clearCanvas();          
this.drawBackground();
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == DrawLayer.MiddleGround ){
            if (comp.frameStart < this.frame && comp.frameEnd > this.frame ){
                this.pack.ctx().save();
                comp.update(this.frame,this.pack);
                comp.draw(this.pack);
                 //--keep both unless resetCtx has all items
                this.pack.ctx().restore();
                // this.pack.ctx().resetCtx();//why needed??
            }
                
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
                comp.draw(this.pack);
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