export default class RawData  {
    frameStart :number ;
    x :number | null;
    y :number | null;
    content:string | null;
constructor(frameStart=0){
this.frameStart = frameStart;
this.content = null;
this.x = null;
this.y = null;
}    
}