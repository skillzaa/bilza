import {Pack,IComponent,XAlignOpt,YAlignOpt} from "../bilza.js";

import Loc from "./70loc.js";

export default class RotateObj extends Loc{
public rotation :number;
// aniPreset :AniPreset;

constructor (){
    super();
this.rotation = 20;
}

////////////////////////////////////////////////////////
applyRotation(p :Pack){
    p.save();
    p.translate(this.xAligned(),this.yAligned());
    p.rotate(this.rotation);
}
removeRotation(p :Pack){
    // p.rotate(this.rotation,true);
    p.restore();
}
}//component ends 