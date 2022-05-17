import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
 
export default class TestComp extends Component {
    msDelta :number;  
constructor (){
    super();
    this.msDelta =0;
}
width(p:Pack):number {
return  0;    
}
height(p:Pack):number {
    return  0;
}
update(msDelta: number, p: Pack): boolean {
    this.msDelta = msDelta;
    return true;
}
draw(p:Pack):boolean{
    this.style.fontSize =80;
    p.drawText("Test Comp",5,200,this.style);
p.drawText(this.msDelta.toString(),this.p.x,5 ,this.style);
return true;
}

}