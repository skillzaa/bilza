import CompDataBase from "../../../BaseComponent/CompDataBase.js";  

export class ObjectData extends CompDataBase{
   
color :string;

constructor(){
    super();
this.color = "#008000" ; 

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
