//----this is just a dummy class so that the top level name does not change--we can just change what this extends and apply any new changes
// import Loc from "./loc.js";
import { IComponent,Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";

export default class BaseComponent extends RotateObj implements IComponent{
 
constructor (){
    super();

}

init(p: Pack): boolean {
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();
//--The X and Y class needs to be init but The AniNumber wrapped insde does not need init
this.x.init(this.usePercentages,this.canvasWidth);//canvasWidth
this.y.init(this.usePercentages,this.canvasHeight);//canvasHeight
////////////////////////////
// this.paddingLeft.init()
this.paddingLeft.init(this.usePercentages,this.canvasWidth);
this.paddingRight.init(this.usePercentages,this.canvasWidth);
//--- DO NOT FEED CANVASWIDTH HERE its for canvasHeight
this.paddingTop.init(this.usePercentages,this.canvasHeight);
this.paddingBottom.init(this.usePercentages,this.canvasHeight);

return true;
}


update(msDelta :number,p :Pack): boolean {
    this.x.update(msDelta);
    this.y.update(msDelta);
    //--6-july-2022 visible.update added
    this.visible.update(msDelta);
    this.rotation.update(msDelta);
    this.opacity.update(msDelta);
    this.width.update(msDelta);
    this.height.update(msDelta);

    this.paddingLeft.update(msDelta);
    this.paddingRight.update(msDelta);
    this.paddingTop.update(msDelta);
    this.paddingBottom.update(msDelta);
return true;    
}

////////////////////////////////////////////////////////
}//component ends 