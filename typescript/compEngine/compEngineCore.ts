import {AniNumber,AniBoolean,AniString,AniColor} from "../animations/animations.js";
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

protected _canvasWidth :number; 
protected _canvasHeight :number; 

protected style:Style; 
public time :Time | null;

//--strange line
public charsWidth:((chars:string,fontSize:number,fontName:string)=>number) ;

////////////////////////////////
constructor(corePropsDb :CorePropsDb , pack :Pack){

//--Basic must props (Compunent API)
this.charsWidth = pack.charsWidth;
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
this.border = new AniNumber(0);
this.border.set(corePropsDb.border.value());

// this.color = corePropsDb.color.getEngineProp();
this.color = new AniColor("black");
// this.color.set(corePropsDb.color.value());

this.colorBackground = new AniColor("white");
this.colorBackground.set(corePropsDb.colorBackground.value());

this.colorBorder = new AniColor("black");
this.colorBorder.set(corePropsDb.colorBorder.value());


this.drawLayer = corePropsDb.drawLayer;

this.height = new AniNumber(10);
this.height.set(corePropsDb.height.value());
this.opacity = new AniNumber(100);
this.opacity.set(corePropsDb.opacity.value());

this.paddingTop = new AniNumber(0);
this.paddingTop.set(corePropsDb.paddingTop.value());
this.paddingBottom = new AniNumber(0);
this.paddingBottom.set(corePropsDb.paddingBottom.value());
this.paddingRight = new AniNumber(0);
this.paddingRight.set(corePropsDb.paddingRight.value());
this.paddingLeft = new AniNumber(0);
this.paddingLeft.set(corePropsDb.paddingLeft.value());

this.rotation = new AniNumber(0);
this.rotation.set(corePropsDb.rotation.value());
this.selected = false; //-----? 


this.showBackground = new AniBoolean(false);
this.showBackground.set(corePropsDb.showBackground.value());
this.visible = new AniBoolean(true);
///---visisible in DB?????
this.version = corePropsDb.version ;

this.width = new AniNumber(10);
this.width.set(corePropsDb.width.value());


this.x = new AniNumber(0);
// this.x.set(corePropsDb.x.value());
// this.x = corePropsDb.x.getEngineProp();


this.y = new AniNumber(0);
this.xAlign = (corePropsDb.xAlign );
this.yAlign = corePropsDb.yAlign;
this.y.set(corePropsDb.y.value());

this.xRotate = corePropsDb.xRotate;
this.yRotate = corePropsDb.yRotate;


//////////////
this.drawLayer =  2;  
//--caused me 1 hour
//   
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