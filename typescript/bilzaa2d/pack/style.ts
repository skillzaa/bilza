import {LineCapStyle} from "./lineCapStyle.js";
import {FontNames} from "./fontNames.js";
// these are ctx valuesto be set in caseof any change in ctx
export default class Style {
//--at this frame this template will become the template of the component. every component must start with one template which can later be changed with transitions- which is just another template obj    
frameStart:number; //cant be null--
fontSize:number ;
// font:string ; //may not be req
fontName: FontNames ;
fillStyle:string ;
strokeStyle:string ;
lineWidth:number ;
shadowColor:string ;
shadowOffsetX:number ;
shadowOffsetY:number ;
shadowBlur :number ;
globalAlpha :number ;
lineDashWidth :number ;
lineDashGap :number ;
lineCap : LineCapStyle ;

constructor(frameStart :number = 0){

this.frameStart = frameStart;
// this.font = null; //may not be req
this.fontSize = 25;
this.fontName = FontNames.Luminari;
this.fillStyle = "green";
this.strokeStyle = "red";
this.lineWidth = 2;
this.shadowColor = "black";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
this.globalAlpha = 1;
this.lineCap = LineCapStyle.Round;
this.lineDashWidth = 0;
this.lineDashGap = 0;
}
merge(incom :Style){

    if (incom.lineCap !== null){
        this.lineCap = incom.lineCap;
    }
    if (incom.globalAlpha !== null){
        this.globalAlpha = incom.globalAlpha;
    }
    if (incom.shadowBlur !== null){
        this.shadowBlur = incom.shadowBlur;
    }
    if (incom.shadowOffsetY !== null){
        this.shadowOffsetY = incom.shadowOffsetY;
    }
    if (incom.shadowOffsetX !== null){
        this.shadowOffsetX = incom.shadowOffsetX;
    }
    if (incom.lineWidth !== null){
        this.lineWidth = incom.lineWidth;
    }
    if (incom.shadowColor !== null){
        this.shadowColor = incom.shadowColor;
    }
    if (incom.strokeStyle !== null){
        this.strokeStyle = incom.strokeStyle;
    }
    if (incom.fillStyle !== null){
        this.fillStyle = incom.fillStyle;
    }
    if (incom.fontSize !== null){
        this.fontSize = incom.fontSize;
    }
    if (incom.fontName !== null){
        this.fontName = incom.fontName;
    }
    if (incom.lineDashWidth !== null){
        this.lineDashWidth = incom.lineDashWidth;
    }
    if (incom.lineDashGap !== null){
        this.lineDashGap = incom.lineDashGap;
    }
}


}