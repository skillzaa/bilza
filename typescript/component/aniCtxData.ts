


// these are ctx valuesto be set in caseof any animation
export default class AniCtxData {
startFrame:number; //cant be null

x:number | null;
y:number | null;
fontSize:number | null;
fontName:string | null;
fillStyle:string | null;
strokeStyle:string | null;
lineWidth:number | null;

constructor(startFrame :number = 0){
this.startFrame = startFrame;
this.x = null;
this.y = null;
this.fontSize = null;
this.fontName = null;
this.fillStyle = null;
this.strokeStyle = null;
this.lineWidth = null;

}



}