import {DrawLayer} from "../bilza.js";
import Style from "../design/style.js";
import {XAlignOpt} from "./designBC/xAlignOpt.js";
import {YAlignOpt} from "./designBC/yAlignOpt.js";
// import AniNumber from "../aniNumber/aniNumber.js";
import X from "./x.js";
import Y from "./y.js";

export default class BaseComponentBase{
    public readonly id :string;//req for all components
    public drawLayer : DrawLayer; 
    public style:Style; ///--may be removed in future
    public  duration :number;
       // public readonly yAlignmentOptions:typeof YAlignment;  
    /////////////////----PRIVATE----/////////////////// 
    protected  insertTimeInVid:number; 
    public alwaysOn: boolean;
//--6-june-2022 made it protected    
 // protected    loc :Loc; //required by all comps
//--24-june 2022 removed loc for indl x and y using new AniNumber class
public x :X; 
public y :Y;
//42-june-2022-I have decided that alignment is on base componenet just like it is in canvas element. No alignment in animation etc. cant send alignment to aniNumber since that is comps problem
public xAlign :XAlignOpt;
public yAlign :YAlignOpt;
 //-----Alignment
 public readonly XAlignOpt :typeof XAlignOpt;
 public readonly YAlignOpt :typeof YAlignOpt;

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

    this.x = new X(0);
    this.y = new Y(0);
    this.XAlignOpt = XAlignOpt; //final-ok
    this.YAlignOpt = YAlignOpt; //final-ok
    this.xAlign = this.XAlignOpt.Left;
    this.yAlign = this.YAlignOpt.Top;
    
    
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

}//Props