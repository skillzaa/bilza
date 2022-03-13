
import {Bilzaa2d,Text,GridTemplates,XAlignment,YAlignment} from "../index.js";

let b = new Bilzaa2d("bilzaa");
b.canvasHeight = 300;
b.canvasWidth = 800;
b.init();

let grid  = GridTemplates.dashedGrid();
b.add(grid);

let leftTop = new Text();
leftTop.d.content = "LeftTop" ;
leftTop.d.x = 0 ;
leftTop.d.y = 0 ;
leftTop.d.xAlignment = XAlignment.Left;
leftTop.d.fontSize = 40;
leftTop.d.fontColor = "red";
b.add(leftTop);
///////////////////////////////////////
let leftMid = new Text();
leftMid.d.content = "LeftMid" ;
leftMid.d.x = 0 ;
leftMid.d.y = 50 ;
leftMid.d.xAlignment = XAlignment.Left;
leftMid.d.yAlignment = YAlignment.Mid;
leftMid.d.fontSize = 40;
leftMid.d.fontColor = "red";
b.add(leftMid);
///////////////////////////////////////
let leftBot = new Text();
leftBot.d.content = "LeftBot" ;
leftBot.d.x = 0 ;
leftBot.d.y = 100 ;
leftBot.d.xAlignment = XAlignment.Left;
leftBot.d.yAlignment = YAlignment.Bottom;
leftBot.d.fontSize = 40;
leftBot.d.fontColor = "red";
b.add(leftBot);
///////////////////////////////////////

/////--------------SECOND ROW----------------------
let midTop = new Text();
midTop.d.content = "MidTop" ;
midTop.d.x = 50 ;
midTop.d.y = 0 ;
midTop.d.xAlignment = XAlignment.Mid;
midTop.d.yAlignment = YAlignment.Top;
midTop.d.fontSize = 40;
midTop.d.fontColor = "green";
b.add(midTop);
///////////////////////////////////////
let midMid = new Text();
midMid.d.content = "MidMid" ;
midMid.d.x = 50 ;
midMid.d.y = 50 ;
midMid.d.xAlignment = XAlignment.Mid;
midMid.d.yAlignment = YAlignment.Mid;
midMid.d.fontSize = 40;
midMid.d.fontColor = "green";
b.add(midMid);
///////////////////////////////////////
///////////////////////////////////////
let midBot = new Text();
midBot.d.content = "MidBot" ;
midBot.d.x = 50 ;
midBot.d.y = 100 ;
midBot.d.xAlignment = XAlignment.Mid;
midBot.d.yAlignment = YAlignment.Bottom;
midBot.d.fontSize = 40;
midBot.d.fontColor = "green";
b.add(midBot);
///////////////////////////////////////

//--------------Third row
let rightTop = new Text();
rightTop.d.content = "RightTop" ;
rightTop.d.x = 100 ;
rightTop.d.y = 0 ;
rightTop.d.xAlignment = XAlignment.Right;
rightTop.d.yAlignment = YAlignment.Top;
rightTop.d.fontSize = 40;
rightTop.d.fontColor = "blue";
b.add(rightTop);
///////////////////////////////////////
let rightMid = new Text();
rightMid.d.content = "RightMid" ;
rightMid.d.x = 100 ;
rightMid.d.y = 50 ;
rightMid.d.xAlignment = XAlignment.Right;
rightMid.d.yAlignment = YAlignment.Mid;
rightMid.d.fontSize = 40;
rightMid.d.fontColor = "blue";
b.add(rightMid);
///////////////////////////////////////
///////////////////////////////////////
let rightBot = new Text();
rightBot.d.content = "RightBot" ;
rightBot.d.x = 100 ;
rightBot.d.y = 100 ;
rightBot.d.xAlignment = XAlignment.Right;
rightBot.d.yAlignment = YAlignment.Bottom;
rightBot.d.fontSize = 40;
rightBot.d.fontColor = "blue";
b.add(rightBot);


   b.draw();
   // b.start();
console.log(b);