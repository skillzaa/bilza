import {Pack,BaseComponent,AnimatedNoBase} from "../Bilza.js";

export default class Rect extends BaseComponent {
  
    lineWidth :AnimatedNoBase;
    color :string;
constructor (color :string="#000000"){ 
    super();
    this.lineWidth = new AnimatedNoBase(1) ;
    this.color = color ; 
    
}
init(p: Pack): boolean {
    super.init(p);
this.lineWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.lineWidth.update(msDelta);
    return true;
}
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
this.style.lineWidth = this.lineWidth.value();

   p.drawRect(
    this.loc.x(),
    this.loc.y(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}