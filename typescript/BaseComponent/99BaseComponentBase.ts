import {DrawLayer,AniBoolean,AniNumber,AniNoPerc,AniColor} from "../bilza.js";
/**
 * Reviewed on 14-july-2022 == > In future I may need to break base component class into 2. one facing the engine and other facing the child classes.
 */
//--Every base component has one Style that it uses for every thing.
//--if a comp wants it can create another style class and use it internally.
import Style from "../design/style.js";

import {XAlignOpt} from "./designBC/xAlignOpt.js";
import {YAlignOpt} from "./designBC/yAlignOpt.js";


export default class BaseComponentBase{

//--We have 2 values xAlign , yAlign. These 2 classes are used to align the X and Y coordingates of a component
public xAlign :XAlignOpt;
public yAlign : YAlignOpt;

//--We have 2 values xRotate and yRotate. These 2 classes are used to align the rotate X and rotate Y coordingates of a component
public xRotate :XAlignOpt;
public yRotate :YAlignOpt;
//--Both of the above 2 groups of alignment classes uses the following 2 options
public readonly XAlignOpt :typeof XAlignOpt;
public readonly YAlignOpt :typeof YAlignOpt;
//---Every component has a random id
public readonly id :string;

//---the coordinates may use raw pixels
public responsiveCoordinates : boolean;
//---the paddings may use raw pixels
public responsivePadding : boolean; 

public interactive : boolean; //for mouse click etc 
//--The draw layer
public drawLayer : DrawLayer; 
public style:Style; 
//--This will be set by the engine so do not touch it.
public alwaysOn: boolean;
public version :string;
// IMPLEMENTED IN ENGINE-- visible = false will not be drawn
public visible :AniBoolean;//
//--implemented in Base Component but component creator has to implement it
public rotation :AniNumber;
//--implemented in Base Component but component creator has to implement it
public opacity :AniNumber;
//--The color prop points to the color of the main content
public color :AniColor;
//-- This will always be implemented in some special cases like text which uses fontSize this will represent fontSize. However this will be used in 100% of the components
public width :AniNumber; // no need to convert it into AniNoPers
//--same as width
public height :AniNumber;// no need to convert it into AniNoPers
//--this will come in handy during using the lib with gui and while making interactive tools.
public  selected :boolean; //dont complicate

//---PAdding and Border
public border :AniNumber;         
public paddingTop :AniNoPerc;        
public paddingBottom :AniNoPerc;         
public paddingRight :AniNoPerc;         
public paddingLeft : AniNoPerc;         

//---Basic colors
public colorBackground :AniColor;
public colorBorder :AniColor;
public showBackground :AniBoolean;

/////////////////----PRIVATE----/////////////////// 
//---these 2 variables will be set in init
canvasWidth :number | null;    //required by all comps
canvasHeight :number | null;    //required by all comps
//---
constructor(){
    //--insert the current version numebr into components
    this.version = "0.0.1";
    this.alwaysOn = false;
    this.XAlignOpt = XAlignOpt; //final-ok
    this.YAlignOpt = YAlignOpt; //final-ok

    this.xAlign = this.XAlignOpt.Left;
    this.yAlign = this.YAlignOpt.Top;
    
    this.xRotate = this.XAlignOpt.Left;
    this.yRotate = this.YAlignOpt.Top;
    
    // this.usePercentages = false;
    this.responsiveCoordinates = true;
    this.responsivePadding = true;
    this.interactive = false; // this is for mouse click etc
    this.border = new AniNumber(0);
    this.width = new AniNumber(10);
    this.rotation = new AniNumber(0);
    this.opacity = new AniNumber(100);
    this.height = new AniNumber(10);
    this.color = new AniColor("#000000");
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
//-----------padding
this.paddingTop = new AniNoPerc(0);
this.paddingBottom = new AniNoPerc(0); 

this.paddingRight = new AniNoPerc(0);
this.paddingLeft  = new AniNoPerc(0);
////////////
this.border  = new AniNumber(0);


this.colorBackground = new AniColor("#ffffff");
this.colorBorder = new AniColor("#000000");
this.showBackground = new AniBoolean(false);

}
}//claass