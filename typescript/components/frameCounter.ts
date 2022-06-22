import {Pack,BaseComponent} from "../Bilza.js";
import Text from "./text/text.js";
export default class FrameCounter extends Text {

constructor (color :string="#008000"){ 
    super("",color);
    this.border.setValue(2);
    this.maxHeight = 10;
}
init(p: Pack): boolean {
    super.init(p);
return true;

}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.content = "sec:" +(Math.ceil(msDelta/1000)).toString();
    return true;
}

}