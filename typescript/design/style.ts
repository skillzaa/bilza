import {LineCapStyle} from "./lineCapStyle.js";
import {FontFamily} from "./fontFamily.js";
// these are ctx valuesto be set in caseof any change in ctx
export default class Style {
//---13 prop    
applyAtMs:number; //cant be null--
fontSize:number ;
fontFamily: FontFamily ;
fillStyle:string ;
strokeStyle:string ;
lineWidth:number ;
shadowColor:string ;
shadowOffsetX:number ;
shadowOffsetY:number ;
shadowBlur :number ;
globalAlpha :number ;
lineCap : LineCapStyle ;
lineDash :number[];

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
constructor(applyAtMs :number = 0){

this.applyAtMs = applyAtMs;
this.fontSize = 25;
this.fontFamily = FontFamily.Luminari;
this.fillStyle = "green";
this.strokeStyle = "red";
this.lineWidth = 2;
this.shadowColor = "black";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
this.globalAlpha = 1;
this.lineCap = LineCapStyle.Round;
this.lineDash = [];
} 
// This merge fn merges 2 Style object --where as the commitCtxData fn in pack merges a style with actual ctx saved in pack.
//--the commitCtxData fn of the pack is coupling of my style data and ctx
merge(incom :Style){//---12 prop excl msStart
//--1    
    if (incom.lineCap !== null){
        this.lineCap = incom.lineCap;
    }
//--2    
    if (incom.globalAlpha !== null){
        this.globalAlpha = incom.globalAlpha;
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
   
}


}