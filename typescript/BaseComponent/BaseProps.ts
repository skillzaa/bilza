
import XAxis from "./animation/aniNumber/xAxis/xAxis.js";
import YAxis from "./animation/aniNumber/yAxis/yAxis.js";
import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
// import YAxis from "./animation/aniNumber/YAxis.js";

import {Pack} from "../Bilza.js";

export default class BaseProps{
x :XAxis;
y :YAxis;
colorBoundingRectangle:string;

widthDyn :AnimatedNoBase;    
heightDyn :AnimatedNoBase;    
//---these 2 variables will be set in init
canvasWidth :number | null;    
canvasHeight :number | null;    

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

constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
this.x= new XAxis(0);
this.y = new YAxis(0);
// this.y.setValue(0);

this.widthDyn = new AnimatedNoBase(10);    
this.heightDyn = new AnimatedNoBase(10);    
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