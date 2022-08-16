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
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        //---Goto Taken care of
        if (fil instanceof IdentityFil){
            fil.setBaseValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getBaseValue())
            );
        }
        //----------------increment
        if (fil instanceof Increment){
            fil.setBaseValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getBaseValue())
            );
            fil.setEndValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getEndValue())
            );
        }
        //--------------------
        //----------------increment
        if (fil instanceof Decrement){
            fil.setBaseValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getBaseValue())
            );
            fil.setEndValue(
                this.responsiveValue(canvasWidthHeight,
                    fil.getEndValue())
            );
        }
        //--------------------

    }////for loop ends
}

responsiveValue(heightWidth :number,perc :number):number {
    return ((heightWidth / 100) * perc);
}

}