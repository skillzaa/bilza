import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import ComponentPack from "../compiler/componentPack.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../animations/animations.js";

export default class Line extends Component {
public x2 :AniNumber; 
public y2 :AniNumber;

lineWidth :AniNumber;
    

constructor (startTime :number,endTime :number,componentPack :ComponentPack,x1 :number=0,y1 :number=0,x2 :number=20,y2 :number=20,color :string ="#000000"){

    super(startTime,endTime,componentPack);
    

this.x.set(x1); 
this.y.set(y1);

this.x2 = new AniNumber(x2);
this.x2.setResponsive(); //default
this.y2 = new AniNumber(y2);
this.y2.setResponsive(); //default
this.lineWidth = new AniNumber(2);
this.color.set(color);
this.drawLayer = 2;
}


init(p: Pack): boolean {  
//--imp--it want us to keep it here or cause init error
// super.init(p);     
// if (this.canvasWidth == null || this.canvasHeight == null){
//     throw new Error("init error");
// }
    this.x2.init(this.canvasWidth());//canvasWidth
    this.y2.init(this.canvasHeight());//canvasHeight

return true;
}
    
update(msDelta: number, p: Pack): boolean {
   super.update(msDelta,p);
   this.x2.update(msDelta); 
   this.y2.update(msDelta); 
   this.lineWidth.update(msDelta); 
   return true;
}

draw(p:Pack):boolean{
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value(); 

// this.preDraw(p);
this.style.opacity = (this.opacity.value());
this.applyRotation(p);
//--dont draw border or
//-----------------------------preDrawEnds
p.drawLine(
    this.x.value(),
    this.y.value(),
    this.x2.value(),
    this.y2.value(),
    this.style
);
// this.style.opacity = 100;

this.postDraw(p); //its ok to keep
return true;
}
//---we do not need to add padding etc to we just over-written compWidth and compHeight methods.
compWidth(): number {
return Math.floor(Math.abs(this.x2.value() - this.x.value()));    
}
compHeight(): number {
    return this.lineWidth.value();
}
/**
 * line comp is drawn differently- so we do not want to change align at all since that will add extra addition/sub in calc.
 * in the rotate align as well we should just change x value and not y
 */
public align(x?: number | null, y?: number | null): void {
//--we do not align line comp so there is no add / sub in the x/y value    
    super.align(0,0);
}
public alignRotate(x: 0|1|2|null, y?: number | null): void {
    super.alignRotate(x,0);
}
}//class