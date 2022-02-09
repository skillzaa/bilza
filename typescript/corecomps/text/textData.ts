export default class TextData  {
    frameStart :number;
    x :number ;
    y :number ;
    content:string ;
constructor(frameStart=0,content="some text",x=0,y=0){
this.frameStart = frameStart;
this.content = content;
this.x = x;
this.y = y;
}    
}