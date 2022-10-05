import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";
import { AniNumber } from "../../animations/animations.js";
import RectDb from "./rectDb.js";
/**
 * The rect a very interesting component. All it need it a border and a background , which every component has by default. But still it has another rectangle inside it. Thus it has border ==> inside which there is background ==> inside which is padding ==> and inside which is the contentArea where the actual rect is drawn.
 * Actually it is just the box system of bilza library. 
 */
export default class Rect extends CompEngine {
public lineWidth :AniNumber;

//--Here instead of CorePropsDb we gave RectDb which is ok since it has  CorePropsDb as base and that is required 
constructor (corePropsDb :RectDb ,pack :Pack){ 
    super(corePropsDb,pack);
    this.lineWidth = new AniNumber(corePropsDb.lineWidth);
    
    }
    

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.lineWidth.update(msDelta);
    return true;
}

draw(p:Pack):boolean{
this.preDraw(p)
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value();

   p.drawRect(
    this.contentX(),
     this.contentY(),

    this.width.value(),
    this.height.value(),
    this.style
    );
 
this.postDraw(p);
return true;
}
}