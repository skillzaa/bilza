import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import PicDb from "./picDb.js";

//------------------------------------------
export default class Pic extends CompEngine {
public readonly img :HTMLImageElement;
public readonly orignalWidth :number;
public readonly orignalHeight :number;


constructor (corePropsDb :PicDb ,pack :Pack){ 
    super(corePropsDb,pack);
this.img = corePropsDb.img;
this.orignalWidth = corePropsDb.orignalWidth;
this.orignalHeight = corePropsDb.orignalHeight;   
this.img.setAttribute("width", this.width.value().toString());    
this.img.setAttribute("height", this.height.value().toString());   
}


draw(p:Pack):boolean{
this.preDraw(p);

    p.drawImage(this.img,
                this.contentX(),
                this.contentY(),
                this.width.value(),
                this.height.value()
    );   

this.postDraw(p);            
return true;
}

}//comp ends

//--important line keep safe
// myImg.style.width = (currWidth + 100) + "px";