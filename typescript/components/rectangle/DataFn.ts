
export class ObjectData {
    msStart:number;
//////////////////////////

x :number;
y :number;
width :number;
height :number;
borderWidth :number;

flagFilled :boolean;
flagShadow :boolean;

colorFill :string;
colorBorder :string;
colorShadow :string;

shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;

constructor(){
this.msStart =0;

this.x = 10 ;
this.y = 10 ;

this.width = 200 ;
this.height = 50 ;
this.borderWidth = 4 ; //if drawing empty rect

//--flags
this.flagShadow = false ;
this.flagFilled = false ;

this.colorBorder = "black" ;
this.colorFill = "red" ;
this.colorShadow = "grey" ;

this.shadowOffsetX = 0 ;
this.shadowOffsetY = 0 ;
this.shadowBlur = 0 ;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
