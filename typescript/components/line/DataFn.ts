
export class ObjectData {
    msStart:number;
//////////////////////////
x1 :number;
y1 :number;
x2 :number;
y2 :number;


color :string;
colorShadow :string;

flagShadow :boolean;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;

constructor(){
this.msStart =0;
 
this.x1 = 0;
this.y1 = 0;
this.x2 = 100;
this.y2 = 100;

//--flags
this.flagShadow = false ;

this.color = "red" ;
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
