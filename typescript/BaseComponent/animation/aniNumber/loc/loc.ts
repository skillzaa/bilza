import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import LocItem from "./locItem.js";
import solveX from "./solveX.js";
import solveY from "./solveY.js";
import PreInitArray from "./preInitArray.js";
import XY from "./xy.js";
import { OffScreenXOpt } from "../../../../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../../../../design/OffScreenYOpt.js";
import IFilter from "../IFilter.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrement.js";
import GotoArray from "./gotoArray.js";
import { adjestAlignX } from "./solveX.js";
export default class Loc {
private animationsX :IFilter[];   
private animationsY :IFilter[];   
private gotoArray :GotoArray[];   
//--can never be null
private _ret_data :XY;
private preInitArray :PreInitArray[];
//--------------------------------init data----------------
    protected compWidth    : null | (()=>number) ;
    protected compHeight   : null | (()=>number) ;
    protected canvasWidth  :number | null; 
    protected canvasHeight :number | null;
//--------------------------------
public readonly yAlignOpt:typeof YAlignment;   
public readonly xAlignOpt:typeof XAlignment;   
//-------------------------------------------
constructor(){
//---you get it at 0,0 now use goto    
    this._ret_data = new XY();
    this.preInitArray = [];
    this.animationsX = [];
    this.animationsY = [];
    this.gotoArray = [];
//------------------
this.compWidth = null;
this.compHeight = null;
this.canvasWidth = null;
this.canvasHeight = null;
this.yAlignOpt = YAlignment; //final-ok    
this.xAlignOpt = XAlignment; //final-ok    
//------------------
}    
init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
    this.compWidth = compWidth;  // THIS IS A FUNCTION
    this.compHeight = compHeight; // THIS IS A FUNCTION
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    //----------------------------------
    return true;
}
update(msDelta :number):boolean{
if (this.compWidth == null){throw new Error("init error");}    
this.activateFilter(msDelta);
this.runAnimationsX(msDelta);
this.runAnimationsY(msDelta);
this.runGoto(msDelta);
return true;    
}
goto(atFrame :number,x :number|OffScreenXOpt , y :number|OffScreenYOpt,xAlign :XAlignment=XAlignment.Left,yAlign :YAlignment=YAlignment.Top,xExtra :number=0,yExtra :number=0):boolean{
    let loc = new LocItem(x,y,xAlign,yAlign,xExtra,yExtra);
let c = new GotoArray(atFrame,loc);
this.gotoArray.push(c);
return true;
}
animate(timeFrom :number,timeTo :number,
    xFrom :number |OffScreenXOpt,xTo :number |OffScreenXOpt, yFrom :number|OffScreenYOpt,yTo :number |OffScreenYOpt,
    
    xAlignFrom :XAlignment=XAlignment.Left,xAlignTo :XAlignment=XAlignment.Left,yAlignFrom :YAlignment=YAlignment.Top,yAlignTo :YAlignment=YAlignment.Top,
    
    xExtraFrom :number=0,xExtraTo :number=0,yExtraFrom :number=0,yExtraTo :number=0){

const fromLocItem = new LocItem(xFrom,yFrom,xAlignFrom,yAlignFrom,xExtraFrom,yExtraFrom);
const toLocItem = new LocItem(xTo,yTo,xAlignTo,yAlignTo,xExtraTo,yExtraTo);
const c = new PreInitArray(timeFrom,timeTo,fromLocItem,toLocItem);
this.preInitArray.push(c);
// console.log("this.preInitArray", this.preInitArray);
}
x():number{   
    if (this._ret_data !== null){
        return this._ret_data.x;
    }else {
        throw new Error("init error");
    } 
}
y():number{   
    if (this._ret_data !== null){
        return this._ret_data.y;
    }else {
        throw new Error("init error");
    } 
}
//-This fn converts all the  preInitIncDecArray commands into inc dec objects during init
public initIncDec(compWidth :number,compHeight :number){
// const from = new LocItem(xFrom,yFrom,xAlignFrom,yAlignFrom,xExtraFrom,yExtraFrom);
    for (let i = 0; i < this.preInitArray.length; i++) {
        const elm = this.preInitArray[i];
        // elm.timeFrom
      this.initIncDecX(elm,compWidth);
      this.initIncDecY(elm,compHeight);
    }
// console.log("this.animationsX",this.animationsX);    
// console.log("this.animationsY",this.animationsY);    
}
public activateFilter(msDelta :number){
if (this.compWidth == null){ throw new Error("init error");}
if (this.compHeight == null){ throw new Error("init error");}
    
    for (let i = 0; i < this.preInitArray.length; i++) {
        const elm = this.preInitArray[i];
        if ( (elm.timeFrom * 1000) <= msDelta ) {
            this.initIncDecX(elm,this.compWidth());
            this.initIncDecY(elm,this.compHeight());
            this.preInitArray.splice(i,1);
        }
    }

// console.log("this.animationsX",this.animationsX);    
// console.log("this.animationsY",this.animationsY);    
}
initIncDecX(elm :PreInitArray,compWidth :number){
    const start = solveX(elm.fromLocItem,compWidth,this.canvasWidth);
    const end = solveX(elm.toLocItem,compWidth,this.canvasWidth);

    if (start < end ){
        let c = this.newIncrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsX.push(c);
    }else if (end < start  ) {
        let c = this.newDecrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsX.push(c); 
    }
}
initIncDecY(elm :PreInitArray,compHeight :number){
    const start = solveY(elm.fromLocItem,compHeight,this.canvasHeight);
    const end = solveY(elm.toLocItem,compHeight,this.canvasHeight);

    if (start < end ){
        let c = this.newIncrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsY.push(c);
    }else if (end < start  ){
        let c = this.newDecrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsY.push(c); 
    }
}
// This runs ALL THE ANIMATIONS (EACH filter is called and its value integrated )
private runAnimationsX(msDelta :number){
    for (let i = 0; i < this.animationsX.length; i++) {
        const ani = this.animationsX[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            //--place 3 of 3 where _ret_value is changed
            this._ret_data.x = v;
            // console.log("msDelta",msDelta,"value",this._ret_value);
        }
} 
}

private runGoto(msDelta :number){
if (this.compWidth == null){throw new Error("init error");}
if (this.compHeight == null){throw new Error("init error");}

    for (let i = 0; i < this.gotoArray.length; i++) {
        const gotoItem = this.gotoArray[i];
     if ( (gotoItem.atFrame * 1000) <= msDelta){
        this._ret_data.x = solveX(gotoItem.gotoLocItem,this.compWidth(),this.canvasWidth);
        this._ret_data.y = solveY(gotoItem.gotoLocItem,this.compHeight(),this.canvasHeight);
        this.gotoArray.splice(i,1); ////important remove it;
     }   
} 
}
private runAnimationsY(msDelta :number){
    for (let i = 0; i < this.animationsY.length; i++) {
        const ani = this.animationsY[i];
        // ani.init(p);
        
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            //--place 3 of 3 where _ret_value is changed
            this._ret_data.y = v;
        }
} 
}
private newIncrement(from :number,to :number,startValue :number,endValue :number):Increment{
    let c = new Increment(from,to,startValue,endValue);
    return c;   
}    
private newDecrement(from :number,to :number,startValue :number,endValue :number):Decrement{
    let c = new Decrement(from,to,startValue,endValue);
    return c;    
} 
private wobble(){
// return this._ret_data    
}
}