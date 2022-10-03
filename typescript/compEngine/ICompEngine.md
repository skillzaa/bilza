import {AniNumber,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
import Pack from "../pack/pack.js";
import Time from "./time.js";
// import ComponentPack from "../componentPack/componentPack.js";

export default interface IEngineComponent{
////////////////////////////////////////////
//--25-9-2022 -- 19 CORE props 
////////////////////////////////////////////    
    
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
 
xAlign  : 0|1|2;  
yAlign  : 0|1|2;  
xRotate : 0|1|2;  
yRotate : 0|1|2;  


//////////////////////////////////////////////////    
// important init props
//////////////////////////////////////////////////    
id :string | null;
charsWidth:((chars:string,fontSize:number,fontName:string)=>number) | null  ;

startTime  :  number | null;
endTime    :  number | null;
_canvasHeight : number | null;
_canvasWidth : number | null;
insertAction :string | null;




//////////////////////////////////////////////////    
update(msDelta :number,p :Pack):boolean; //second not frame 
draw(p :Pack):boolean;
//////////////////////////////////////////
time:Time | null; //time obj will provide fol methods

// getStartTime(inSec :boolean):number;
// getEndTime(inSec :boolean):number;


}
