import {Pack,IComponent,XAlignOpt,YAlignOpt,AniNumber} from "../Bilza.js";
import Loc from "./70loc.js";

export default class RotateObj extends Loc{
// aniPreset :AniPreset;
constructor (){
    super();
}

////////////////////////////////////////////////////////
applyRotation(p :Pack){
    p.save();    
    p.translate(this.xRotateAligned() , this.yRotateAligned() );
    p.rotate(this.rotation.value());
    p.translate(-this.xRotateAligned() , -this.yRotateAligned() );    
// console.log("this.rotation.value()",this.rotation.value());
}
removeRotation(p :Pack){
    // p.rotate(this.rotation,true);
    p.restore();
}
}//component ends 