


// these are ctx valuesto be set in caseof any change in ctx
export default class CtxData {
startFrame:number; //cant be null

x:number;
y:number;
fontSize:number | null;
fontName:string | null;
fillStyle:string | null;
strokeStyle:string | null;
lineWidth:number | null;

constructor(startFrame :number = 0){
this.startFrame = startFrame;
this.x = 0;
this.y = 0;
this.fontSize = null;
this.fontName = null;
this.fillStyle = null;
this.strokeStyle = null;
this.lineWidth = null;
}



}