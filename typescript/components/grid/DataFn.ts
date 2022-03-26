
export default function DataFn ():ObjectData  {
    let td = new ObjectData();
    return td;
}
    
export class ObjectData {
msStart:number;

cellWidth :number;    
cellHeight :number;

colorHorizontalLines :string ;   
colorVerticalLines :string ;

colorNumbers :string ;   

flagDrawNumbers :boolean ;   
flagDrawHorizontal :boolean ;   
flagDrawVertical :boolean ;   

lineWidthVertical :number;
lineWidthHorizontal :number;
fontSize :number;
lineDash :number[];

constructor(){
this.msStart =0;

this.fontSize = 8;

this.cellWidth = 50;    
this.cellHeight = 50;

this.colorHorizontalLines = "grey";   
this.colorVerticalLines = "grey";   

this.colorNumbers = "grey"; 

this.flagDrawNumbers = false;   
this.flagDrawHorizontal = false;   
this.flagDrawVertical = false;   
this.lineWidthVertical = 1;
this.lineWidthHorizontal = 1;
this.lineDash = [];
}
}

