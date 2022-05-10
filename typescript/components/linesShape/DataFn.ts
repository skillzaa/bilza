import CompDataBase from "../../design/CompDataBase.js";

export class ObjectData extends CompDataBase {
//////////////////////////
flagFilled:boolean;
// responsive:boolean;
lineWidth :number;
color :string;
 
 
constructor(){
super();    
this.lineWidth = 5;
//--flags
this.flagFilled = true;
this.color = "red" ;

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
