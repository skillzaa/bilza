import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js"; 

export default class TestComp extends Component {
    // xx :AniNumber;  
    // yy :AniNumber;  
    msDelta :number;  
    name :string;  
constructor (name :string){ 
    super();
    this.name = name;
    // this.xx = new AniNumber(1);
    // this.yy = new AniNumber(1);
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
    this.p.x.update(msDelta,p);
    this.p.y.update(msDelta,p);
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize = 50;
    p.drawText( this.name + " => " + Math.ceil(this.msDelta/1000).toString(),
this.p.x.value(),
this.p.y.value(),
this.style);

this.style.fontSize = 30;

p.drawText("x:" + this.p.x.value().toString(),this.p.x.value(),
this.p.y.value() + 40 ,this.style);

p.drawText("y:" + this.p.y.value().toString(),this.p.x.value()+80,
this.p.y.value() + 40 ,this.style);

return true;
}

}