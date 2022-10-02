import AniNumberDb from "../animationsFacade/AniNumberDb.js";
import AniStringDb from "../animationsFacade/AniStringDb.js";
import AniColorDb from  "../animationsFacade/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/AniBooleanDb.js";
import Time from "../EngineComponent/time.js";
import Pack from "../pack/pack.js";
//--This is actuall IFsacadeComp but since its for public to appropriate name
export default interface IComponent{
////////////////////////////////////////////
//--25-9-2022 -- 19 CORE props 
////////////////////////////////////////////    
// NOT readonly
    id :string;
    border :AniNumberDb;
    colorBackground :AniColorDb;
    colorBorder :AniColorDb;
    color :AniColorDb;
    selected: boolean;
    height :AniNumberDb;
    rotation :AniNumberDb;
    opacity :AniNumberDb;
    paddingTop    :AniNumberDb;        
    paddingBottom :AniNumberDb;         
    paddingRight  :AniNumberDb;         
    paddingLeft   :AniNumberDb;         
    showBackground :AniBooleanDb;
    visible: AniBooleanDb;
    version :string;
    width :AniNumberDb;
    x :AniNumberDb;
    y :AniNumberDb;
////////////////////////////////////////////
//--29-9-2022 -- 1 Additional props 
////////////////////////////////////////////    
//-0:for systemBg, 1-2-3 backgr,midgr,frontgr and 4: for filters
drawLayer : 0|1|2|3|4;  

xAlign  : 0|1|2;  
yAlign  : 0|1|2;  
xRotate : 0|1|2;  
yRotate : 0|1|2;  

//////////////////////////////////////////////////    
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
// setDrawLayer(drawLayerNumber :0|1|2|3|4):0|1|2|3|4;

time:Time;
///////////////////////////////////////////

}
