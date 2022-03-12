import {Bilzaa2d,XAlignment,YAlignment,IDrawable} from "../../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../../components/text/text.js";
import {GridTemplates} from "../../components/grid/grid.js";
import FrameCounter from "../../components/frameCounter/frameCounter.js";


export default function textSlide(frameStart :number,frameEnd :number,hdg:string,lineOne:string,lineTwo:string){
let r:IDrawable[] = [];

r.push(h1mid(hdg,frameStart,frameEnd));

r.push(lineMid(lineOne,frameStart + 2,frameEnd,45,40,"green"));
r.push(lineMid(lineTwo,frameStart + 3,frameEnd,65,40,"purple"));
    
return r;
}

function h1mid(content:string,frameStart=1,frameEnd=100,fontSize=80,fontColor :string ="red", underlineColor :string = "green",y=15):IDrawable{
let f = new Text(content);
f.frameStart = frameStart;
f.frameEnd = frameEnd;
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
function lineMid(content:string,frameStart = 1,frameEnd=100,y=45,fontSize=40,color="blue"):IDrawable{

let f = new Text(content);
f.frameStart = frameStart;
f.frameEnd = frameEnd;
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