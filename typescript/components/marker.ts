import Pack from "../pack/pack.js";

import Circle from "./circle.js";

export default class Marker extends Circle {
  
constructor (startTime :number,endTime :number,canvasWidth :number,canvasHeight :number,x :number=50,y :number=50,color :string="red",radius=2){ 
super(startTime,endTime,canvasWidth,canvasHeight);

this.width.setNonResponsive()
this.height.setNonResponsive()

this.align(1,1);
this.alignRotate(1,1);
this.width.set(radius/2);
this.x.set(x);
this.y.set(y);
this.color.set(color);
}

}