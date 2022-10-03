import {AniNumber,AniBoolean,AniString,AniColor} from "../animations/animations.js";
import Time from "./time.js";
import Style from "../pack/style.js";
import CompDb from "../compDb/compDb.js";
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
public id:string;

private _canvasWidth :number; 
private _canvasHeight :number; 

protected style:Style; 
public time :Time | null;

//--strange line
public charsWidth:((chars:string,fontSize:number,fontName:string)=>number) ;

////////////////////////////////
constructor(compDb :CompDb,pack :Pack){

//--Basic must props (Compunent API)
this.charsWidth = pack.charsWidth;
this._canvasWidth = pack.canvasWidth();
this._canvasHeight = pack.canvasHeight();
////////////////////////////////////////
this.id = compDb.id;

if (compDb.insertAction == "alwaysOn"){
    this.time = new Time(0,1);
    this.alwaysOn = true;
}else {
    this.time = new Time( compDb.startTime ,compDb.endTime);
}

this.style = new Style(); 


///////////////////////////animated core props
/////////////////--Animated Props
this.border = new AniNumber(0);
this.border.set(compDb.border.value());

this.color = new AniColor("black");
this.color.set(compDb.color.value());

this.colorBackground = new AniColor("white");
this.colorBackground.set(compDb.colorBackground.value());

this.colorBorder.set(compDb.colorBorder.value());
this.colorBorder = new AniColor("black");


this.drawLayer = compDb.drawLayer;

this.height = new AniNumber(10);
this.height.set(compDb.height.value());
this.opacity = new AniNumber(100);
this.opacity.set(compDb.opacity.value());

this.paddingTop = new AniNumber(0);
this.paddingTop.set(compDb.paddingTop.value());
this.paddingBottom = new AniNumber(0);
this.paddingBottom.set(compDb.paddingBottom.value());
this.paddingRight = new AniNumber(0);
this.paddingRight.set(compDb.paddingRight.value());
this.paddingLeft = new AniNumber(0);
this.paddingLeft.set(compDb.paddingLeft.value());

this.rotation = new AniNumber(0);
this.rotation.set(compDb.rotation.value());
this.selected = false; //-----? 


this.showBackground = new AniBoolean(false);
this.showBackground.set(compDb.showBackground.value());
this.visible = new AniBoolean(true);
///---visisible in DB?????
this.version = compDb.version ;

this.width = new AniNumber(10);
this.width.set(compDb.width.value());
this.x = new AniNumber(0);
this.x.set(compDb.x.value());
this.y = new AniNumber(0);
this.xAlign = (compDb.xAlign );
this.yAlign = compDb.yAlign;
this.y.set(compDb.y.value());

this.xRotate = compDb.xRotate;
this.yRotate = compDb.yRotate;


//////////////
this.drawLayer =  2;  
this.alwaysOn =  false;  
this.xAlign =0;
this.yAlign =0;
this.xRotate =0;
this.yRotate =0;


///////////////////////
///////////////////////
///////////////////////

}


/////////////////////////////////////////////////////    
}