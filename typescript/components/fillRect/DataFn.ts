
export class ObjectData {
    msStart:number;
//////////////////////////
x :number;
y :number;

widthPercent :number;
heightPercent :number;


color :string;
colorShadow :string;

flagShadow :boolean;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;

constructor(){
this.msStart =0;
 
this.x = 10 ;
this.y = 10 ;

this.widthPercent = 200 ;
this.heightPercent = 50 ;

//--flags
this.flagShadow = false ;

this.color = "red" ;
this.colorShadow = "grey" ;

this.shadowOffsetX = 0 ;
this.shadowOffsetY = 0 ;
this.shadowBlur = 0 ;
 
this.widthPercent = 10;
this.heightPercent = 10;
}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
