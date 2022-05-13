import {Component,Pack,DrawLayer } from "../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
 
export default class TestComp extends Component<ObjectData> {

constructor (duration:number=300){
    super(DataFn,duration);
}
width(p:Pack):number {
return  10;    
}
height(p:Pack):number {
    return  10;
}
update(msDelta: number, p: Pack): boolean {
    this.d.msDelta = msDelta;
    return true;
}
draw(p:Pack):boolean{
    this.style.fontSize =80;
    p.drawText("Test Comp",5,5,this.style);
p.drawText(this.d.msDelta.toString(),500,5,this.style);
p.drawText(p.report().toString(),5,100,this.style);
return true;
}


}