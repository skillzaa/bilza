

export default class  PreInitGoto {
frame:number;
theValue:number;
gotoFor: "x" | "y";
constructor(gotoFor :"x"|"y",frame :number,theValue :number){
    this.gotoFor = gotoFor;
    this.frame = frame;
    this.theValue = theValue;
}
}
