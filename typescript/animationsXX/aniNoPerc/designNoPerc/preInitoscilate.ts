

export default class  PreInitOscilate {

startTimeSec :number;
endTimeSec :number;
startValue :number;
endValue :number;
speed :number;

constructor(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,skipFrames :number=0){
    
this.startTimeSec = startTimeSec;
this.endTimeSec = endTimeSec;
this.startValue = pointOne;
this.endValue = pointTwo;
this.speed = skipFrames;
}
}
