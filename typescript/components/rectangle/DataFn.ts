import {FontNames,XAlignment,YAlignment} from "../../index.js";

export class ObjectData {
frameStart:number;
x :number;
y :number;
width :number;
height :number;

//--Shadow
shadow:boolean;
shadowBlur = 5;
shadowColor = "grey";
shadowOffsetX = 8;
shadowOffsetY = 8;

//--margin
margin:number;
//--Borders
border:boolean;
borderColor:string;
borderWidth:number;


constructor(){
this.frameStart =0;
this.x =0;
this.y =0;
this.width = 100;
this.height = 100;
//--Shadow
this.shadow = false;
this.shadowBlur = 5;
this.shadowColor = "grey";
this.shadowOffsetX = 8;
this.shadowOffsetY = 8;

//--Margin and Padding
this.margin = 1;

//--Borders
this.border = false;
this.borderColor = "blue";
this.borderWidth = 1;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}