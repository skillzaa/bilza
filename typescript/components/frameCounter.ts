import {Pack} from "../bilza.js";
import Text from "./text.js";
import { AniBoolean } from "../animationModule/animations.js";

//--16-july-2022 completed frame counter for last time inshallah
export default class FrameCounter extends Text {
convertToSec :AniBoolean;
constructor (color :string="#008000"){ 
    super("",color);
    this.convertToSec = new AniBoolean(true);
    // this.width.set(20);
    this.showBackground.set(true);
    this.colorBackground.set("blue");
    this.colorBorder.set("#101963");
    this.color.set("yellow");
    this.border.set(1);
}


update(msDelta: number, p: Pack): boolean {
    if (this.convertToSec.value() == true){
        this.content.set("sec:" +(Math.ceil(msDelta/1000)).toString());
    }else {
        this.content.set("sec:" +(Math.ceil(msDelta)).toString());
    }
    super.update(msDelta,p);
    return true;
}

}