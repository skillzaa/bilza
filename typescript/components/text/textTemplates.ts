import Text from "./text.js";
import {XAlignment,YAlignment} from "../../../node_modules/bilzaa2d/src/bilzaa2d/index.js";

export default class TextTemplates {
constructor(){}

static lineMid(content :string,y :number=0,color="black",fontSize=45):Text {
let f = new Text(content);
f.y = y;
f.x=  50; //mid
f.xAlignment = XAlignment.Mid;
f.fontSize = fontSize;
f.underline = false;
f.overline = false;
f.shadow = false;
f.fontColor = color;
return f;
}
static h1Mid(content :string="New Text",fontSize=80,fontColor :string ="red", underlineColor :string = "green",y=15):Text{
let f = new Text(content);
f.fontColor = fontColor;
f.underlineColor = underlineColor;
f.x=50;
f.y= y; //incase want to move y
f.fontSize = fontSize;
f.underline = true;
f.underlineColor = "green";
f.underlineWidth = 8;
f.shadow = true;
f.shadowOffsetX = 10;
f.shadowOffsetY = 10;
f.shadowBlur = 8;
f.xAlignment = XAlignment.Mid;
f.yAlignment = YAlignment.Mid;
return f;
}
static shadow(content :string,color="black",fontSize=40):Text{
let f = new Text(content);
f.fontSize = fontSize;
f.x = 0;
f.y = 0;
f.underline = true;
f.overline = false;
f.fontSize = 100;
f.fontColor = color;
f.underlineColor = color;
f.underlineWidth = 10;
f.overlineWidth = 10;
f.overlineColor = color;
return f;
}


}