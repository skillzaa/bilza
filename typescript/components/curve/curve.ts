import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CurveDb from "./curveDb.js";
import {AniNumber,AniString,AniBoolean,AniPerc,AniColor,} from "../../animations/animations.js";
import toPix from "../../functions/toPix.js";
export default class Curve extends CompEngine {

    startX                      :AniNumber;
    startY                      :AniNumber;
    midX                        :AniNumber;
    midY                        :AniNumber;
    endX                        :AniNumber;
    endY                        :AniNumber;
    lineWidth                   :AniNumber;
    bracketWidth                :AniNumber;
    colorBracket                :AniColor;
    showBracket                 :AniBoolean;
    
constructor (propsDb :CurveDb ,pack :Pack){ 
super(propsDb,pack);
    //---------------------------------------------------------------
    this.startX             = new AniNumber ( propsDb.startX       );
    this.startY             = new AniNumber ( propsDb.startY       );
    this.midX               = new AniNumber ( propsDb.midX         );
    this.midY               = new AniNumber ( propsDb.midY         );
    this.endX               = new AniNumber ( propsDb.endX         );
    this.endY               = new AniNumber ( propsDb.endY         );
    this.lineWidth          = new AniNumber ( propsDb.lineWidth    );
    this.bracketWidth       = new AniNumber ( propsDb.bracketWidth );
    this.colorBracket       = new AniColor  ( propsDb.colorBracket );
    this.showBracket       = new AniBoolean  ( propsDb.showBracket );
    //---------------------------------------------------------------
    //--core props
    this.color.set(propsDb.color.value());
}
  
update(msDelta: number, p: Pack): boolean {
   super.update(msDelta,p);
   this.lineWidth.update(msDelta); 
   
   this.midX.update(msDelta); 
   this.midY.update(msDelta); 
   
   this.endX.update(msDelta); 
   this.endY.update(msDelta); 
   
   this.colorBracket.update(msDelta); 
   this.bracketWidth.update(msDelta); 

   return true;
}

draw(p:Pack):boolean{
    
this.preDraw(p);
//------------------------------------------
this.style.fillStyle    = this.color.value();    
this.style.strokeStyle  = this.color.value(); 
this.style.lineWidth    = this.lineWidth.value(); 

p.quadraticCurveTo(
    this.x.value() + this.resolveX( this.startX.value() ) , 
    this.y.value() + this.resolveY( this.startY.value() ) ,

    this.x.value() + this.resolveX( this.midX.value() ), 
    this.y.value() + this.resolveY( this.midY.value() ) , 

    this.x.value() + this.resolveX( this.endX.value() ), 
    this.y.value() + this.resolveY( this.endY.value() ) ,
    this.style 
    );
///////////////////////////////////////////////
///////////////////////////////////////////////
if (this.showBracket.value() == true){
this.style.strokeStyle  = this.colorBracket.value();
this.style.lineWidth    = this.bracketWidth.value();

p.beginPath();
p.moveTo(
    this.x.value() +  this.resolveX( this.startX.value()),
    this.y.value() + this.resolveY( this.startY.value() )
      );

p.lineTo(
    this.x.value() +   this.resolveX( this.midX.value() ), 
    this.y.value() +  this.resolveY( this.midY.value() ), 
    this.style
);
p.lineTo(
    this.x.value() + this.resolveX( this.endX.value() ), 
    this.y.value() +  this.resolveY( this.endY.value() ), 
    this.style
    );
p.stroke();
} //show bracket ends
/////////////////////////////////////////////
this.postDraw(p); //its ok to keep
return true;
}

private resolveX(no :number):number{
return (this.width.value()/100) * no;
}
private resolveY(no :number):number{
return (this.height.value()/100) * no;
}

}//class