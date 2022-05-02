export default class CompDataBase {
msStart :number; //this is just for transitions
x :number;
y :number;
colorBoundingRectangle:string;
//-------------shadow-------------------------//    
// shadowDisplay :boolean; //show or not -- this is abstraction
//--since it meanssss some thing and the comp need to do something.which is not desired
shadowColor :string;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;
//--flags
visible :boolean;
//--this will come in handy during using the lib with gui and while making interactive tools.
selected :boolean;
constructor(){
this.msStart =0; // i just need it since its req by component
this.x=0;
this.y=0;
//---flags
this.selected = false;
this.visible = true;
//--shadow
this.shadowColor = "grey";
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
//-----------
this.colorBoundingRectangle = "black";
}

}//CompDataBase