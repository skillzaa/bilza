import CompDataBase from "../../design/CompDataBase.js";  

export class ObjectData extends CompDataBase{
listStartY :number;
listGapFactor :number;

constructor(){
super();
this.listStartY = 30; 
this.listGapFactor = 10; 
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
