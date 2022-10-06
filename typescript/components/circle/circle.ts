import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CircleDb from "./circleDb.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class Circle extends CompEngine {

startAngle :AniNumber;  
endAngle :AniNumber;  
filled :AniBoolean;
lineWidth :AniNumber;
strokeColor :AniColor;
strokeWidth :AniNumber;


constructor (circleDb :CircleDb,pack :Pack){ 
super(circleDb,pack);    
//--new props
this.filled = new AniBoolean(circleDb.filled);
this.startAngle = new AniNumber(circleDb.startAngle);
this.endAngle = new AniNumber(circleDb.endAngle);
this.lineWidth = new AniNumber(circleDb.lineWidth);
this.strokeWidth = new AniNumber(circleDb.strokeWidth);
this.strokeColor = new AniColor(circleDb.strokeColor);

}

//-------------------------over ride

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    //---just for circle
    // debugger;
    // this.heightHack(); 
    // this.height.set(this.width.value());

    this.startAngle.update(msDelta);
    this.endAngle.update(msDelta);
    this.lineWidth.update(msDelta);
    //---??
    
    return true;
}

draw(p:Pack):boolean{
//--------------
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.strokeColor.value(); 
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
 
contentHeight(): number {
return this.width.value();
}



}