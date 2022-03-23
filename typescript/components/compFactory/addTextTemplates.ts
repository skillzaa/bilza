import {IDrawable,FontNames} from "../../index.js";
import Text from "../text/text.js";

export default class AddTextTemplates {
private addToArray :IDrawable[];
 
constructor(comps :IDrawable[]){
this.addToArray = comps;
}
demo(content :string="",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER, fontColor :string="yellow",fontSize=40)
:Text{
    let g = new Text(content,fontColor,fontSize,
    msStart,msEnd);
    //----very imp
    this.addToArray.push(g);
    //---------set all flags true    
    g.d.flagDrawBorder = true;
    g.d.flagDrawContentArea = true;
    g.d.flagDrawMargin = true;
    g.d.flagDrawPadding = true;
    g.d.flagDrawText = true;
    //---------set colors
    g.d.colorMargin = "red";
    g.d.colorBorder = "green";
    g.d.colorPadding = "blue";
    g.d.colorContentBg = "black";
    // g.d.fontColor = "yellow";
    //---widen all
    g.d.widthBorder = 10;
    g.d.widthMargin = 10;
    g.d.widthPadding = 10;

    return g;
}
txt(content :string="",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,fontColor :string="black",fontSize=40)
:Text{
    let g = new Text(content,fontColor,fontSize,
    msStart,msEnd);
    //----very imp
    this.addToArray.push(g);
    //---------set all flags FALSE --thyue shd be false already    
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
txtBg(content:string="",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,fontColor="yellow",bgColor="#051854"):Text{
    let g = new Text(content,fontColor,50,
        msStart,msEnd);
        g.d.colorContentBg = bgColor;
    //----very imp
    this.addToArray.push(g);
    //---------set all flags true    
    g.d.flagDrawBorder = false;
    g.d.flagDrawContentArea = true;
    g.d.flagDrawMargin = false;
    g.d.flagDrawPadding = true;
    g.d.flagDrawText = true; // keep it true
    g.d.fontFamily = FontNames.Helvetica;
    return g;
}

}