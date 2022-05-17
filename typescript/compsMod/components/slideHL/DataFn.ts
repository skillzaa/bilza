import CompDataBase from "../../../BaseComponent/CompDataBase.js";  



export class ObjectData extends CompDataBase{

listStartY :number;
listGapFactor :number;
applyWdHtPerc :boolean;
maxLiChars :number;
  
constructor(){
super();
this.listStartY = 30; 
this.listGapFactor = 10; 
this.applyWdHtPerc = false; 
this.maxLiChars = 50; 

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
