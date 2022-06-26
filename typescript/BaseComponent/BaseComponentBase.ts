import {DrawLayer} from "../bilza.js";
import Style from "../design/style.js";

// import {YAlignOpt} from "./designBC/yAlignOpt.js";
// import AniNumber from "../aniNumber/aniNumber.js";

export default class BaseComponentBase{
    public readonly id :string;//req for all components
    public usePercentages : boolean; 
    public drawLayer : DrawLayer; 
    public style:Style; ///--may be removed in future
    public  duration :number;
       // public readonly yAlignmentOptions:typeof YAlignment;  
    /////////////////----PRIVATE----/////////////////// 
protected  insertTimeInVid:number; 
public alwaysOn: boolean;
colorBoundingRectangle:string; //required by all comps
public version :string;
//---these 2 variables will be set in init
canvasWidth :number | null;    //required by all comps
canvasHeight :number | null;    //required by all comps

//-------------shadow-------------------------//    
// shadowDisplay :boolean; //show or not -- this is abstraction
//--since it meanssss some thing and the comp need to do something.which is not desired
shadowColor :string;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;
//--flags
//--wht this?? i can make the comp invisible from inside why i need engine help?
visible :boolean;////its for users of comp  from outside??????
//--this will come in handy during using the lib with gui and while making interactive tools.
selected :boolean;
//---So every component can be draw using concrete x and Y or relative default is relative

constructor(){
    //--insert the current version numebr into components
    this.version = "0_0_18";
    this.alwaysOn = false;
    // this.usePercentages = false;
    this.usePercentages = true;
    
    this.duration = 0; //can not be changed again even not by children comps
    this.insertTimeInVid = 0; //final-ok
    //--there is no this.endTime --since has this.endTime()
    //--must
    this.drawLayer = DrawLayer.MiddleGround;
    //--must
    this.id = Math.random().toString(36).slice(2);
    this.style = new Style(); 
///////////// 

this.canvasWidth = null;    
this.canvasHeight = null;    

//---flags--//--\\ 
this.selected = false;
this.visible = true;
//--shadow
this.shadowColor = "grey";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
//-----------
this.colorBoundingRectangle = "black";

}
shadowsOff(){
this.style.shadowBlur = 0;
this.style.shadowOffsetX = 0;
this.style.shadowOffsetY = 0;
}
setShadow(shadowBlur :number=8,shadowOffsetX :number=10,shadowOffsetY :number =10,shadowColor :string ="grey"){
this.style.shadowBlur = shadowBlur;
this.style.shadowOffsetX = shadowOffsetX;
this.style.shadowOffsetY = shadowOffsetY;
this.style.shadowColor = shadowColor;
}
shadowsOn(){
    this.style.shadowBlur = 8;
    this.style.shadowOffsetX = 10;
    this.style.shadowOffsetY = 10;
    this.style.shadowColor = "grey";
}

getEndTime(inMilliSec :boolean = true) :number{
let r = this.insertTimeInVid + this.duration; //both r in sec
return inMilliSec ? (r * 1000) : r;
}
getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;    
}
setStartTime(n :number):number{
this.insertTimeInVid = n;
return this.insertTimeInVid;
}
}//claass