import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";

export default class X extends AniNumber {
// private aniNo:AniNumber;
private preInitGotosX:PreInitGoto[];
private preInitAnimatesX:PreInitAnimate[];
private preInitVibratesX:PreInitVibrate[];

constructor(defaultValue :number=0){
super(defaultValue);    
this.preInitGotosX = []; 
this.preInitAnimatesX = []; 
this.preInitVibratesX = [];
}
init(usePercentages :boolean,canvasWidth :number){
this.initVibrate(usePercentages,canvasWidth);
this.initGoto(usePercentages,canvasWidth);
this.initAnimate(usePercentages,canvasWidth);
}

initVibrate(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitVibratesX.length; i++) {
    const elm = this.preInitVibratesX[i];
    let __v = elm.seed;
    if ( usePercentages == true){
        __v = this.percToX(elm.seed,canvasWidth);
    }
    //--most stupid mistake
    // this.vibrate(elm.from,elm.to,  __v  ,elm.offset,elm.delay);
    this._vibrate(elm.from,elm.to,  __v  ,elm.offset,elm.delay);

}    
}
initGoto(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitGotosX.length; i++) {
    const elm = this.preInitGotosX[i];
        let v = elm.theValue;
        if ( usePercentages == true){
            v = this.percToX(elm.theValue,canvasWidth)
        }
        this._goto(elm.frame,v);

}      
}
initAnimate(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitAnimatesX.length; i++) {
    const e= this.preInitAnimatesX[i];
        if ( usePercentages == true){
            this._animate(e.timeFrom,e.timeTo,this.percToX(e.xFrom,canvasWidth),this.percToX(e.xTo,canvasWidth));
        }else {
            this._animate(e.timeFrom,e.timeTo,e.xFrom,e.xTo);
        }
}      
}

private percToX(perc :number ,canvasWidth :number){
if (canvasWidth == null){throw("init error");}
return ((canvasWidth /100) * perc);
}


public vibrate(from: number, to: number, xValue: number, offset: number, delay: number): void {
    const c = new PreInitVibrate(from,to,xValue,offset,delay);
    this.preInitVibratesX.push(c);
}
public animate(): void {
    const c = new PreInitAnimate();
    this.preInitVibratesX.push(c);
}
// percToY(perc :number , canvasHeight :number){
// if (canvasHeight == null){throw("init error");}
// return ((canvasHeight /100) * perc);
// }



















////////////////////////////////////////////////////
}