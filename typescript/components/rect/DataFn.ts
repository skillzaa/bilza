import CompDataBase from "../../BaseComponent/CompDataBase.js";  

export class ObjectData extends CompDataBase{
   
widthPercent :number;
heightPercent :number;
lineWidth :number;
color :string;

constructor(){
    super();
this.msStart =0; 
this.x = 0 ;
this.y = 0 ;
this.lineWidth = 10 ;

this.color = "#000000" ; 
this.widthPercent = 10;
this.heightPercent = 10;
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
