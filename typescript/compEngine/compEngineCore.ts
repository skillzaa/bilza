import {AniNumber,AniBoolean,AniString,AniColor} from "../animations/animations.js";
import Time from "./time.js";
import Style from "../pack/style.js";
/////////////////////////////////////////////////////////
export default class EngineCompCore {
////////////////////////////////////////////
//--30-9-2022 -- 21 CORE props 
////////////////////////////////////////////     

public border :AniNumber;
public colorBackground :AniColor;
public colorBorder :AniColor;
public color :AniColor;
public selected: boolean;
public height :AniNumber;
public rotation :AniNumber;
public opacity :AniNumber;
public paddingTop    :AniNumber;        
public paddingBottom :AniNumber;         
public paddingRight  :AniNumber;         
public paddingLeft   :AniNumber;         
public showBackground :AniBoolean;
public visible: AniBoolean;
public version :string;
public width :AniNumber;
public x :AniNumber;
public y :AniNumber;
/////////////////////
public drawLayer : 0|1|2|3|4; 
public alwaysOn : boolean; 

public xAlign  : 0|1|2;  
public yAlign  : 0|1|2;  
public xRotate : 0|1|2;  
public yRotate : 0|1|2;  

////////////////////////////init props
public id:string | null;
public insertAction:string | null;
public startTime :number | null; 
public endTime :number | null; 

_canvasWidth :number | null; 
_canvasHeight :number | null; 

protected style:Style; 
public time :Time | null;

//--strange line
public charsWidth:((chars:string,fontSize:number,fontName:string)=>number) | null  ;

////////////////////////////////
constructor(){

//--Basic must props (Compunent API)
this.id = null;
this.charsWidth = null;
this.startTime = 0;
this.endTime = 0;
this.time = null;
this._canvasWidth = null;
this._canvasHeight = null;
//--keep for now
this.insertAction = "";

this.style = new Style(); 


///////////////////////////animated core props
this.border = new AniNumber(0);
this.colorBackground = new AniColor("white");
this.colorBorder = new AniColor("black");
this.color = new AniColor("black");
this.height = new AniNumber(10);
this.opacity = new AniNumber(100);
this.paddingTop = new AniNumber(0);
this.paddingBottom = new AniNumber(0);
this.paddingRight = new AniNumber(0);
this.paddingLeft = new AniNumber(0);
this.rotation = new AniNumber(0);
this.selected = false;
this.showBackground = new AniBoolean(false);
this.visible = new AniBoolean(true);
this.version = "0.1.2";
this.width = new AniNumber(10);
this.x = new AniNumber(0);
this.y = new AniNumber(0);
//////////////
this.drawLayer =  2;  
this.alwaysOn =  false;  
this.xAlign =0;
this.yAlign =0;
this.xRotate =0;
this.yRotate =0;

///////////////////////componentPack
}


/////////////////////////////////////////////////////    
}