import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";


//-14-july-2022 : There is no need to add any public prop width height and color are all added    
//--16-jul-2022 : This is the first completed comp.

export default class FillRect extends CompEngine {

constructor (corePropsDb :CorePropsDb,pack :Pack){ 
super(corePropsDb,pack);

}

draw(p:Pack):boolean{

this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
// ---------------------------------------
   p.drawFillRect(
     this.contentX(),
     this.contentY(),

    this.width.value(),this.height.value(),
    // 200,200
    this.style
    );
// ----------------------------
this.postDraw(p)
return true;
}
}