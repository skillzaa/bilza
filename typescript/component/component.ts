import IEngineComp from "./IEngineComp.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Pack from "../pack/pack.js";
import CoreProps from "./coreProps.js";
import Style from "../design/style.js";


export default class Component extends CoreProps implements IEngineComp{
protected style:Style; 



constructor(){
super();    
this.style = new Style(); 
}

//////////////////////////////////////////
//////////////////////////////////////////

public update(msDelta :number,p :Pack):boolean{
return true;
}
public draw(p :Pack):boolean{
    return true;
}

public goto(atFrame :number,x :number , y :number):boolean{
    return true;
}

public animate(timeFrom :number,timeTo :number,xFrom :number,xTo :number, 
    yFrom :number,yTo :number,):boolean{
        return true;
}

public getStartTime(inSec :boolean):number{
    return 0;
}

public getEndTime(inSec :boolean):number{
    return 60;
}

///////////////////protected 
///////////////////protected 
///////////////////protected 
///////////////////protected 
protected preDraw(p :Pack){
    
}
protected postDraw(p :Pack){

}
protected contentX():number{return 0;}
protected contentY():number{return 0;}
///////////////////////////////////////////    
}//claass