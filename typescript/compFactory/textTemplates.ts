import {IComponent,FontNames} from "../Bilza.js";
import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";

export default class TextTemplates {
private addToArray :IComponent[];
 
constructor(comps :IComponent[]=[]){
this.addToArray = comps;
}
hdg(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10):Text{
    
let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
//----very imp
    this.addToArray.push(txt);
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
// txt.d.colorBg = "#d7edd7";
txt.d.colorBg = lightenDarkenColor(color,200);
txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
// if (fontColor !== null) {txt.d.color = fontColor;}
return txt;
}
li(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10):Text{
    let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
//----very imp
this.addToArray.push(txt);
txt.d.padding = 2;
txt.d.margin = 2;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
// txt.d.colorBg = "#d7edd7";
txt.d.colorBg = lightenDarkenColor(color,200);
txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
// if (fontColor !== null) {txt.d.color = fontColor;}
return txt;
}

h1(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10):Text{
    let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
txt.setStartTime(startTimeSeconds * 1000); //into mili sec
txt.setEndTime(endTimeSeconds * 1000);
//----very imp
    this.addToArray.push(txt);

txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.color = color;
txt.d.colorBorder = color;
// txt.d.colorBg = lightenDarkenColor(color,10);
txt.d.colorBg = lightenDarkenColor(color,1); ///????

txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
txt.shadowsOn();
txt.d.autoScaleFontSize = true;
return txt;
}
jt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10):Text{
let txt = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y, widthPercent,heightPercent);
// txt.setStartTime(startTimeSeconds * 1000); //into mili sec
// txt.setEndTime(endTimeSeconds * 1000);
//----very imp
    this.addToArray.push(txt);

txt.d.xAlignment = txt.xAlignmentOptions.Mid;
txt.d.yAlignment = txt.yAlignmentOptions.Mid;
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.color = color;
txt.d.colorBorder = color;
// txt.d.colorBg = lightenDarkenColor(color,10);
txt.d.colorBg = lightenDarkenColor(color,1); ///????

txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
txt.shadowsOn();
txt.d.autoScaleFontSize = true;
return txt;
}

}//class