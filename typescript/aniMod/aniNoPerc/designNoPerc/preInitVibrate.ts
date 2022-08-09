

export default class  PreInitVibrate {
msDeltaStart :number;
msDeltaEnd :number;
offset :number;
delayInMS :number;

constructor(msDeltaStart :number,msDeltaEnd :number, offset :number=10,delayInMS :number=0){
    
this.msDeltaStart = msDeltaStart;
this.msDeltaEnd = msDeltaEnd;
this.offset = offset;
this.delayInMS = delayInMS;
    
}
}
