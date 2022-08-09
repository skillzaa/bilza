

export default class  PreInitOscilate {

msDeltaStart :number;
msDeltaEnd :number;
startValue :number=1;
endValue :number=10;
speed :number= 1;

constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
this.msDeltaStart = msDeltaStart;
this.msDeltaEnd = msDeltaEnd;
this.startValue = startValue;
this.endValue = endValue;
this.speed = speed;
}
}
