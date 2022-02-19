import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import {DrawLayer} from "./design/drawLayer.js";
import Background from "./background.js";

export default class Bilzaa2d {
private comps:IDrawable[];
private pack:Pack;
private frame :number;
private interval :number;

public mspf :number; //the size of video
public totalFrames :number; //the size of video
public background :Background;

constructor (totalFrames=50){
this.pack = new Pack();        
this.comps = [];  
this.background = new Background();
this.totalFrames = totalFrames;
this.frame = 0; 
this.interval = 0;
this.mspf = 1000;
} 

private draw():boolean{
    this.frame += 1; /// importanto
    //stop if completed
if(this.frame >= this.totalFrames){ this.stop();}     
this.pack.clearCanvas();          
this.pack.drawBackground(this.background.color);          
this.drawBackgroundComps();
this.drawMiddlegroundComps();
this.drawForegroundComps();
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
                this.pack.restore();
            }   
        }
}
return true;
}
private drawBackgroundComps():boolean{    
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];        
        if (comp.drawLayer == DrawLayer.BackGround){
            this.pack.save();
            comp.update(this.frame,this.pack);
            comp.draw(this.pack);
        }
        this.pack.restore();
}
return true;
}
private drawForegroundComps():boolean{    
for (let i = 0; i < this.comps.length; i++) {
let comp = this.comps[i];        
        if (comp.drawLayer == DrawLayer.ForeGround){
            this.pack.save();
            comp.update(this.frame,this.pack);
            comp.draw(this.pack);
        }
        this.pack.restore();
}
return true;
}

add(comp:IDrawable):IDrawable{
this.comps.push(comp);
return comp;
}
start(){
this.interval = setInterval(()=>{
this.draw();
},this.mspf);
}
stop(){
    console.log("stopped");
    clearInterval(this.interval);
}
}//ends