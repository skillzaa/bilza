import CompDataBase from "../../BaseComponent/CompDataBase.js";  
import PlusX from "../../propObjs/plusX.js";


export class ObjectData extends CompDataBase{
xx :PlusX;    
msDelta :number;    

constructor(){
    super();
this.xx = new PlusX(1); 
this.msDelta =0; 

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
