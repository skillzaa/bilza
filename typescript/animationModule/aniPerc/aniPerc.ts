import AniNumber from "../aniNumber/aniNumber.js";
// import Increment from "./aniFilters/increment.js";
// import Decrement from "./aniFilters/decrement.js";
// // import Vibrate from "./effFilters/vibrate.js";
// import RandomNo from "./aniFilters/randomNo.js";
// import JumpBetween from "./aniFilters/jumpBetween.js";
// import Oscillate from "./aniFilters/oscillate.js"; 


export default class AniPerc extends AniNumber  {
    
constructor(initialValue :number=0, minValue :number=-3000,maxValue :number=3000){
super(initialValue);
}
init(canvasWidthHeight :number){
//----------------init all
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.init(canvasWidthHeight);
    }    
}
} 