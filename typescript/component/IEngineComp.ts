import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Pack from "../pack/pack.js";

export default interface IEngineComp{
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
////////////////////////////////////////////
//--29-9-2022 -- 1 Additional props 
////////////////////////////////////////////    
//-0:for systemBg, 1-2-3 backgr,midgr,frontgr and 4: for filters
drawLayer : 0|1|2|3|4;  
alwaysOn : boolean;  
//////////////////////////////////////////////////    

//////////////////////////////////////////////////    
update(msDelta :number,p :Pack):boolean; //second not frame 
draw(p :Pack):boolean;
//////////////////////////////////////////
getStartTime(inSec :boolean):number;
getEndTime(inSec :boolean):number;


}
