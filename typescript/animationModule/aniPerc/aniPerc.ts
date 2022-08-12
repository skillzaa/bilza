import AniNumber from "../aniNumber/aniNumber.js";

export default class AniPerc extends AniNumber  {
public responsive :boolean;    

constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

    super(initialValue,minValue,maxValue);

this.responsive = responsive;
}
//..
setResponsive(tf :boolean){
this.responsive = tf;
}
init(canvasWidthHeight :number){
//-- This is the only lock for responsive or non - responsive    
if (this.responsive == false) {return false;}    

//----------------init defaullt value 
this.defaultValue = this.percToPix(this.defaultValue,canvasWidthHeight);
//----------------init all
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.init(canvasWidthHeight);
    }    
}

percToPix(perc :number ,canvasWidthHeight :number ) {
    return ((canvasWidthHeight / 100) * perc);
}
} 