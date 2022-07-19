import {Pack,BaseComponent,AniNumber,FontFamily} from "../bilza.js";

export default class Icon extends BaseComponent {
  
    code:number; 
    fontFamily :FontFamily;
    fontSize:AniNumber; 
constructor (code:number = 9876,colorHax :string="#008000"){
    super();
    this.code = code;
    this.color.set(colorHax);
    this.fontSize = new AniNumber(100);
    this.fontFamily = FontFamily.Calibri;

}

update(msDelta: number, p: Pack): boolean {
super.update(msDelta,p);
this.fontSize.update(msDelta);
return true;    
}
contentHeight():number {
if (this.charsWidth == null){throw new Error("init error");}    
//--Abstraction
return this.charsWidth(String.fromCharCode(this.code),this.fontSize.value(),this.fontFamily);
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(String.fromCharCode(this.code),this.fontSize.value(),this.fontFamily)
}


draw(p:Pack):boolean{

this.preDraw(p);
this.style.fontSize = this.fontSize.value();
this.style.fillStyle = this.color.value();
this.style.strokeStyle = this.color.value();
p.drawIcon(this.code,this.contentX(),this.contentY(),this.style);

this.postDraw(p);
return true;
}

}