import AniNumberDb from "../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniStringDb from "../animationsFacade/aniStringDb/AniStringDb.js";
import AniColorDb from  "../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/aniBooleanDb/AniBooleanDb.js";
//--This is actuall IFsacadeComp but since its for public to appropriate name

export default interface IComponent{
////////////////////////////////////////////
//--25-9-2022 -- 19 CORE props 
////////////////////////////////////////////    
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
// NOT readonly
id :string;
startTime :number;
endTime :number;
insertAction :string;
alwaysOn :boolean;
//////////////////////////
align(x : 0|1|2|null, y :0|1|2|null):void;
alignRotate(x : 0|1|2|null, y :0|1|2|null):void;

compWidth():number;
compWidthRaw():number;
compHeight():number;
compHeightRaw():number;

//--At times the width / height may not be equal to contentWidth and contentHeight so we have these functions. 
//--They will always return the correct content width/height even in case of text.
contentWidth():number;
contentWidthRaw():number;
contentHeight():number;
contentHeightRaw():number;

setRespDims(tf :boolean):boolean;
setRespLoc(tf :boolean):boolean;

getDuration():number
getStartTime(inMilliSec ?:boolean) :number;
getEndTime(inMilliSec ?:boolean) :number;


goto(atFrame :number,x :number , y :number):boolean; 

animate(secFrom :number,secTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;
///////////////////--put this in DB to end init once and for all
canvasWidth() :number;
canvasHeight() :number;
rightEdge() :number;
bottomEdge() :number;
////////////////////////////////    
setxy(x :number, y :number):void;

}
