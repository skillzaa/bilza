import {DrawLayer} from "../bilza.js";

import {AniNumber,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";

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
protected xAlign :XAlignOpt;
protected yAlign : YAlignOpt;

//--We have 2 values xRotate and yRotate. These 2 classes are used to align the rotate X and rotate Y coordingates of a component
protected xRotate :XAlignOpt;
protected yRotate :YAlignOpt;
//--Both of the above 2 groups of alignment classes uses the following 2 options
protected readonly XAlignOpt :typeof XAlignOpt;
protected readonly YAlignOpt :typeof YAlignOpt;
//---Every component has a random id
public readonly id :string;

// protected responsiveDims : boolean; 

private interactive : boolean; //for mouse click etc 
//--The draw layer
public drawLayer : DrawLayer; 
protected style:Style; 
//--This will be set by the engine so do not touch it.
public alwaysOn: boolean;
public readonly version :string;
// IMPLEMENTED IN ENGINE-- visible = false will not be drawn
public visible :AniBoolean;//
//--implemented in Base Component but component creator has to implement it
public rotation :AniNumber;
//--implemented in Base Component but component creator has to implement it
public opacity :AniNumber;
//--The color prop points to the color of the main content
public color :AniColor;


public width :AniNumber;
public height :AniNumber;


//--this will come in handy during using the lib with gui and while making interactive tools.
public  selected :boolean; //dont complicate

//--- Border
public border :AniNumber;        
public colorBorder :AniColor;
public borderContentArea :AniNumber;        
public colorContentAreaBorder :AniColor;

//---Padding
public paddingTop       :AniNumber;        
public paddingBottom    :AniNumber;         
public paddingRight     :AniNumber;         
public paddingLeft      :AniNumber;         
//---Loc
public x :AniNumber; 
public y :AniNumber;

//---Basic colors
public colorBackground :AniColor;
public showBackground :AniBoolean;


constructor(){
    //--insert the current version numebr into components
    this.version = "0.0.30";
    this.alwaysOn = false;
    this.XAlignOpt = XAlignOpt; //final-ok
    this.YAlignOpt = YAlignOpt; //final-ok

    this.xAlign = this.XAlignOpt.Left;
    this.yAlign = this.YAlignOpt.Top;
    
    this.xRotate = this.XAlignOpt.Left;
    this.yRotate = this.YAlignOpt.Top;
    
    this.interactive = false; // this is for mouse click etc
    
    this.width = new AniNumber(10);
    this.height = new AniNumber(10);
    
    this.rotation = new AniNumber(0);
    this.opacity = new AniNumber(100);

    this.color = new AniColor("#000000");
    
    //--must
    this.drawLayer = DrawLayer.MiddleGround;
    //--must
    this.id = Math.random().toString(36).slice(2);
    this.style = new Style(); 
///////////// 
 

//---flags-- 
this.selected = false;
this.visible = new AniBoolean(true);

//-----------Location x and y
this.x = new AniNumber(0);
this.y = new AniNumber(0);
//-----------padding
// this.responsivePadding = true;
this.paddingTop =    new AniNumber(0);
this.paddingBottom = new AniNumber(0); 
this.paddingRight =  new AniNumber(0);
this.paddingLeft  =  new AniNumber(0);
////////////
this.border  = new AniNumber(0);
this.colorBorder = new AniColor("#000000");

this.borderContentArea = new AniNumber(2);
this.colorContentAreaBorder = new AniColor("black");

this.colorBackground = new AniColor("#ffffff");
this.showBackground = new AniBoolean(false);
//..

}

//////////////////////////////////////////
//////////////////////////////////////////
// setRespPadding(tf :boolean=false):boolean{
//     if (tf == true){
//         this.paddingTop = new AniPerc(0);
//         this.paddingBottom = new AniPerc(0); 
//         this.paddingRight = new AniPerc(0);
//         this.paddingLeft  = new AniPerc(0);
//         return true;
//     } else {
//         this.paddingTop = new    AniNumber(0);
//         this.paddingBottom = new AniNumber(0); 
//         this.paddingRight = new  AniNumber(0);
//         this.paddingLeft  = new  AniNumber(0);
//         return false;
//     }       
// }
// setRespLoc(tf :boolean=true):boolean{
// const xOldVal = this.x.value();
// const yOldVal = this.y.value();
// if (tf == true){
//     this.x = new AniPerc(0);
//     this.y = new AniPerc(0);
//     this.x.set(xOldVal);
//     this.y.set(yOldVal);
//     return true;
// } else {
//     this.x = new AniNumber(0);
//     this.y = new AniNumber(0);
//     this.x.set(xOldVal);
//     this.y.set(yOldVal);
//     return false;
// }   
// }

// setRespDims(tf :boolean=true):boolean{
//     if (tf == true){
//         this.width = new AniPerc(0);
//         this.height = new AniPerc(0);
//         return true;
//     } else {
//         this.width = new AniNumber(0);
//         this.height = new AniNumber(0);
//         return false;
//     }   
// }

}//claass