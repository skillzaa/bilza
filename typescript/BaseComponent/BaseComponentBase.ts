import {DrawLayer} from "../Bilza.js";
import Style from "../design/style.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";

// import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import Loc from "./animation/aniNumber/loc/loc.js";

export default class BaseComponentBase{
    public readonly id :string;//req for all components
    public drawLayer : DrawLayer; 
    public style:Style; ///--may be removed in future
    public  duration :number;
    //-----Alignment
    public readonly offScreenXOpt :typeof OffScreenXOpt;
    public readonly offScreenYOpt :typeof OffScreenYOpt;
    // public readonly yAlignmentOptions:typeof YAlignment;  
    /////////////////----PRIVATE----/////////////////// 
    protected  insertTimeInVid:number; 
    public alwaysOn: boolean;
    loc :Loc; //required by all comps

colorBoundingRectangle:string; //required by all comps
public static VERSION = "0_0_15";//required by all comps

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
visible :boolean;////just to tell people from outside??????
//--this will come in handy during using the lib with gui and while making interactive tools.
selected :boolean;
//---So every component can be draw using concrete x and Y or relative default is relative

constructor(){
    this.alwaysOn = false;
    // this.moveYArray = [];
    this.offScreenXOpt = OffScreenXOpt; //final-ok
    this.offScreenYOpt = OffScreenYOpt; //final-ok
    // this.yAlignmentOptions = YAlignment; //final-ok
    this.duration = 0; //can not be changed again even not by children comps
    this.insertTimeInVid = 0; //final-ok
    //--there is no this.endTime --since has this.endTime()
    //--must
    this.drawLayer = DrawLayer.MiddleGround;
    //--must
    this.id = Math.random().toString(36).slice(2);
    this.style = new Style(); 
/////////////    
this.loc = new Loc();

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