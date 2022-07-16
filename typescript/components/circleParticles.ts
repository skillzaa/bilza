import {Pack,BaseComponent,DrawLayer,AniNumber} from "../bilza.js";

import SkipXFrames from "../BaseComponent/pure/skipXFrames.js";
import XY from "../BaseComponent/designBC/xy.js";
import Circle from "./circle.js";

export default class CircleParticles extends BaseComponent {
private skipXFrames :SkipXFrames;
private xyArray :XY[];
//---Other than count and skipXFrames use the circle obj
    count :number;
    public circle :Circle;
constructor (count :number= 8,color :string="#008000",framesToSkip :number=50) { 
    super();
    this.circle = new Circle(this.color.value());
    
    this.circle.responsiveCoordinates = false;
    this.circle.responsivePadding = false;
    this.circle.responsiveDims = false;

    this.circle.width.set(12);
    // this.circle.xAlign = this.circle.XAlignOpt.Mid;
    // this.circle.yAlign = this.circle.YAlignOpt.Mid;
    
    this.skipXFrames = new SkipXFrames(framesToSkip);
    this.xyArray = [];
    this.drawLayer = DrawLayer.MiddleGround;
    this.count = count ;   
    this.circle.color.set(color) ;  
}
init(p: Pack): boolean {
    super.init(p);
    this.circle.init(p);
    this.getRandomXY();
 return true;   
}
update(msDelta: number, p: Pack): boolean {
    this.circle.update(msDelta,p);
    super.update(msDelta,p);
    return true;
}
draw(p:Pack):boolean{
// -- We are using skip frame class not for skipping draws but delaying for calculation as per frames.
// -- We have to draw on every frame just change x,y after skipFrames
if (this.skipXFrames.skipped() == true ){
this.getRandomXY();
}
this.preDraw(p);
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}    

        for (let i = 0; i < this.count ; i++) {
            this.circle.x.set(this.xyArray[i].x);
            this.circle.y.set(this.xyArray[i].y);
            this.circle.draw(p);
        }
this.postDraw(p);        
return true;
}

private getRandomXY(){
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}    
this.xyArray.length = 0;

    for (let i = 0; i < this.count ; i++) {
//--this.contentWidth() of particle obj
const maxX = this.contentX() + (this.contentWidth() - this.circle.contentWidth());
const maxY = this.contentY() + ( this.contentHeight() - this.circle.contentHeight());
const minX = this.contentX();
const minY = this.contentY();

     const xy = new XY(
        (Math.floor(Math.random() * (maxX - minX + 1) + minX) ),
        (Math.floor(Math.random() * (maxY - minY + 1) + minY) ),
     );
     this.xyArray.push(xy);
    }
}
}