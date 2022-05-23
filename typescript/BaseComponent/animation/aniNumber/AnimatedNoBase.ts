//--Rules 
//--1-- the animations can return null BUT this class should not send null ahead .
import PreInitIncDec from "./preInitIncDec.js";
// import IAnimatedNo from "./IAnimatedNo.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
import Constant from "../filters/constant.js";
import IFilter from "./IFilter.js";
import setBWzeroNhundred from "../../../functions/setBWzeroNhundred.js";
// export default class AnimatedNoBase implements IAnimatedNo{
export default class AnimatedNoBase {
    //--this is the only output from this obj and we do not want to send out null rather default vlaue in the start and later as its set
    private _ret_value :number;
    //_set_value can be null since it is applied during update only if its not null and then set to null back again-thus is used once.
    private _set_value :number | null;
    private preInitIncDecArray :PreInitIncDec[];
    private animations :IFilter[];
    //------------------
    //--the component width and height can change without init dynamically so we need fn to get updated value but for canvasWidth or canvasHeight 
    protected compWidth    : null | (()=>number) ;
    protected compHeight   : null | (()=>number) ;
    protected canvasWidth  :number | null; 
    protected canvasHeight :number | null;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(defaultValue :number=0){
    // place 1/3 to set this._ret_value
    this._ret_value  = defaultValue; 
    this._set_value  = null;    
    this.preInitIncDecArray = [];
    this.animations = [];
    //--
    this.compWidth = null;
    this.compHeight = null;
    this.canvasWidth = null;
    this.canvasHeight = null;
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.runSetValue();
    this.initIncDec();
    return true;
}
//--There are different kind of Filters that can be applied to a number One such filter is increment another decrement. There can be other filters like Wiggle, SpanBetweenXPoints, CosCurve etc etc.
//--For each type of filter we will have a preInitArray which will collect all the filters applied 
//-- AND when init all these Arrays are converted into real objects which then effect the out put values when their time comes.
//---initIncDec is one such fn which while init will convert.
//---Every such fn which initialize an array into Filter Objects there is also a collecting function -they work in pair. The pair function for this fn is this.animate.
//--For wiggle filter there may be a fn this.wiggle which will collect all the preInit wiggle commands and store then into some preInitWiggle array and then run them during init with initWiggle. 
update(msDelta :number):boolean{
this.runSetValue();
this.runAnimations(msDelta);
return true;    
}
public value():number{
return this._ret_value;
}
//-using a seperate variable this._set_value it brilliant
public setValue(n :number):number{
this._set_value = n;
return this._set_value;
}

//--we are using PreInitIncDec obj to save the increment or decrement both since both structure are the same but for saving other Filter preInit commands we need seperate Array for one filter. 
public animate(from :number=0,to :number=10,startValue :number=0,endValue :number=100){
    let a = new PreInitIncDec(from,to,startValue,endValue);
    this.preInitIncDecArray.push(a);
}
////////////////----------PRIVATE----  
//-THis fn converts all the  preInitIncDecArray commands into inc dec objects during init
private initIncDec(){
    for (let i = 0; i < this.preInitIncDecArray.length; i++) {
        const elm = this.preInitIncDecArray[i];

        if (elm.startValue < elm.endValue ){
            let c = new Increment(elm.from,elm.to,elm.startValue,elm.endValue);
            this.animations.push(c);    
        }else {
            let c = new Decrement(elm.from,elm.to,elm.startValue,elm.endValue);
            this.animations.push(c);    
        }
    }
}

private runSetValue(){
    if (this._set_value !== null){
        //--place 2 of 3 where _ret_value is changed
        this._ret_value = this._set_value;//perc to pix
        this._set_value = null;
    }   
}
// This runs ALL THE ANIMATIONS (EACH filter is called and its value integrated )
private runAnimations(msDelta :number){
    for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            //--place 3 of 3 where _ret_value is changed
            this._ret_value = v;
            // console.log("msDelta",msDelta,"value",this._ret_value);
        }
} 
}
protected notInitError(){
    throw new Error("XAxis is not initialized yet");
}
protected checkNonNull(n :null | number):number{
let r = 0;    
if (n==null){
    this.notInitError()
}else {
    r = n; 
}
return r;
}
protected xPercToPix(perc :number):number{
let r = 0;
    if (this.canvasWidth == null){
        this.notInitError();
    }else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((this.canvasWidth  /100) * checked); 
    }
return r;    
}
protected yPercToPix(perc :number):number{
let r = 0;
    if (this.canvasHeight == null){
        this.notInitError();
    }else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((this.canvasHeight/100) * checked); 
    }
return r;    
}
    
} 