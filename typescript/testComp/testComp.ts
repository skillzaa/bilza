import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js"; 

export default class TestComp extends Component {
    xx :AniNumber;  
constructor (){
    super();
    this.xx = new AniNumber(1);
}
width(p:Pack):number {
return  0;    
}
height(p:Pack):number {
    return  0;
} 
update(msDelta: number, p: Pack): boolean {
    this.xx.update(msDelta)
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize =80;
p.drawText("Test Comp",5,200,this.style);
p.drawText(this.xx.value().toString(),this.xx.value(),5 ,this.style);
return true;
}

}