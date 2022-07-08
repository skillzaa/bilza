import {Pack,BaseComponent,DrawLayer} from "../bilza.js";

import SkipXFrames from "../BaseComponent/pure/skipXFrames.js";
import XY
 from "../BaseComponent/designBC/xy.js";
export default class CircleParticles extends BaseComponent {
private skipXFrames :SkipXFrames;
private xyArray :XY[];
    count :number;
    size :number;
constructor (count :number= 10,color :string="#008000",framesToSkip :number=50) { 
    super();
    this.skipXFrames = new SkipXFrames(framesToSkip);
    this.xyArray = [];
    this.drawLayer = DrawLayer.MiddleGround;
    this.count = count ;   
    this.color.set(color) ;  
    this.size = 10; 
}
init(p: Pack): boolean {
 super.init(p);
 this.getRandomXY();
 return true;   
}

draw(p:Pack):boolean{
// -- We are using skip frame class not for skipping draws but delaying for calculation as per frames
// -- We have to draw on every frame just change x,y after skipFrames
if (this.skipXFrames.skipped() == true ){
this.getRandomXY();
}

if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
    
}    
        this.style.fillStyle = this.color.value();
        this.style.globalAlpha = (this.opacity.value()/100);
        this.style.strokeStyle = this.color.value();
        for (let i = 0; i < this.count ; i++) {
            p.drawCircle(
                this.xyArray[i].x ,
                this.xyArray[i].y ,
                this.size,
                true,
                0,
                (2 * Math.PI),
                this.style);
        }
return true;
}

private getRandomXY(){
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}    
this.xyArray.length = 0;
    for (let i = 0; i < this.count ; i++) {
     const xy = new XY(
        (Math.random() * this.widthInPix()) + this.x.value(),
        (Math.random() * this.heightInPix())+ this.y.value()
     );
     this.xyArray.push(xy);
       
    }
}
}