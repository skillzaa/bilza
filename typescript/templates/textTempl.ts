
import {BaseComponent} from "../bilza.js";
import Text from "../components/text.js";

export default class TextTempl {
private  comp:Text;    

constructor(comp :Text){
this.comp = comp;    
}

h1(){
this.comp.fontSize.set(200);    
}

}