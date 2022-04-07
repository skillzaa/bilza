import CompDataBase from "../../design/CompDataBase.js";

export class ObjectData extends CompDataBase {

    
startAngle:number;
endAngle:number;
radius:number;
fill:boolean;

constructor(){
    super();
this.msStart =0;
this.x = 0;
this.y = 0;
this.startAngle = 0;
this.endAngle = 2*Math.PI;
this.radius = 100;
this.fill = true;

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
