import Bilza, { Ui,CompFactory as cf,XAlignOpt,YAlignOpt } from "./bilza.js";
let bil = new Bilza("bilza",70);
bil.background.color.set("#151f59")
// bil.resizeCanvas(500,200);

bil.insert.alwaysOn(cf.frameCounter());

//----Yellow Rectangles for creating a base
baseRect(15,20);
baseRect(45,20);
baseRect(75,20);

baseRect(15,50);
baseRect(45,50);
baseRect(75,50);

baseRect(15,80);
baseRect(45,80);
baseRect(75,80);

//--Heading for Demo
const hdg = cf.text("Rotate Demo","#f00000");
hdg.goto(0,50,2);
bil.insert.add(hdg,0,60);

//---Add the Rotating Rectangles
rotatingRectangle(15,20,XAlignOpt.Left,YAlignOpt.Top);
rotatingRectangle(45,20,XAlignOpt.Mid,YAlignOpt.Top);
rotatingRectangle(75,20,XAlignOpt.Right,YAlignOpt.Top);

rotatingRectangle(15,50,XAlignOpt.Left,YAlignOpt.Mid);
rotatingRectangle(45,50,XAlignOpt.Mid,YAlignOpt.Mid);
rotatingRectangle(75,50,XAlignOpt.Right,YAlignOpt.Mid);

rotatingRectangle(15,80,XAlignOpt.Left,YAlignOpt.Bot);
rotatingRectangle(45,80,XAlignOpt.Mid,YAlignOpt.Bot);
rotatingRectangle(75,80,XAlignOpt.Right,YAlignOpt.Bot);

const ui = new Ui(bil);
bil.draw();
// bil.start();
//////////////////////////////////////


function baseRect(x :number, y :number){
const rectBase = cf.fillRect("#FFF000");
rectBase.goto(0,x,y);
rectBase.width.set(10);
rectBase.height.set(10);
rectBase.xAlign = rectBase.XAlignOpt.Mid;
rectBase.yAlign = rectBase.YAlignOpt.Mid;
bil.insert.alwaysOn(rectBase);    
}

function rotatingRectangle (x :number, y :number,xRotate :XAlignOpt,yRotate :YAlignOpt){

const rect = cf.fillRect("#ff0000");
rect.goto(0,x,y);

rect.width.set(10);
rect.height.set(10);

rect.xRotate = xRotate;
rect.yRotate = yRotate;

rect.xAlign = rect.XAlignOpt.Mid;
rect.yAlign = rect.YAlignOpt.Mid;

rect.rotation.animate(0,60,0,2000);
bil.insert.alwaysOn(rect);
    
}