import {AniNumber,AniBoolean,AniString,AniPerc, AniColor} from "../animations/animations.js";
import Time from "./time.js";
import Style from "../pack/style.js";
import CorePropsDb from "../compDb/corePropsDb.js";
import Pack from "../pack/pack.js";
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
public height :AniPerc;
public rotation :AniNumber;
public opacity :AniNumber;
public paddingTop    :AniPerc;        
public paddingBottom :AniPerc;         
public paddingRight  :AniPerc;         
public paddingLeft   :AniPerc;         
public showBackground :AniBoolean;
public visible: AniBoolean;
public version :string;
public width :AniPerc;
public x :AniPerc;
public y :AniPerc;
/////////////////////
public drawLayer : 0|1|2|3|4; 
public alwaysOn : boolean; 

public xAlign  : 0|1|2;  
public yAlign  : 0|1|2;  
public xRotate : 0|1|2;  
public yRotate : 0|1|2;  

////////////////////////////init props
public id:string;

protected _canvasWidth :number; 
protected _canvasHeight :number; 

protected style:Style; 
public time :Time | null;

//--strange line
public charsWidth:((chars:string,fontSize:number,fontName:string)=>number) ;

////////////////////////////////
constructor(corePropsDb :CorePropsDb , pack :Pack){

//--Basic must props (Compunent API)
this.charsWidth = pack.charsWidth.bind(pack);
this._canvasWidth = pack.canvasWidth();
this._canvasHeight = pack.canvasHeight();
////////////////////////////////////////
this.id = corePropsDb.id;

if (corePropsDb.insertAction == "alwaysOn"){
    this.time = new Time(0,1);
    this.alwaysOn = true;
}else {
    this.time = new Time( corePropsDb.startTime ,corePropsDb.endTime);
    this.alwaysOn =  false;
}

this.style = new Style(); 


///////////////////////////animated core props
/////////////////--Animated Props
this.border = new AniNumber(corePropsDb.border);

this.color = new AniColor(corePropsDb.color);

this.colorBackground = new AniColor(corePropsDb.colorBackground);

this.colorBorder = new AniColor(corePropsDb.colorBorder);

this.drawLayer = corePropsDb.drawLayer;

this.height = new AniPerc(corePropsDb.height);

this.opacity = new AniNumber(corePropsDb.opacity);

this.paddingTop = new AniPerc(corePropsDb.paddingTop);

this.paddingBottom = new AniPerc(corePropsDb.paddingBottom);

this.paddingRight = new AniPerc(corePropsDb.paddingRight);

this.paddingLeft = new AniPerc(corePropsDb.paddingLeft);

this.rotation = new AniNumber(corePropsDb.rotation);

this.selected = false; //-----? 

this.showBackground = new AniBoolean(corePropsDb.showBackground);

this.visible = new AniBoolean(corePropsDb.visible);

this.version = corePropsDb.version ;

this.width = new AniPerc( corePropsDb.width );

this.x = new AniPerc( corePropsDb.x );
this.y = new AniPerc( corePropsDb.y );
// this.y.set(corePropsDb.y.value());
this.xAlign = (corePropsDb.xAlign );
this.yAlign = corePropsDb.yAlign;

this.xRotate = corePropsDb.xRotate;
this.yRotate = corePropsDb.yRotate;

///////////////////////
///////////////////////
///////////////////////
}
/////////////////////////////////////////////////////    
}