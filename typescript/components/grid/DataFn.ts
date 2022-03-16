
export class ObjectData {
frameStart:number;
x :number;
y :number;
cellWidth :number;    
cellHeight :number;
colorHorizontalLines :string ;   
colorVerticalLines :string ;   
colorNumbers :string ;   
flagDrawNumbers :boolean ;   
flagDrawHorizontal :boolean ;   
flagDrawVertical :boolean ;   

constructor(){
this.frameStart =0;
this.x = 0;
this.y = 0;
this.cellWidth = 50;    
this.cellHeight = 50;
this.colorHorizontalLines = "black";   
this.colorVerticalLines = "black";   
this.colorNumbers = "black";   
this.flagDrawNumbers = false;   
this.flagDrawHorizontal = false;   
this.flagDrawVertical = false;   

}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
