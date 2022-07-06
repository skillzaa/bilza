// import {Pack,BaseComponent,AniNumber} from "../bilza.js";
import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class FillRect extends BaseComponent {
  
color :string;
constructor (color :string="#000000"){ 
super();
this.color = color ; 
}
init(p: Pack): boolean {
super.init(p);
return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    return true;
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.height.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{
//--------------
p.save();    
p.translate(this.widthInPix() , this.heightInPix() );
p.rotate(this.rotation);

// ctx?.fillRect( 0 - (width/2) , 0 - (height/2) , 200 , 200 );
//--------------
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color; 
//---------------------------------------
   p.drawFillRect(
    -(this.widthInPix()/2),
    -(this.heightInPix()/2),
    // (0 - (this.widthInPix()/2)),
    // (0 - (this.heightInPix()/2)),
    this.widthInPix(),
    this.heightInPix(),
    this.style
    );

//--------------
p.restore();    
//--------------
//--------------------------------------------
return true;
}

}