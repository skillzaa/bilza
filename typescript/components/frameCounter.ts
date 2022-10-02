// import {hsl} from "../bilza.js";
// import Pack  from "../pack/pack.js";
// import Text from "./text/text.js";
// import ComponentPack from "../compiler/componentPack.js";

// import { AniBoolean } from "../animations/animations.js";

// //--16-july-2022 completed frame counter for last time inshallah
// export default class FrameCounter extends Text {
//     convertToSec :AniBoolean;

// constructor (startTime :number,endTime :number,componentPack :ComponentPack,Hue_0_to_360 :number=240){ 
//     super(startTime,endTime,componentPack,"",hsl(Hue_0_to_360));
    
//     this.convertToSec = new AniBoolean(true);
//     // this.fontSize.set(26);
//     this.showBackground.set(true);
//     this.colorBackground.set(hsl(Hue_0_to_360,20,90));
//     this.colorBorder.set(hsl(Hue_0_to_360));
//     this.color.set(hsl(Hue_0_to_360));
//     // this.color.set(color);
//     this.border.set(1);
//     this.fitToHeight.set(true);
//     this.height.set(10);
//     this.drawLayer = 3;
// }


// update(msDelta: number, p: Pack): boolean {
//     if (this.convertToSec.value() == true){
//         this.content.set("sec:" +(Math.ceil(msDelta/1000)).toString());
//     }else {
//         this.content.set("sec:" +(Math.ceil(msDelta)).toString());
//     }
//     this.convertToSec.update(msDelta);
//     super.update(msDelta,p);
//     return true;
// }

// }