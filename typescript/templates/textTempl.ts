
import {FontFamily} from "../bilza.js";
import Text from "../components/text.js";

export default class TextTempl {
private  comp:Text;    

constructor(comp :Text){
this.comp = comp;    
}
h1(){
this.comp.align(1,0);
this.comp.x.set(50);    
this.comp.y.set(5);    
// this.comp.fontSize.set(100);  
this.comp.showBackground.set(true);
this.comp.border.set(5);
this.comp.setPaddings(8);
this.comp.width.set(50);
this.comp.height.set(15);
this.comp.fitToWidth.set(true); // This will set fontSize  
this.comp.shrinkToHeight.set(true);  
}
jumbotron(){
this.comp.x.set(50);    
this.comp.y.set(40);    
this.comp.align(1,1);
// this.comp.fontSize.set(100);  
this.comp.showBackground.set(true);
this.comp.border.set(15);
this.comp.setPaddings(10);
this.comp.respFontSize.set(false);
this.comp.width.set(100);
this.comp.fitToWidth.set(true);

}

}