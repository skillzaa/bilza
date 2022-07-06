import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class Marker extends BaseComponent {
  
color :string;
constructor (color :string="#ffff00"){ 
super();
this.xAlign = this.XAlignOpt.Mid;
this.yAlign = this.YAlignOpt.Mid;
this.x.setInitValue(50);
this.y.setInitValue(50);
this.color = color ; 
}
// init(p: Pack): boolean {
// super.init(p);
// return true;
// }

// update(msDelta: number, p: Pack): boolean {
//     super.update(msDelta,p);
//     return true;
// }
widthInPix(): number {
   return 0;
}
heightInPix(): number {
    return 0;
}
draw(p:Pack):boolean{

this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
   p.drawFillRect(
     this.x.value(),
     this.y.value(),
    4,
    4,
    this.style
    );
return true;
}

}