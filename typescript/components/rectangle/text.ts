import {Component,Pack,Style,Transition,XAlignment,YAlignment } from "../../index.js";

import DataFn , {ObjectData} from "./DataFn.js";

export default class Text extends Component {
    
    private compData:Transition<ObjectData>;
    style:Style;
    d :ObjectData;
    data :ObjectData;
constructor (){
    super();
    this.style = new Style();
    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
    // this.add = this.compData.add;
    this.data = this.compData.data;
}
width( p: Pack ): number {
 return  ((this.d.margin * 2) + (this.d.padding * 2) + this.contentWidth(p)) ;
}
contentWidth( p: Pack ): number {
 this.style.fontSize = this.d.fontSize;
 //--error fontFamily and Name   
 this.style.fontName = this.d.fontFamily;   
 let r =  p.charsWidth(this.d.content,this.style.fontSize, this.style.fontName);
 console.log("content width",r);
 return r;
}
height(p: Pack,perc=0): number {
 let dblMargin = (this.d.margin * 2);
 let dblpadding = (this.d.padding * 2);
 let dblBorder = (this.d.borderWidth * 2);
 let percentInc = ((this.contentHeight(p) / 100) * perc) ;
 let h =   Math.ceil(this.contentHeight(p) + dblMargin + dblpadding + dblBorder+ percentInc);  
 console.log("height",h);
 return h;
}
contentHeight(p: Pack,perc=40): number {
this.style.fontSize = this.d.fontSize;
 //--error fontFamily and Name   
 this.style.fontName = this.d.fontFamily;   
 let charHt = p.charsWidth("X",this.style.fontSize, this.style.fontName);
  console.log("contentHeight",charHt);
 return charHt;
}

addTransition(frameStart:number){
return this.compData.add(frameStart);
}

draw(p: Pack): boolean {
    // if (this.d.highlight == true){
    //     this.drawHighlight(p);
    // }
    this.drawContent(p);
    
    if (this.d.underline == true){
        this.drawUnderline(p);
    }
    if (this.d.overline == true){
        this.drawOverline(p);
    }
    if (this.d.border == true){
        this.drawBorder(p);
    }
    this.drawBoundingRectangle(p);
    return true;
}

drawContent(p :Pack){
    this.style.fillStyle = this.d.fontColor;
    this.style.strokeStyle = this.d.fontColor;
    this.style.fontSize = this.d.fontSize;
    this.style.fontName = this.d.fontFamily;

    if (this.d.shadow == true){
        this.style.shadowBlur = this.d.shadowBlur;
        this.style.shadowColor = this.d.shadowColor;
        this.style.shadowOffsetX = this.d.shadowOffsetX;
        this.style.shadowOffsetY = this.d.shadowOffsetY;
    }
    p.drawText(
        this.d.content,
        this.finalX(p) + this.d.margin + this.d.borderWidth + this.d.padding,
        this.finalY(p) + this.d.margin + this.d.borderWidth + this.d.padding,
        this.style);
}


update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}

drawBorder(p :Pack){
        this.style.fillStyle = this.d.borderColor;
        this.style.strokeStyle = this.d.borderColor;
        // this.style.lineWidth = this.d.borderWidth;
        this.style.lineWidth = 50;
        let boderX = this.finalX(p) + this.d.margin + (this.d.borderWidth/2);
        console.log("boderX==",boderX); 
        p.drawRect(
            0 + 50 + 35 ,
            (this.finalY(p) + this.d.margin) + (this.d.borderWidth/2),
            this.contentWidth(p) + (this.d.padding * 2) ,
            this.height(p),
            this.style
        );
        // console.log("char height",p.ctx.measureText("X").width);
       
}
drawBoundingRectangle(p :Pack){
    this.style.fillStyle = "blue"; //change later
    this.style.strokeStyle = "blue";//change later
    this.style.lineWidth = 1;//change later
    p.drawRect(
        this.finalX(p) ,
        this.finalY(p),
        this.width(p),
        this.height(p),
        this.style
    );
}
drawUnderline(p :Pack){
        this.style.fillStyle = this.d.underlineColor;
        this.style.strokeStyle = this.d.underlineColor;
        this.style.lineWidth = this.d.underlineWidth;
        p.drawLine(
            this.finalX(p),
            this.finalY(p) + this.height(p),
            this.finalX(p) + this.width(p),
            this.finalY(p) + this.height(p),
            this.style
        )
       
}
drawOverline(p :Pack){
        this.style.fillStyle = this.d.overlineColor;
        this.style.strokeStyle = this.d.overlineColor;
        this.style.lineWidth = this.d.overlineWidth;
        p.drawLine(
            this.finalX(p),
            this.finalY(p) ,
            this.finalX(p) + this.width(p),
            this.finalY(p) ,
            this.style
        )
       
}
/**
 * Great function, converts its relative x into real X usinf p.xPerc and then 
 * add and remove its own width etc. 
 */
private finalX(p :Pack):number{
let ret = this.d.x;    
ret = p.xPerc(this.d.x);
    switch (this.d.xAlignment) {
        case XAlignment.Left:
            // nothing req;
            break;
        case XAlignment.Mid:
            ret -= (this.width(p)/2);
            break;
        case XAlignment.Right:
            ret -= (this.width(p));
            break;
    }
return Math.floor(ret);    
}
private finalY(p :Pack):number{
let ret = this.d.y;    
ret = p.yPerc(this.d.y);
    switch (this.d.yAlignment) {
        case YAlignment.Top:
            // nothing req;
            break;
        case YAlignment.Mid:
            ret -= (this.height(p)/2);
            break;
        case YAlignment.Bottom:
            ret -= (this.height(p));
            break;
    }
return Math.floor(ret);    
}
}