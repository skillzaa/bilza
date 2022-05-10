import CompDataBase from "../../BaseComponent/CompDataBase.js";

export class ObjectData extends CompDataBase {
prefix :string;
  
constructor(){
    super();
this.msStart =0; // i just need it since its req by component
this.prefix = "sec: ";
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
