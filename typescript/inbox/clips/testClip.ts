import {Bilzaa2d,XAlignment,YAlignment,IDrawable} from "../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../../components/text-new/text.js.js";


export default function testClip(frameStart=1,frameEnd=100,content="This is A Test Clip")
:IDrawable{
let f = new Text(content);
f.frameStart = frameStart;
f.frameEnd = frameEnd;
f.fontColor = "green";
f.underlineColor = "blue";
f.x=50;
f.y= 50; //incase want to move y
f.fontSize = 100;
f.underline = true;
f.underlineColor = "crimson";
f.underlineWidth = 8;
f.shadow = true;
f.shadowOffsetX = 10;
f.shadowOffsetY = 10;
f.shadowBlur = 8;
f.xAlignment = XAlignment.Mid;
f.yAlignment = YAlignment.Mid;    
return f;
}