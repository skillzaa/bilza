


// these are ctx valuesto be set in caseof any change in ctx
export default class CtxData {
startFrame:number; //cant be null
x:number;
y:number;
fontSize:number | null;
font:string | null;
fontName:string | null;
fillStyle:string | null;
strokeStyle:string | null;
lineWidth:number | null;

constructor(startFrame :number = 0){
this.startFrame = startFrame;
this.x = 0;
this.y = 0;
this.font = null;
this.fontSize = null;
this.fontName = null;
this.fillStyle = null;
this.strokeStyle = null;
this.lineWidth = null;
}
merge(incomming :CtxData){
    
    if (incomming.strokeStyle !== null){
        this.strokeStyle = incomming.strokeStyle;
    }
    if (incomming.fillStyle !== null){
        this.fillStyle = incomming.fillStyle;
    }
    if (incomming.fontSize !== null){
        this.fontSize = incomming.fontSize;
    }
    if (incomming.fontName !== null){
        this.fontName = incomming.fontName;
    }
if (this.fontSize !== null && this.fontName !== null)    
this.font = this.fontSize + "px " + this.fontName;
}


}