import {DrawLayer,AniBoolean,AniNumber} from "../bilza.js";
import Style from "../design/style.js";

import {XAlignOpt} from "./designBC/xAlignOpt.js";
import {YAlignOpt} from "./designBC/yAlignOpt.js";


export default class BaseComponentBase{
public readonly XAlignOpt :typeof XAlignOpt;
public readonly YAlignOpt :typeof YAlignOpt;

public xAlign :XAlignOpt;
public xRotate :XAlignOpt;

public yAlign : YAlignOpt;
public yRotate :YAlignOpt;

public readonly id :string;
public usePercentages : boolean; 
public drawLayer : DrawLayer; 
public style:Style; 
public alwaysOn: boolean;
public version :string;
// IMPLEMENTED IN ENGINE-- visible = false will not be drawn
public visible :AniBoolean;//
public rotation :AniNumber;
public width :AniNumber;
public height :AniNumber;
//--this will come in handy during using the lib with gui and while making interactive tools.
public  selected :boolean;
/////////////////----PRIVATE----/////////////////// 
//---these 2 variables will be set in init
canvasWidth :number | null;    //required by all comps
canvasHeight :number | null;    //required by all comps


constructor(){
    //--insert the current version numebr into components
    this.version = "0.0.1";
    this.alwaysOn = false;
    this.XAlignOpt = XAlignOpt; //final-ok
    this.YAlignOpt = YAlignOpt; //final-ok

    this.xAlign = this.XAlignOpt.Left;
    this.yAlign = this.YAlignOpt.Top;
    
    // this.xRotate = this.XAlignOpt.Mid;
    // this.yRotate = this.YAlignOpt.Mid;
    this.xRotate = this.XAlignOpt.Left;
    this.yRotate = this.YAlignOpt.Top;
    
    // this.usePercentages = false;
    this.usePercentages = true;
    this.width = new AniNumber(10);
    this.rotation = new AniNumber(0);
    this.height = new AniNumber(10);
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
this.visible = new AniBoolean(true);

}

}//claass