

export default class  PreInitRandom {
    startTimeSec :number;
    endTimeSec :number;
    min :number=1;
    max :number=10;
    skipFrames :number=0;

constructor(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,skipFrames :number=0){

this.startTimeSec = startTimeSec;
this.endTimeSec = endTimeSec; 
this.min = min; 
this.max = max; 
this.skipFrames = skipFrames; 
}
}
