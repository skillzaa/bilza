
import {hsl} from "../bilza.js";
import Text from "../components/text.js";

export default class TextTheme {
private comp:Text;    
constructor(comp :Text){
this.comp = comp;    
}

red(){
this.comp.color.set(hsl(0));    
}

}