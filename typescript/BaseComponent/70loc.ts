import {Pack} from "../bilza.js";
import WidthHeight from "./71WidthHeight.js";

import {XAlignOpt} from "./designBC/xAlignOpt.js";
import {YAlignOpt} from "./designBC/yAlignOpt.js";

export default class Loc extends WidthHeight {
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
//--24-june 2022 removed loc for indl x and y using new AniNumber class


// aniPreset :AniPreset;

constructor (){
    super();
this.charsWidth = null;  
// this.aniPreset = new AniPreset(this);

}

draw(p: Pack): boolean {
    return true;
}



goto(atFrame: number, x: number, y: number): boolean {
this.x.goto(atFrame,x);
this.y.goto(atFrame,y);
return true;    
}
animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
}
public align(x :number | null=null, y :number| null=null){
        switch (x) {
            case 0:
            this.xAlign = XAlignOpt.Left;                   
                break;
            case 1:
            this.xAlign = XAlignOpt.Mid;                
                break;
            case 2:
            this.xAlign = XAlignOpt.Right;                
                break;
        }
        switch (y) {
            case 0:
            this.yAlign = YAlignOpt.Top;                   
                break;
            case 1:
            this.yAlign = YAlignOpt.Mid;                
                break;
            case 2:
            this.yAlign = YAlignOpt.Bot;                
                break;
        }
}
public alignRotate(x :number | null=null, y :number| null=null){
    switch (x) {
        case 0:
        this.xRotate = XAlignOpt.Left;                   
            break;
        case 1:
        this.xRotate = XAlignOpt.Mid;                
            break;
        case 2:
        this.xRotate = XAlignOpt.Right;                
            break;
    }
    switch (y) {
        case 0:
        this.yRotate = YAlignOpt.Top;                   
            break;
        case 1:
        this.yRotate = YAlignOpt.Mid;                
            break;
        case 2:
        this.yRotate = YAlignOpt.Bot;                
            break;
    }
}
xAligned():number{   
let x = this.x.value();     
switch (this.xAlign) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x - (this.compWidth()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x - this.compWidth();    
    break;
}
return x;    
}
yAligned():number{   
let y = this.y.value();     
switch (this.yAlign) {   
    case this.YAlignOpt.Top :
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y - (this.compHeight()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y - this.compHeight();    
    break;
}
return y;    
}
xRotateAligned():number{   
let x = this.xAligned();     
switch (this.xRotate) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x + (this.compWidth()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x + this.compWidth();    
    break;
}
return x;    
}
yRotateAligned():number{   
let y = this.yAligned();     
switch (this.yRotate) {   
    case this.YAlignOpt.Top :
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y + (this.compHeight()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y + this.compHeight();    
    break;
}
return y;    
}


}//component ends 