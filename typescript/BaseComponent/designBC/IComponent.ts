import {DrawLayer,Pack,Style} from "../../bilza.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animationModule/animations.js";
/**
 * An IComponent is used and drawn. All the logic inside it has be deal with update and drawing- no business logic etc inside. That will come when we build systems.
 * The components needs to be like lego pieces exposing just this.xyz and reacting to that.
 */
export default interface IComponent{

//-----Public Properties
    readonly id :string;

    drawLayer : DrawLayer; 
    // duration :number;
    alwaysOn: boolean;
    selected: boolean;
    visible: AniBoolean;
    version :string;
/**
 * 30-july-2022 : added since now all those component which implement this can be widened and shortened (scaled) using width.animate height.animate.
 */
    width :AniNumber ;
    height :AniNumber;
    x :AniNumber ;
    y :AniNumber ;
    border :AniNumber;
    rotation :AniNumber;
    opacity :AniNumber;
    showBackground :AniBoolean;
    colorBackground :AniColor;
    colorBorder :AniColor;
    color :AniColor;

//-----Public Objects
    // style:Style; 
////////////////////////////////////////
// usePercentages is used in xy module and entire system is built around it. It means that using percentages OR pixes both are possible in all components.

// setRespPadding(tf :boolean):boolean;
// setRespDims(tf :boolean):boolean;
// setRespLoc(tf :boolean):boolean;    
//=============--- METHODS--------    
//---28-june-2022 --Basic methods
//--30-june-2022 the user should not see init. This is just for the engine and for component creator --??? what to do aboit it? i may need 2 interfaces
init(p :Pack):boolean; 
align(x:number,y:number):void;
alignRotate(x:number,y:number):void;
update(msDelta :number,p :Pack):boolean; //second not frame 

draw(p :Pack):boolean;
/**
 *--30-june-2022 : widthInPix and heightInPix added.
 From now on there is not confusion. "width" and "height" (IF APPLIED BY THE COMPONENT) are both aniNumber| AniPerc where as the fol methods will just return the size of comp in pix
 */
compWidth():number;
compHeight():number;
///////////28-june-2022/////////// 
//-- This is one function reference that it gets so that it can directly access one function of the main "bilza" pack object.
//-- There can be more such functions but those functions can not make breaking changes just get information from rest of the system.
//-- I think there is no problem in a component getting information from the engine through function references as long as those functions just return information and MUST NOT HAVE SIDE EFFECTS inside engine. However after getting the information the component can make its own decisions.
//--Keep in mind a comp can only do one thing and that is to DRAW and nothing else.
///////////28-june-2022///////////
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);

//---Component Timings
setTimings(startFrame :number,endFrame:number):number

getDuration():number
getStartTime(inMilliSec ?:boolean) :number;
getEndTime(inMilliSec ?:boolean) :number;


goto(atFrame :number,x :number , y :number):boolean; 

animate(timeFrom :number,timeTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;
}
