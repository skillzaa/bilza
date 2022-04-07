import CompDataBase from "../../design/CompDataBase.js";

export class ObjectData extends CompDataBase {
msStart:number;
fontSize :number;
frame :number;
x :number;
y:number;
content :string;
padding :number;
colorRectangle  :string;
colorNumbers :string;
 
constructor(){
    super();
this.msStart =0; // i just need it since its req by component
this.x=0;
this.y=0;
this.fontSize = 30;
this.content = "sec: ";
this.frame=0;
this.padding = 4;
this.colorRectangle = "black";
this.colorNumbers = "yellow";
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
