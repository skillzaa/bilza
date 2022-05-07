import CompDataBase from "../../design/CompDataBase.js";

export class ObjectData extends CompDataBase {
frame :number;
prefix :string;
  
constructor(){
    super();
this.msStart =0; // i just need it since its req by component
this.prefix = "sec: ";
this.frame=0;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
