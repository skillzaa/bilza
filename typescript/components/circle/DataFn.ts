import CompDataBase from "../../BaseComponent/CompDataBase.js";

export class ObjectData extends CompDataBase {

    
startAngle:number;
endAngle:number;
radiusPercent:number;
color:string;
fill:boolean;

constructor(){
    super();
this.msStart =0;
this.x = 0;
this.y = 0;
this.startAngle = 0;
this.endAngle = 2*Math.PI;
this.radiusPercent = 10;
this.fill = true;
this.color = "grey";
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
