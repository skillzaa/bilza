import CompDataBase from "../../BaseComponent/CompDataBase.js";

export default function DataFn ():ObjectData  {
    let td = new ObjectData();
    return td;
}
    
export class ObjectData extends CompDataBase {
msStart:number;
lineDash :number[];

cellWidthPerc :number;    
cellHeightPerc :number;

//--Lines---
showHorizontalLines :boolean ;   
showVerticalLines :boolean ;   

lineWidthVertical :number;
lineWidthHorizontal :number;

colorHorizontalLines :string ;   
colorVerticalLines :string ;

//--numbers
fontSize :number;
colorNumbers :string ;   
showNumbers :boolean ;   

  
constructor (){
    super();
this.msStart =0;

this.fontSize = 12;

this.cellWidthPerc = 10;    
this.cellHeightPerc =10;

this.colorHorizontalLines = "grey";   
this.colorVerticalLines = "grey";   

this.colorNumbers = "black"; 

this.showNumbers = true;   
this.showHorizontalLines = true;   
this.showVerticalLines = true;   
this.lineWidthVertical = 1;
this.lineWidthHorizontal = 1;
this.lineDash = [];
}
}

