import {Pack,hsl} from "../bilza.js";
import Text from "./text.js";
import { AniBoolean } from "../animationModule/animations.js";

//--16-july-2022 completed frame counter for last time inshallah
export default class FrameCounter extends Text {
    convertToSec :AniBoolean;

constructor (color :string= hsl(60)){ 
    super("",color);
    this.convertToSec = new AniBoolean(true);
    this.fontSize.set(26);
    this.showBackground.set(true);
    this.colorBackground.set("blue");
    this.colorBorder.set(color);
    // this.color.set(color);
    this.border.set(1);
}


update(msDelta: number, p: Pack): boolean {
    if (this.convertToSec.value() == true){
        this.content.set("sec:" +(Math.ceil(msDelta/1000)).toString());
    }else {
        this.content.set("sec:" +(Math.ceil(msDelta)).toString());
    }
    this.convertToSec.update(msDelta);
    super.update(msDelta,p);
    return true;
}

}