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

export default class Loc {
private animationsX :IFilter[];   
private animationsY :IFilter[];   
private _ret_data :XY;
private _set_data :LocItem | null;
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
constructor(x :number | OffScreenXOpt,y :number |OffScreenYOpt, xAlign :XAlignment = XAlignment.Left, yAlign :YAlignment = YAlignment.Top,xExtra :number=0,yExtra :number = 0){
    this._ret_data = new XY(0,0);
    this._set_data = new LocItem(x,y,xAlign,yAlign,xExtra,yExtra);;
    this.preInitArray = [];
    this.animationsX = [];
    this.animationsY = [];
//------------------
this.compWidth = null;
this.compHeight = null;
this.canvasWidth = null;
this.canvasHeight = null;
//------------------
this.yAlignOpt = YAlignment; //final-ok    
this.xAlignOpt = XAlignment; //final-ok    
}    
init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.runSetValue();
    this.initIncDec(this.compWidth(),this.compHeight());
    return true;
}
update(msDelta :number):boolean{
if (this.compWidth == null){throw new Error("init error");}    
this.runSetValue();
this.runAnimationsX(msDelta);
this.runAnimationsY(msDelta);
return true;    
}
//-This fn converts all the  preInitIncDecArray commands into inc dec objects during init
public initIncDec(compWidth :number,compHeight :number){
// const from = new LocItem(xFrom,yFrom,xAlignFrom,yAlignFrom,xExtraFrom,yExtraFrom);
    for (let i = 0; i < this.preInitArray.length; i++) {
        const elm = this.preInitArray[i];
      this.initIncDecX(elm,compWidth);
      this.initIncDecY(elm,compHeight);
    }
// console.log("this.animationsX",this.animationsX);    
// console.log("this.animationsY",this.animationsY);    
}
initIncDecX(elm :PreInitArray,compWidth :number){
    const start = solveX(elm.from,compWidth,this.canvasWidth);
    const end = solveX(elm.to,compWidth,this.canvasWidth);

    if (start < end ){
        let c = this.newIncrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsX.push(c);
    }else {
        let c = this.newDecrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsX.push(c); 
    }
}
initIncDecY(elm :PreInitArray,compHeight :number){
    const start = solveY(elm.from,compHeight,this.canvasHeight);
    const end = solveY(elm.to,compHeight,this.canvasHeight);

    if (start < end ){
        let c = this.newIncrement(elm.timeFrom,elm.timeTo,start,end);
        this.animationsY.push(c);
    }else {
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
            // console.log("v",v);
            // console.log("msDelta",msDelta,"value",this._ret_value);
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
//-using a seperate variable this._set_value it brilliant
private runSetValue(){

if (this.compWidth == null){throw new Error("init error");}
if (this.compHeight == null){throw new Error("init error");}
    if (this._set_data !== null && this._set_data.x !== null){
    //--place 2 of 3 where _ret_value is changed
    this._ret_data.x = solveX(this._set_data,this.compWidth(),this.canvasWidth);
    this._ret_data.y = solveY(this._set_data,this.compHeight(),this.canvasHeight);
    //---importantay use once
    this._set_data = null; //assign null
    }   
}
set(x :number|OffScreenXOpt , y :number|OffScreenYOpt,xAlign :XAlignment=XAlignment.Left,yAlign :YAlignment=YAlignment.Top,xExtra :number=0,yExtra :number=0){

    this._set_data = new LocItem(x,y,xAlign,yAlign,xExtra,yExtra);
}

animate(timeFrom :number,timeTo :number,xFrom :number,xTo :number , yFrom :number,yTo :number,xAlignFrom :XAlignment=XAlignment.Left,xAlignTo :XAlignment=XAlignment.Left,yAlignFrom :YAlignment=YAlignment.Top,yAlignTo :YAlignment=YAlignment.Top,xExtraFrom :number=0,xExtraTo :number=0,yExtraFrom :number=0,yExtraTo :number=0){
const from = new LocItem(xFrom,yFrom,xAlignFrom,yAlignFrom,xExtraFrom,yExtraFrom);
const to = new LocItem(xTo,yTo,xAlignTo,yAlignTo,xExtraTo,yExtraTo);
const c = new PreInitArray(timeFrom,timeTo,from,to);
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

private newIncrement(from :number,to :number,startValue :number,endValue :number):Increment{
    let c = new Increment(from,to,startValue,endValue);
    return c;   
}    
private newDecrement(from :number,to :number,startValue :number,endValue :number):Decrement{
    let c = new Decrement(from,to,startValue,endValue);
    return c;    
} 

}