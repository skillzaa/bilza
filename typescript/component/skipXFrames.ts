
export default class   SkipXFrames {

private framesToSkip:number;
private skipframesCounter :number;

constructor(framesToSkip :number=0){
    this.framesToSkip = framesToSkip;
    this.skipframesCounter = 0;
}
    
skipped():boolean{
    if (this.skipframesCounter < this.framesToSkip) {
        this.skipframesCounter += 1 ;
        return false;
    }else {
        this.skipframesCounter = 0;
    return true;
}
}
}