import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AnimatedNoBase from "../BaseComponent/animation/aniNumber/AnimatedNoBase.js";

export default class TestComp extends Component {
    msDelta :number;  
    xx :AnimatedNoBase;  
    yy :AnimatedNoBase;  
    name :string;  
constructor (name :string){ 
    super();
    this.xx = new AnimatedNoBase(0);
    this.yy = new AnimatedNoBase(0);
    this.name = name;
    this.msDelta = 0;
}
init(p: Pack): boolean {
    this.xx.init();
    this.yy.init();
    return true;
}
width(p:Pack):number {
return  200;    
}
height(p:Pack):number {
    return  100;
}
//--move this code to base comp 
update(msDelta: number,p :Pack): boolean {
    this.msDelta = msDelta;
    this.xx.update(msDelta);
    this.yy.update(msDelta);
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize = 50;

p.drawText( this.name + "=>" + Math.ceil(this.msDelta/1000).toString(),
this.xx.value(),this.yy.value(),
this.style);

return true;
}

}