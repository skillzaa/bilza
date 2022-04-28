import {IComponent,FontNames} from "../Bilza.js";
import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";

export default class TextTemplates {
private addToArray :IComponent[];
 
constructor(comps :IComponent[]=[]){
this.addToArray = comps;
}

hdg(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=10,y:number =10):Text{
let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y);
//----very imp
this.addToArray.push(txt);

    txt.d.flagDrawBg = true;
    txt.d.colorBg = lightenDarkenColor("#0ab513",175);
    txt.d.border = 20;
    txt.d.flagDrawBorder = true;
    txt.d.colorBorder = lightenDarkenColor("#0ab513",20);
    // txt.d.colorBorder = "red";
    txt.d.fontSize = 75;
return txt;
}

}//class