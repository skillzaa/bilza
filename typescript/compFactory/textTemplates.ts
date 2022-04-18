import {IComponent,FontNames} from "../Bilza.js";
import Text from "../components/text/text.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";

export default class TextTemplates {
private addToArray :IComponent[];
 
constructor(comps :IComponent[]){
this.addToArray = comps;
}
hdg(content :string="H1",bgHax :string="#008000",fontColor:string|null=null,x:number=50,y:number =5, widthPercent:number=10,heightPercent:number=10):Text{
let txt = new Text(content,bgHax,x,y,widthPercent,heightPercent);
//----very imp
    this.addToArray.push(txt);
txt.d.padding = 5;
txt.d.margin = 5;
txt.d.xAlignment = txt.xAlignmentOptions.Mid;
// txt.d.colorBg = "#d7edd7";
txt.d.colorBg = lightenDarkenColor(bgHax,200);
txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
if (fontColor !== null) {txt.d.color = fontColor;}
return txt;
}
// demo(content :string="Bilza.js",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER, fontColor :string="yellow",fontSize=40,x=100,y=100)
// :Text{
//     let g = new Text(content,fontColor,fontSize,
//     msStart,msEnd);
//     //----very imp
//     this.addToArray.push(g);
//     //---------set all flags true    
//     g.d.flagDrawBorder = true;
//     g.d.flagDrawContentArea = true;
//     g.d.flagDrawMargin = true;
//     g.d.flagDrawPadding = true;
//     g.d.flagDrawText = true;
//     //---------set colors
//     g.d.colorMargin = "red";
//     g.d.colorBorder = "green";
//     g.d.colorPadding = "blue";
//     g.d.colorContentBg = "black";
//     // g.d.fontColor = "yellow";
//     //---widen all
//     g.d.widthBorder = 10;
//     g.d.widthMargin = 10;
//     g.d.widthPadding = 10;
//     g.d.x = x;
//     g.d.y = y;

//     return g;
// }
// txt(content :string="Bilza.js",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,fontColor :string="black",fontSize=40,x=100,y=100)
// :Text{
//     let g = new Text(content,fontColor,fontSize,
//     msStart,msEnd);
//     //----very imp
//     this.addToArray.push(g);
//     //---------set all flags FALSE --thyue shd be false already    
//     g.d.flagDrawBorder = false;
//     g.d.flagDrawContentArea = false;
//     g.d.flagDrawMargin = false;
//     g.d.flagDrawPadding = false;
//     g.d.flagDrawText = true; // keep it true
//     //..
//     // g.d.fontColor = textColor;
//     g.d.fontFamily = FontNames.Helvetica;
//     g.d.x=x;
//     g.d.y=y;
//     return g;
// }
// txtBg(content:string="Bilza.js",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,fontColor="yellow",fontSize=50,bgColor="#051854",x=100,y=100):Text{
//     let g = new Text(content,fontColor,fontSize,
//         msStart,msEnd);
//         g.d.colorContentBg = bgColor;
//     //----very imp
//     this.addToArray.push(g);
//     //---------set all flags true    
//     g.d.flagDrawBorder = false;
//     g.d.flagDrawContentArea = true;
//     g.d.flagDrawMargin = false;
//     g.d.flagDrawPadding = true;
//     g.d.flagDrawText = true; // keep it true
//     g.d.fontFamily = FontNames.Helvetica;
//     g.d.x = x;
//     g.d.y = y;
//     return g;
// }
// shadowRect (content:string="Bilza.js",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER, fontColor="black",rectColor="black",fontSize=50,x=100,y=100):Text{
// let one = new Text(content,fontColor,fontSize,msStart,msEnd);   
//  //----very imp
//  this.addToArray.push(one); 
// one.d.flagDrawBoundingRectangle = true;
// one.d.flagBoundingRectShadow = true;
// one.d.flagTextShadow = true;
// one.d.x = x;
// one.d.colorBoundingRect = rectColor;
// one.d.y = y;
// return one;
// }

}