import {Pack,IComponent,XAlignOpt,YAlignOpt,AniNumber} from "../Bilza.js";

import Loc from "./70loc.js";

export default class RotateObj extends Loc{
public rotation :AniNumber;
// aniPreset :AniPreset;

constructor (){
    super();
this.rotation = new AniNumber(0);
}

////////////////////////////////////////////////////////
applyRotation(p :Pack){
p.save();    
p.translate(this.xAligned() , this.yAligned() );
p.rotate(this.rotation.value());
console.log("this.rotation.value()",this.rotation.value());
}
removeRotation(p :Pack){
    // p.rotate(this.rotation,true);
    p.restore();
}
}//component ends 