import Pack from "../pack/pack.js";
import Circle from "./circle.js";

export default class Marker extends Circle {
  
constructor (x :number=50,y :number=50,color :string="red",radius=2){ 
super();
this.align(1,1);
this.alignRotate(1,1);
this.width.set(radius/2);
this.x.set(x);
this.y.set(y);
this.color.set(color);
}

}