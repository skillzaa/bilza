import IFilter from "../filters/IFilter.js";
import Increment from "../aniNumber/filters/increment.js";
import Decrement from "../aniNumber/filters/decrement.js";
import Random from "../aniNumber/filters/random.js";
import Oscillate from "../aniNumber/filters/oscillatets.js";
import IdentityFil from "../filters/identityFil.js";


export default class InitObj {
private filtersArr :IFilter<number>[];       
constructor(filtersArr:IFilter<number>[]){
this.filtersArr = filtersArr;
}
init(canvasWidthHeight :number){ 
    // if (this.filtersArr.length > 0){
    //     debugger;
    // }
    for (let i = 0; i < this.filtersArr.length; i++) {
        let fil = this.filtersArr[i];
        
        // ---Goto Taken care of
        if ( fil instanceof IdentityFil ||
             fil instanceof Increment ||
             fil instanceof Decrement ){
             fil.setBaseValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getBaseValue())
            );
        }
        //----- Now the oscillate it need to be created again
        if (fil instanceof Oscillate){
           const osc = new Oscillate(
            fil.rTimeMsStart,
            fil.rTimeMsEnd,
            
            this.responsiveValue(canvasWidthHeight,
                fil.getBaseValue()),

            this.responsiveValue(canvasWidthHeight,
                fil.getEndValue()),

                fil.delay.delayValue,

                this.responsiveValue(canvasWidthHeight,
                    fil.getBeyondValue()),
            ); 
            //--assign --importantay--fil is not const just for this assignment
            this.filtersArr[i] = osc;
            // console.log("fil",fil);
        }
    }////for loop ends
}

responsiveValue(heightWidth :number,perc :number):number {
    return ((heightWidth / 100) * perc);
}

}