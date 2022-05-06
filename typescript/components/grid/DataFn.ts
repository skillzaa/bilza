import CompDataBase from "../../design/CompDataBase.js";

export default function DataFn ():ObjectData  {
    let td = new ObjectData();
    return td;
}
    
export class ObjectData extends CompDataBase {
msStart:number;

cellWidthPerc :number;    
cellHeightPerc :number;

colorHorizontalLines :string ;   
colorVerticalLines :string ;

colorNumbers :string ;   

showNumbers :boolean ;   
showHorizontalLines :boolean ;   
showVerticalLines :boolean ;   

lineWidthVertical :number;
lineWidthHorizontal :number;
fontSize :number;
lineDash :number[];
  
constructor(){
    super();
this.msStart =0;

this.fontSize = 8;

this.cellWidthPerc = 10;    
this.cellHeightPerc = 10;

this.colorHorizontalLines = "grey";   
this.colorVerticalLines = "grey";   

this.colorNumbers = "grey"; 

this.showNumbers = false;   
this.showHorizontalLines = false;   
this.showVerticalLines = false;   
this.lineWidthVertical = 1;
this.lineWidthHorizontal = 1;
this.lineDash = [];
}
}

