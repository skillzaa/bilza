
export class ObjectData {
    msStart:number;
//////////////////////////
flagFilled:boolean;
responsive:boolean;
lineWidth :number;

color :string;

colorShadow :string;

flagShadow :boolean;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;

constructor(){
this.msStart =0;
this.responsive = true; 
this.lineWidth = 5;
//--flags
this.flagShadow = false ;
this.flagFilled = true;
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
