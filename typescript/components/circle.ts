import Pack from "../pack/pack.js";
import Component from "../EngineComponent/component.js";
import ComponentPack from "../componentPack/componentPack.js";



import {AniNumber,AniString,AniBoolean,AniColor,} from "../animations/animations.js";

export default class Circle extends Component {

startAngle :AniNumber;  
endAngle :AniNumber;  
filled :AniBoolean;
lineWidth :AniNumber;

constructor (startTime :number,endTime :number,componentPack :ComponentPack,radius :number=10,color :string="#ff0000"){ 
super(startTime,endTime,componentPack);
//--new props
this.filled = new AniBoolean(true);
this.startAngle = new AniNumber(0);
this.endAngle = new AniNumber(360);
this.lineWidth = new AniNumber(1);
//---existing prop
this.color.set(color) ; 
this.width.set(Math.floor(radius * 2)) ; 
}

// init(p: Pack): boolean {
// super.init(p);
// //---theWhole of circle height = canvasWidth
// // this.height.setResponsive();
// // this.height.init(this.canvasWidth());//canvasHeight

// return true;    
// }
//-------------------------over ride
contentHeight(): number {
return this.width.value();//since its circle and height = width     
}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.startAngle.update(msDelta);
    this.endAngle.update(msDelta);
    this.lineWidth.update(msDelta);
    //---??
    this.height.set(this.width.value());
    return true;
}

draw(p:Pack):boolean{
//--------------
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value(); 
this.style.lineWidth = this.lineWidth.value(); 
//---------------------------------------
p.beginPath();
/*
*  drawCircle(x :number=0, y:number=0, radius:number=25,fill :boolean = false, startAngle=0 , endAngle:number = (2 * Math.PI),incomCtx:Style) 
*/
const radius = (this.width.value()/2); 
p.drawCircle( 
    //--we have to use (this.width.value()/2) since circle is drawn from centre
    this.contentX() + (this.width.value()/2),
    this.contentY() + (this.width.value()/2),
    radius, //since radius is half of width
    // 100,
    this.filled.value(),
    this.startAngle.value() * (Math.PI/180),
    this.endAngle.value() * (Math.PI/180),
    this.style
    );

p.stroke();
//----------------------------
this.postDraw(p);
//----------------------------
return true;
}

}