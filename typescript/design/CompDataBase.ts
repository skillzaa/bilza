

export default class CompDataBase {
msStart :number;
x :number;
y :number;
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
        
constructor(){
this.msStart =0; // i just need it since its req by component
this.x=0;
this.y=0;
//---flags
this.positioned = true;
this.responsive = true;
this.visible = true;
//--shadow
this.colorShadow = "grey";
this.displayShadow = false;
this.shadowOffsetX = 0;
this.shadowOffsetY = 0;
this.shadowBlur = 0;
}






}//CompDataBase