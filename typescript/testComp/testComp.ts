import {Pack} from "../Bilza.js";
import Component from "../BaseComponent/BaseComponent.js";
import AnimatedNoBase from "../BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";

export default class TestComp extends Component {
    msDelta :number;  
    // xx :AnimatedNoBase;  
    // yy :AnimatedNoBase;  
    name :string;  
constructor (name :string){ 
    super();
    // this.xx = new AnimatedNoBase(0);
    // this.yy = new AnimatedNoBase(0);
    this.name = name;
    this.msDelta = 0;
}
init(p: Pack): boolean {
    super.init(p);
    return true;
}

//--move this code to base comp 
update(msDelta: number,p :Pack): boolean {
    super.update(msDelta,p);
    this.msDelta = msDelta;
    // this.p.x.update(msDelta);
    // this.p.y.update(msDelta);
    return true;
}

draw(p:Pack):boolean{    
this.style.fontSize = 50;

p.drawText( this.name + "=>" + Math.ceil(this.msDelta/1000).toString(),
this.p.loc.x(),this.p.loc.y(),
this.style);

return true;
}

}