import {Pack} from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/BaseComponent.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";

export default class Rect extends BaseComponent {
  
    lineWidth :AnimatedNoBase;
    color :string;
constructor (){ 
    super();
    this.lineWidth = new AnimatedNoBase(2) ;
    this.color = "#000000" ; 
  
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
    this.props.loc.x(),
    this.props.y.value(),
    this.width(),
    this.height(),
    this.style
    );
return true;
}

}