import CompDataBase from "../../compsMod/BaseComponent/CompDataBase.js";  
import INumberFilter from "../../design/INumberFilter.js";
import PlusX from "../../propFilters/numberFilters/plusX.js";
 
export class ObjectData extends CompDataBase{
xx :INumberFilter;    
msDelta :number;    

constructor(){
    super();
this.xx = new PlusX(2); 
this.msDelta =0; 

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
