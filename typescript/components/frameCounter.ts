import {Pack,BaseComponent,AnimatedNoBase} from "../Bilza.js";

export default class FrameCounter extends BaseComponent {
  private content :string;
    color :string;
    bgColor :string;
constructor (color :string="#008000",bgColor :string ="#d1d0c8"){ 
    super();
    this.content = "sec:00.00";
    this.color = color ; 
    this.bgColor = bgColor ; 
}
init(p: Pack): boolean {
    super.init(p);
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.content = "sec:" +(Math.ceil(msDelta/1000)).toString();
    return true;
}
draw(p:Pack):boolean{

this.style.fillStyle = this.bgColor;    
this.style.strokeStyle = this.bgColor;

   p.drawFillRect(
    this.props.loc.x(),
    this.props.loc.y(),
    this.width(),
    this.height(),
    this.style
    );

this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color;  

 p.drawText(this.content,this.props.loc.x()+ 10,this.props.loc.y()+ 10,this.style);   
return true;
}

}