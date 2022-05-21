import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";

export default class TestComp extends Component {
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
return  200;    
}
height(p:Pack):number {
    return  100;
} 
update(msDelta: number): boolean {
// console.log("msDelta",msDelta);

    this.msDelta = msDelta;
    this.p.x.update(msDelta);
    // this.p.y.update(msDelta,p);
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize = 50;
    p.drawText( this.name + " => " + Math.ceil(this.msDelta/1000).toString(),
this.p.x.value(),
40,
this.style);

this.style.fontSize = 30;

p.drawText("x:" + this.p.x.value().toString(),this.p.x.value(),
80 ,this.style);

p.drawText("y:" ,this.p.x.value()+80, 80 ,this.style);

return true;
}

}