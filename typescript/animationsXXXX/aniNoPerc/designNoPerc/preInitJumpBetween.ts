

export default class  PreInitJumpBetween {

startTimeSec :number;
endTimeSec :number;
pointOne :number;
pointTwo :number;
skipFrames :number;

constructor(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,skipFrames :number=0){
    
this.startTimeSec = startTimeSec;
this.endTimeSec = endTimeSec;
this.pointOne = pointOne;
this.pointTwo = pointTwo;
this.skipFrames = skipFrames;
}
}
