import CompDataBase from "../../design/CompDataBase.js";  

export class ObjectData extends CompDataBase{
   
widthPercent :number;
heightPercent :number;
color :string;
content :string;
 
constructor(){
    super();
this.msStart =0; 
this.content = "Txt" ;
this.x = 10 ;
this.y = 10 ;

this.color = "black" ; 
this.widthPercent = 10;
this.heightPercent = 10;
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
