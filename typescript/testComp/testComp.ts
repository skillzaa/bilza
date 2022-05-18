import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js"; 

export default class TestComp extends Component {
    xx :AniNumber;  
    msDelta :number;  
constructor (){
    super();
    this.xx = new AniNumber(1);
    this.msDelta = 0;
}
width(p:Pack):number {
return  0;    
}
height(p:Pack):number {
    return  0;
} 
update(msDelta: number, p: Pack): boolean {
// console.log("msDelta",msDelta);

    this.msDelta = msDelta;
    this.xx.update(msDelta);
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize =80;
p.drawText((this.msDelta/1000).toString(),this.xx.value(),5 ,this.style);

p.drawText(this.xx.value().toString(),0,150 ,this.style);
return true;
}

}