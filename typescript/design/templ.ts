// these are ctx valuesto be set in caseof any change in ctx
export default class Templ {
//--at this frame this template will become the template of the component. every component must start with one template which can later be changed with transitions- which is just another template obj    
startFrame:number; //cant be null--why this here
x:number | null; 
y:number | null;
fontSize:number | null;
font:string | null;
fontName:string | null;
fillStyle:string | null;
strokeStyle:string | null;
lineWidth:number | null;
shadowColor:string | null;
shadowOffsetX:number | null;
shadowOffsetY:number | null;
shadowBlur :number | null;
globalAlpha :number | null;

constructor(startFrame :number = 0){
this.startFrame = startFrame;
this.x = null;
this.y = null;
this.font = null;
this.fontSize = null;
this.fontName = null;
this.fillStyle = null;
this.strokeStyle = null;
this.lineWidth = null;
this.shadowColor = null;
this.shadowOffsetX = null;
this.shadowOffsetY = null;
this.shadowBlur = null;
this.globalAlpha = null;
}
merge(incom :Templ){

    if (incom.globalAlpha !== null){
        this.globalAlpha = incom.globalAlpha;
    }
    if (incom.x !== null){
        this.x = incom.x;
    }
    if (incom.y !== null){
        this.y = incom.y;
    }
    if (incom.shadowBlur !== null){
        this.shadowBlur = incom.shadowBlur;
    }
    if (incom.shadowOffsetY !== null){
        this.shadowOffsetY = incom.shadowOffsetY;
    }
    if (incom.shadowOffsetX !== null){
        this.shadowOffsetX = incom.shadowOffsetX;
    }
    if (incom.lineWidth !== null){
        this.lineWidth = incom.lineWidth;
    }
    if (incom.shadowColor !== null){
        this.shadowColor = incom.shadowColor;
    }
    if (incom.strokeStyle !== null){
        this.strokeStyle = incom.strokeStyle;
    }
    if (incom.fillStyle !== null){
        this.fillStyle = incom.fillStyle;
    }
    if (incom.fontSize !== null){
        this.fontSize = incom.fontSize;
    }
    if (incom.fontName !== null){
        this.fontName = incom.fontName;
    }
}


}