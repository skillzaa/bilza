import {XAlignment} from "../design/xAlignment.js";
import {YAlignment} from "../design/yAlignment.js";
import XAxis from "./animation/aniNumber/XAxis.js";
import BaseAniNumber from "./animation/aniNumber/BaseAniNumber.js";
import {Pack} from "../Bilza.js";

export default class BaseProps{
x :XAxis;
y :BaseAniNumber;
colorBoundingRectangle:string;
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

//--Alignment
xAlignment :XAlignment;
yAlignment :YAlignment;

constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
this.x= new XAxis(compWidth,compHeight);
this.y = new BaseAniNumber(compWidth,compHeight);
this.y.setValue(0);
//---flags 
this.selected = false;
this.visible = true;
//--shadow
this.shadowColor = "grey";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
//-----------
this.colorBoundingRectangle = "black";
//---Alignment
this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;
}

}//Props