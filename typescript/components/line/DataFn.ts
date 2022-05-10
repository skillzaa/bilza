import CompDataBase from "../../design/CompDataBase.js";

export class ObjectData extends CompDataBase {
    msStart:number;
//////////////////////////
x1 :number;
y1 :number;
x2 :number;
y2 :number;
lineWidth :number;

color :string;
// colorShadow :string;

// flagShadow :boolean;

constructor(){
    super();
this.msStart =0;
  
this.x1 = 0;
this.y1 = 0;
this.x2 = 800;
this.y2 = 100;
this.lineWidth = 2;
this.color = "red" ;
 

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
