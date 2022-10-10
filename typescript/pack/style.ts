import {LineCapStyle} from "./lineCapStyle.js";
import {FontFamily} from "./fontFamily.js";
// these are ctx valuesto be set in caseof any change in ctx
export default class Style {
//---13 prop    
fontSize:number ;
fontFamily: FontFamily ;
fillStyle:string ;
strokeStyle:string ;
lineWidth:number ;
shadowColor:string ;
shadowOffsetX:number ;
shadowOffsetY:number ;
shadowBlur :number ;
opacity :number ;
lineCap  :"butt" | "square" | "round";    
lineJoin : "round" | "bevel" | "miter";    
lineDash :[line:number, gap:number];
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
constructor(){ 
    //-13 PROPS
//---font 2 varables -total 2
this.fontSize = 25;
this.fontFamily = FontFamily.Luminari;
//---color 2 varables -total 4
this.fillStyle = "green";
this.strokeStyle = "red";
//---shadow 4 varables -total 8
this.shadowColor = "black";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
//---opacity 1 varables -total 9
this.opacity = 100;
//---line 4 varables -total 13
this.lineCap =  "round";
this.lineWidth = 2;
this.lineDash = [1,0];
this.lineJoin =   "miter";
} 
// This merge fn merges 2 Style object --where as the commitCtxData fn in pack merges a style with actual ctx saved in pack.
//--the commitCtxData fn of the pack is coupling of my style data and ctx
merge(incom :Style){//---12 prop excl msStart
//--1    
    if (incom.lineCap !== null){
        this.lineCap = incom.lineCap;
    }
//--2    
    if (incom.opacity !== null){
        this.opacity = incom.opacity;
    }
//--3    
    if (incom.shadowBlur !== null){
        this.shadowBlur = incom.shadowBlur;
    }
//--4    
    if (incom.shadowOffsetY !== null){
        this.shadowOffsetY = incom.shadowOffsetY;
    }
//--5    
    if (incom.shadowOffsetX !== null){
        this.shadowOffsetX = incom.shadowOffsetX;
    }
//--6    
    if (incom.lineWidth !== null){
        this.lineWidth = incom.lineWidth;
    }
//--7    
    if (incom.shadowColor !== null){
        this.shadowColor = incom.shadowColor;
    }
//--8
    if (incom.strokeStyle !== null){
        this.strokeStyle = incom.strokeStyle;
    }
//--9
    if (incom.fillStyle !== null){
        this.fillStyle = incom.fillStyle;
    }
//--10    
    if (incom.fontSize !== null){
        this.fontSize = incom.fontSize;
    }
//--11    
    if (incom.fontFamily !== null){
        this.fontFamily = incom.fontFamily;
    }
//--12    
    if (incom.lineDash !== null){
        this.lineDash = incom.lineDash;
    }
//--13    
    if (incom.lineJoin !== null){
        this.lineJoin = incom.lineJoin;
    }
   
}


}