

export default class CompDataBase {
msStart :number; //this is just for transitions
x :number;
y :number;
colorBoundingRectangle:string;
//-------------shadow-------------------------//    
displayShadow :boolean; //show or not
colorShadow :string;
shadowOffsetX :number;
shadowOffsetY :number;
shadowBlur :number;
//--flags
responsive :boolean;
//positioned=true means use x and y, if its false then x and y are useless
positioned :boolean;
visible :boolean;
        //--this will come in handy during using the lib with gui and while making interactive tools.
selected :boolean;
constructor(){
this.msStart =0; // i just need it since its req by component
this.x=0;
this.y=0;
//---flags
this.selected = false;
this.positioned = true;
this.responsive = true;
this.visible = true;
//--shadow
this.colorShadow = "grey";
this.displayShadow = false;
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
//-----------
this.colorBoundingRectangle = "black";
}






}//CompDataBase