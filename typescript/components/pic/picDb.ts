import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IPic from "./IPic.js";
import Pack from "../../pack/pack.js";
import {AniNumberDb,AniColorDb,AniBooleanDb} from "../../animations/animations.js";
import Linker from "../../facade/linker.js";

import Pic from "./pic.js";

export default class PicDb extends CompDb implements IPic {
public readonly img :HTMLImageElement;
public readonly orignalWidth :number;
public readonly orignalHeight :number;
    
constructor(linker :Linker,imgUrl :string,width :number=25,height:number=25){

super(linker);

this.width.set(width); 
this.height.set(height); 
    
    this.img = new Image();
    this.img.src = imgUrl;
        if (this.img == null){
            throw new Error("image could not be found");
        }else {
            //--before clientHeight we need appendChild
            //--we need to save these since once display == none then they are 0
            document.body.appendChild(this.img);
            this.orignalWidth = this.img.clientWidth;
            this.orignalHeight = this.img.clientHeight;
            this.img.style.display = "none";
        }
    
    //--Draw Layer
    this.drawLayer = 2;    
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new Pic(this,pack);
   return comp; 
}
    
}