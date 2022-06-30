import {DrawLayer,XAlignOpt,YAlignOpt} from "../bilza.js";
import Style from "../design/style.js";

export default class BaseComponentBase{
public readonly XAlignOpt :typeof XAlignOpt;
public readonly YAlignOpt :typeof YAlignOpt;
public  readonly id :string;
public  usePercentages : boolean; 
public  drawLayer : DrawLayer; 
public  style:Style; 
public  alwaysOn: boolean;
public  version :string;
public  visible :boolean;//--? not implemented yet??
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

    // this.usePercentages = false;
    this.usePercentages = true;
    
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

}

}//claass