import {Pack,BaseComponent} from "../bilza.js";
import Text from "./text.js";
export default class FrameCounter extends Text {

constructor (color :string="#008000"){ 
    super("",color);
    this.border.set(0);
    this.height.set(10);
}
init(p: Pack): boolean {
    super.init(p);
return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.content.set("sec:" +(Math.ceil(msDelta/1000)).toString());
    return true;
}

}