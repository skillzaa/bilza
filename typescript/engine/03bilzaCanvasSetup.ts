import {Pack,IComponent,DrawLayer} from "../Bilza.js";
import Fn from "../functions/fn.js";

export default class BilzaCanvasSetup {
protected pack:Pack; //---later
protected canvasId :string;
protected comps:IComponent[]; 
public util :Fn;
//==================PUBLIC API
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId:string,canvasWidth:number,canvasHeight:number|null=null,timeEndSec:number){
    this.util = new Fn();  
    this.comps = [];

this.canvasId = canvasId;
    if (canvasHeight ==null){
        canvasHeight = this.util.aspectRatioHeight(canvasWidth);
    } 
this.pack = new Pack(this.canvasId,canvasWidth,canvasHeight);
}

//--This should be in Pack---////////////////
setCanvas(width :number = 800,height :number|null = null){
    if (height ==null){
        height = this.util.aspectRatioHeight(width);
    }

this.pack = new Pack(this.canvasId,width,height);
    this.resize(width,height);
}
//
getCanvasHeight():number{
return this.pack.canvasHeight();    
}

getCanvasWidth():number{
return this.pack.canvasWidth();    
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
    
///////////////////////////////////////////////////
}//ends