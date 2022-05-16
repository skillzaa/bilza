import {Pack} from "../../Bilza.js";
import Component from "../../compsMod/BaseComponent/Basecomponent.js";
import DataFn,{ObjectData} from "./DataFn.js";
 
export default class TestComp extends Component<ObjectData> {
 
constructor (duration:number=300){
    super(DataFn);
}
width(p:Pack):number {
return  0;    
}
height(p:Pack):number {
    return  0;
}
update(msDelta: number, p: Pack): boolean {
    this.d.msDelta = msDelta;
    return true;
}
draw(p:Pack):boolean{
    this.style.fontSize =80;
    p.drawText("Test Comp",5,5,this.style);
p.drawText(this.d.msDelta.toString(),this.d.xx.value() ,5 ,this.style);
return true;
}


}