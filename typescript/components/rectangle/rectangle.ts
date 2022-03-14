import {Component,Pack,Style,Transition,XAlignment,YAlignment } from "../../index.js";

import DataFn , {ObjectData} from "./DataFn.js";

export default class Rectangle extends Component {
    
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
    //--remember this.d.width is contentAreaWidth 
 return  this.d.width + (this.d.borderWidth );
}
height(p: Pack,perc=0): number {
 return this.d.height;
}

addTransition(frameStart:number){
return this.compData.add(frameStart);
}


update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}

draw(p: Pack):boolean {
    this.style.fillStyle = this.d.borderColor;
    this.style.strokeStyle = this.d.borderColor;
    this.style.lineWidth = this.d.borderWidth;
    p.drawRect(
        this.d.x + this.d.borderWidth/2,
        this.d.y + this.d.borderWidth/2,
        this.width(p),
        this.height(p),
        this.style
    );

return true;    
}



}