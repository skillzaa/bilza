import {Pack,BaseComponent,AniNumber} from "../../bilza.js";

export default class Icon extends BaseComponent {
  
    code:number; 
    fontSize:AniNumber; 
constructor (code:number = 9876,colorHax :string="#008000"){
    super();
    this.code = code;
    this.color.set(colorHax);
    this.fontSize = new AniNumber(100);
}

update(msDelta: number, p: Pack): boolean {
super.update(msDelta,p);
this.fontSize.update(msDelta);
return true;    
}
widthInPix(): number {
if (this.charsWidth == null){ throw new Error("init error");}    

return this.charsWidth(this.code.toString(),this.fontSize.value(),"Arial");
}

heightInPix(): number {
if (this.charsWidth == null){ throw new Error("init error");}    

return this.charsWidth("X",this.fontSize.value(),"Arial");
}
draw(p:Pack):boolean{
this.style.fontSize = this.fontSize.value();
this.style.fillStyle = this.color.value();
this.style.strokeStyle = this.color.value();

this.applyRotation(p);

p.drawIcon(this.code,this.xAligned(),this.yAligned(),this.style);
this.removeRotation(p);
return true;
}

}