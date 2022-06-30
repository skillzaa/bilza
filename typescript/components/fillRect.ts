import {Pack,BaseComponent,AniNumber} from "../bilza.js";

export default class FillRect extends BaseComponent {
  
color :string;
constructor (color :string="#000000"){ 
super();
this.color = color ; 
}
init(p: Pack): boolean {
super.init(p);
return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    return true;
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.height.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
// this.style.lineWidth = this.lineWidth.value();

   p.drawFillRect(
    this.xAligned(),
    this.yAligned(),
    // 200,
    // 200,
    this.widthInPix(),
    this.heightInPix(),
    this.style
    );
return true;
}

}