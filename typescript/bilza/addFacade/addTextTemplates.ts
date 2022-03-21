import {IDrawable,FontNames} from "../../index.js";
import Text from "../../components/text/text.js";
// import DataFn,{ObjectData,CalcData} from "../../components/text/DataFn.js";

export default class AddTextTemplates {
private addToArray :IDrawable[];

 
constructor(comps :IDrawable[]){
this.addToArray = comps;
}
// allVisible(content :string="",textColor:string="yellow",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50):Text{
//     let g = new Text(content,x,y,msStart,msEnd);
//     g.d.fontColor = textColor;
//     //----very imp
//     this.addToArray.push(g);
//     g.d.content = content;
//     g.d.x = x;
//     g.d.y = y;
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

//     return g;
// }
txt(content :string="",textColor:string="black",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50):Text{
    let g = new Text();
    g.d.fontColor = textColor;
    //----very imp
    this.addToArray.push(g);
    g.d.content = content;
    g.d.x = x;
    g.d.y = y;
    //---------set all flags true    
    g.d.flagDrawBorder = false;
    g.d.flagDrawContentArea = false;
    g.d.flagDrawMargin = false;
    g.d.flagDrawPadding = false;
    g.d.flagDrawText = true; // keep it true
    //..
    // g.d.fontColor = textColor;
    g.d.fontFamily = FontNames.Helvetica;
    return g;
}
txtBg(content :string="",textColor:string="black",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50):Text{
    let g = new Text();
    g.d.fontColor = textColor;
    //----very imp
    this.addToArray.push(g);
    g.d.content = content;
    g.d.x = x;
    g.d.y = y;
    //---------set all flags true    
    g.d.flagDrawBorder = false;
    g.d.flagDrawContentArea = true;
    g.d.flagDrawMargin = false;
    g.d.flagDrawPadding = true;
    g.d.flagDrawText = true; // keep it true
    //...
    // g.d.widthPadding = padding;
    // g.d.colorContentBg = colorBg; 
    // g.d.colorPadding = colorBg; 
    // g.d.fontColor = textColor;
    g.d.fontFamily = FontNames.Helvetica;
    return g;
}

}