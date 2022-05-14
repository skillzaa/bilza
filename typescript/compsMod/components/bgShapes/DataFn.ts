import CompDataBase from "../../BaseComponent/CompDataBase.js";

export class ObjectData extends CompDataBase {
//////////////////////////
count :number;
constructor(){
    super();
this.count = 200;
}
};

 
export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
