import CompDataBase from "../BaseComponent/CompDataBase.js";  
import INumberFilter from "../design/INumberFilter.js";
import Adder from "../propFilters/numberFilters/adder.js";

//--17-may-2022 i have moved test comp to inside bilzaMod folder
//---but it still links to BaseComponent in the compsMod folder
//---should the BaseComponent be in root directory?????
export class ObjectData extends CompDataBase{
xx :INumberFilter;    
msDelta :number;    

constructor(){
    super();
this.xx = new Adder(2); 
this.msDelta =0; 

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
