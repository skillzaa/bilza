import AniNumberDb from "../animationsFacade/AniNumberDb.js";
import AniStringDb from "../animationsFacade/AniStringDb.js";
import AniColorDb from  "../animationsFacade/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/AniBooleanDb.js";
//--This is actuall IFsacadeComp but since its for public to appropriate name

export default interface ICompDb{
////////////////////////////////////////////
//--29-9-2022 -- 16 Public Methods 
//////////////////////////////////////////////////    
//---not required in facade
// update(msDelta :number,p :Pack):boolean; //second not frame 
// draw(p :Pack):boolean;
 
align(x : 0|1|2|null, y :0|1|2|null):void;
alignRotate(x : 0|1|2|null, y :0|1|2|null):void;

compWidth():number;
compWidthPix():number;

compHeight():number;
compHeightPix():number;

contentWidth():number;
contentWidthPix():number;

contentHeight():number;
contentHeightPix():number;
getDuration():number
getStartTime(inMilliSec ?:boolean) :number;
getEndTime(inMilliSec ?:boolean) :number;


goto(atFrame :number,x :number , y :number):boolean; 

animate(secFrom :number,secTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;
///////////////////////////////////////////

}
