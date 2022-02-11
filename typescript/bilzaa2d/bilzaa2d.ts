import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
import Background from "./background.js";
import Components from "./components.js";
export default class Bilzaa2d {
private comps:IDrawable[];
private pack:Pack;
private frame :number;
public totalFrames :number; //the size of video
public background :Background;
public components :Components;
constructor (){
this.pack = new Pack();        
this.comps = [];  
this.background = new Background();
this.totalFrames = 3000; //5min
this.frame = 0; 
this.components = new Components(this.comps);
} 
//--function arguments shd be arguments and not classes unless required absoliutely.
private draw():boolean{
let c = this.pack;     
this.frame += 1; /// importanto 
//---dont know abt pack.ctx() thing        
c.clearCanvas();          
c.drawBackground(this.background.color);          
this.drawBackgroundComps();
this.drawMiddlegroundComps();
return true;
}

private drawMiddlegroundComps():boolean{ 

for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];       
        //--save ctx
        if (comp.drawLayer == DrawLayer.MiddleGround ){
            if (comp.frameStart < this.frame && comp.frameEnd > this.frame ){
                this.pack.save();
                comp.update(this.frame,this.pack);
                comp.draw(this.pack);
                 //--keep both unless resetCtx has all items
                this.pack.restore();
                // this.pack.ctx().resetCtx();//why needed??
            }
                
        }
}
return true;
}
private drawBackgroundComps():boolean{    
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];        
        //--save ctx
        this.pack.save();
        if (comp.drawLayer == DrawLayer.BackGround){
                comp.draw(this.pack);
        }
        //--keep both unless resetCtx has all items
        this.pack.restore();
        //--no width for background items
}
return true;
}
add_comp(comp:IDrawable):IDrawable{
this.comps.push(comp);
return comp;
}
start(){
setInterval(()=>{
// for (let i = 0; i < this.comps.length; i++) {
    // const comp = b.comps[i];
    // comp.x = Math.ceil((Math.random() * 600));
// }
this.draw();
},1000);
}

}//ends