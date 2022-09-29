import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Pack from "../pack/pack.js";

export default interface IComponent{
////////////////////////////////////////////
//--25-9-2022 -- 19 CORE props 
////////////////////////////////////////////    
    readonly id :string;
    border :AniNumber;
    colorBackground :AniColor;
    colorBorder :AniColor;
    color :AniColor;
    selected: boolean;
    height :AniNumber;
    rotation :AniNumber;
    opacity :AniNumber;
    paddingTop    :AniNumber;        
    paddingBottom :AniNumber;         
    paddingRight  :AniNumber;         
    paddingLeft   :AniNumber;         
    showBackground :AniBoolean;
    visible: AniBoolean;
    version :string;
    width :AniNumber;
    x :AniNumber;
    y :AniNumber;


    //////////////////////////////////////////////////    
update(msDelta :number,p :Pack):boolean; //second not frame 
draw(p :Pack):boolean;
//////////////////////////////////////////


goto(atFrame :number,x :number , y :number):boolean; 

animate(timeFrom :number,timeTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;
}
