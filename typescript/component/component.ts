import IComponent from "./IComponent.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Pack from "../pack/pack.js";
import CoreProps from "./coreProps.js";
import Style from "../design/style.js";


export default class Component extends CoreProps implements IComponent{
protected style:Style; 



constructor(){
super();    
this.style = new Style(); 
}

//////////////////////////////////////////
//////////////////////////////////////////

update(msDelta :number,p :Pack):boolean{
return true;
}
draw(p :Pack):boolean{
    return true;
}

goto(atFrame :number,x :number , y :number):boolean{
    return true;
}

animate(timeFrom :number,timeTo :number,xFrom :number,xTo :number, 
    yFrom :number,yTo :number,):boolean{
        return true;
    }

}//claass