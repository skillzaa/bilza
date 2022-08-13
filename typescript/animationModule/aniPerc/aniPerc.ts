import AniNumber from "../aniNumber/aniNumber.js";
import ConstantVal from "../aniNumber/filters/constantVal.js";
import IFilter from "../filters/IFilter.js";

export default class AniPerc extends AniNumber  {
public defaultFilter :IFilter<number>;    
private canvasWidthHeight :number | null;

constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

super(initialValue,minValue,maxValue);
this.defaultFilter = new ConstantVal(0,100,initialValue);
// this.responsive = responsive;
this.canvasWidthHeight = null;
}
//..
public setResponsive(tf :boolean){
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.responsive = tf;
    }    
}

//-init has to do nothing with responsive this is just to get canvas width and height
init(canvasWidthHeight :number){
this.canvasWidthHeight = canvasWidthHeight;    

//----------------init defaullt value 
// this.defaultValue = this.percToPix(this.defaultValue,canvasWidthHeight);
//----------------init all
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.init(canvasWidthHeight);
    }    
//---Every time the init is run we multiply some values but during running of the programme we shd init it once and then stop it.    
    // this.responsive = false;    
}

percToPix(perc :number ,canvasWidthHeight :number ) {
    return ((canvasWidthHeight / 100) * perc);
}
} 