import Text from "./text.js";


export default class TextTemplates {
constructor(){}

static normal(content :string,color="black",fontSize=40):Text{
let f = new Text(content);
f.fontSize = fontSize;
f.x = 0;
f.y = 0;
f.underline = true;
f.overline = false;
f.fontSize = 100;
f.shadow = false;
f.fontColor = color;
f.underlineColor = color;
f.underlineWidth = 10;
f.overlineWidth = 10;
f.overlineColor = color;
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