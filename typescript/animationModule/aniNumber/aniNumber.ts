import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
// import ConstantVal from "./filters/constantVal.js";
import IdentityFil from "../filters/identityFil.js";
import Decrement from "./filters/decrement.js";
// import Vibrate from "./effFilters/vibrate.js";
import Random from "./filters/random.js";
// import JumpBetween from "./aniFilters/jumpBetween.js";
// import Oscillate from "./aniFilters/oscillate.js"; 


export default class AniNumber extends AniProp<number>  {
    
public readonly minValue :number;
public readonly maxValue :number;

constructor(initialValue :number=0, minValue :number=-3000,maxValue :number=3000){

super(initialValue);

this.minValue  = minValue; 
this.maxValue  = maxValue; 

}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(rTimeMsStart,rTimeMsEnd,startValue,endValue,0);
        this.addFilter(inc);
        //--- The stop filter
        //- the generic IdentityFil works without <number> as well
        const stop = new IdentityFil <number>(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }else if (startValue > endValue){
        let dec = new Decrement(rTimeMsStart,rTimeMsEnd,startValue,endValue);
        this.addFilter(dec);
        //--- The stop filter
        const stop = new IdentityFil <number>(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delaySec :number=0){
const v = new Random(rTimeMsStart,rTimeMsEnd,min,max,delaySec);
this.addFilter(v);
const mid = (max-min)/2;
const last = new IdentityFil<number>(rTimeMsEnd,rTimeMsEnd + 1000,mid,delaySec);
this.addFilter(last);
}

public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number=1, endValue :number=10,secPerIter :number= 5000){
    //--convert delay in sec
    const timeDiff = rTimeMsEnd - rTimeMsStart;
    //---starting fil will be added in the main loop 
    //-- add the last filter seperately in the begining since it is a Identity filter while rest of them are inc and dec filters. 
        const endFil = new IdentityFil(rTimeMsEnd,rTimeMsEnd + 1000,endValue,0);
        this.addFilter(endFil);
//--------------------
    const noOfIter = Math.floor( timeDiff / secPerIter);
    let finalNoOfIter:number;
    if ( timeDiff % secPerIter == 0 ){ 
        // if even division then the last step will be on the last filter so reduce one since last filter is placed 
        finalNoOfIter = noOfIter -1 ; 
    }else {
        // if odd division then the last frame is already skipped due to math.floor
        finalNoOfIter = noOfIter; 
    }
let stratWithInc:boolean = (startValue < endValue) ? true : false;

for (let i = 0; i < finalNoOfIter ; i ++) {

    if (stratWithInc == true){
        stratWithInc = !stratWithInc; //change
        const thisStartTime = rTimeMsStart + (i * secPerIter);
        const thisEndTime = thisStartTime + secPerIter;
        let inc = new Increment(thisStartTime,thisEndTime,startValue ,endValue);
        this.addFilter(inc);
    }else {
        stratWithInc = !stratWithInc; //change
        const thisStartTime = rTimeMsStart + (i * secPerIter);
        const thisEndTime = thisStartTime + secPerIter;
        let inc = new Decrement(thisStartTime,thisEndTime,endValue,startValue);
        this.addFilter(inc);
    }
}
}//oscialte

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delayInMilliSec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
} 