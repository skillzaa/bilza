import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import Pack from "../pack/pack.js";
//--This is actuall IFsacadeComp but since its for public to appropriate name
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
////////////////////////////////////////////
//--29-9-2022 -- 1 Additional props 
////////////////////////////////////////////    
//-0:for systemBg, 1-2-3 backgr,midgr,frontgr and 4: for filters
drawLayer : 0|1|2|3|4;  
//////////////////////////////////////////////////    
////////////////////////////////////////////
//--29-9-2022 -- 16 Public Methods 
//////////////////////////////////////////////////    
//---not required in facade
// update(msDelta :number,p :Pack):boolean; //second not frame 
// draw(p :Pack):boolean;

align(x:number,y:number):void;
alignRotate(x:number,y:number):void;

compWidth():number;
compWidthPix():number;

compHeight():number;
compHeightPix():number;

contentWidth():number;
contentWidthPix():number;

contentHeight():number;
contentHeightPix():number;
///////////////////////////////////////////
//---Component Timings
//---should not be available to user
// setTimings(startSec :number,endSec:number):number

getDuration():number
getStartTime(inMilliSec ?:boolean) :number;
getEndTime(inMilliSec ?:boolean) :number;


goto(atFrame :number,x :number , y :number):boolean; 

animate(secFrom :number,secTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;
///////////////////////////////////////////
// charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);

}
