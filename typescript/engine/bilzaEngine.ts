import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import Text from "../components/text/text.js";
//----------Templates
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Comps from "./comps/comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";


export default class Bilza {
//==================PUBLIC API
public add :CompFactory; 
public textTempl :TextTemplWrapper; 
public gridTempl :GridTemplates; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 
protected interval : number | null;
protected  msPerFrame :number; //????
protected timeStart :number | null; //when we start video
protected timeEnd :number; //the size of video-length in milli seconds 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
protected pack:Pack; //---later
// protected canvasId :string;
protected canvas :HTMLCanvasElement;
protected comps:Comps; 
public util :Fn;
insert : (comp:IComponent)=>IComponent;
init : ()=>boolean;
resizeAll : (width :number,height :number)=>boolean;
drawByDrawLayer :(msDelta :number,drawLayer :DrawLayer,pack :Pack)=>boolean;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",timeEndSec=60,canvasWidth=800,canvasHeight :null|number=null){
//internal seq of args is different from enternal seq of args    
this.util = new Fn();  
//i dont need to save canvas id for later???
// this.canvasId = canvasId;
this.canvas =  getCanvasElement(canvasId);

this.pack = new Pack(this.canvas,canvasWidth,canvasHeight);
/////
this.background = new Background();
///////////////
this.timeStart = null; 
this.timeEnd = timeEndSec * 1000; //to convert into milli sec
this.interval = null; //to save setInterval handler
// this.msPerFrame = 1000; // 1 sec
this.msPerFrame = 100; //make it 100 ms
//////////////////----comps
this.comps = new Comps(this.pack);
this.insert = this.comps.insert.bind(this.comps);
this.init = this.comps.init.bind(this.comps);
this.drawByDrawLayer = this.comps.drawByDrawLayer.bind(this.comps);
this.resizeAll = this.comps.resizeAll.bind(this.comps);
////--Templates
//--I think sending pack to compFacoty is wrong!!!!!??????
this.add = new CompFactory(this.insert.bind(this),this.pack);
this.textTempl = new TextTemplWrapper(this.insert.bind(this));
this.gridTempl = new GridTemplates(this.insert.bind(this));


} 
//--moved her due to  

start() :boolean{
if (this.timeStart !== null){return false;}
else {
    this.stop();
    this.init(); //importantay
    this.timeStart = new Date().getTime();
        this.interval = window.setInterval(()=>{
        this.draw();
        },this.msPerFrame);
        return true;
}    
}

////////////////////////////////////// 
public drawInit(){
    this.init();
    this.draw();
}
draw():boolean{
 if(this.pack == null){
throw new Error("bilzaa is not initialized");}   
let msDelta = this.getMsDelta();
    //stop if completed
if(msDelta >= this.timeEnd){ this.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.background.draw(this.pack); //fornow         
this.drawByDrawLayer(msDelta,DrawLayer.BackGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.MiddleGround,this.pack);
this.drawByDrawLayer(msDelta,DrawLayer.ForeGround,this.pack);
///-----connection with outer world
this.drawEvent(msDelta);
return true;
}
drawEvent(msDelta :number):boolean{
// console.log("drawEventn");
    return true;
}

dynamicCanvas(widthInPercent :number = 95,heightInPercent :number | null=null):boolean{
let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
let ht :number | null = null;
if (heightInPercent !== null){
    let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
}
    this.setCanvas(wd,ht);  
return true;
// }
}
//---this is a Text component consumer method- i need seperate files for such type of methods. The Bilza engine is in a vertical hierarchy i.e classic parent to child to grand child.
public dynamicFontSize(txt :Text,widthPercent :number=10,heightPercent :number | null=null,setFontSize :boolean=true):number | null{
    if (heightPercent == null){heightPercent = widthPercent;}
let reqWd = (this.pack.canvasWidth() /100 * widthPercent);
let reqHt = (this.pack.canvasWidth() /100 * heightPercent);
// if txt.d.fontSize is recently set then txt.style.fontSize may be different since they sync in draw or update fn. So sync then and then just use style and finally sync both
txt.style.fontSize = txt.d.fontSize;
let oldFontSize = txt.d.fontSize;
let newWidth = 0; 
let newHeight = 0;

    for (let i = 1; i < 900; i++) {
    //----Big secret found in the code txt.d.fontSize vs text.style.fontSize
    // txt.d.fontSize = i; 
    txt.style.fontSize = i; 
    newWidth = txt.width(this.pack)
    newHeight = txt.height(this.pack);
//---which Ever is reached first
//console.log("i",i, "newWidth",newWidth,"reqWd",reqWd);
//console.log("----");
    if (newWidth >= reqWd || newHeight >= reqHt){
        // console.log("dynamicFontSize",returnFontSize);
        if (setFontSize == false){
            txt.d.fontSize = oldFontSize; 
            txt.style.fontSize = oldFontSize; 
            return i;
        }else {
            txt.d.fontSize = i; 
            txt.style.fontSize = i;
            return txt.d.fontSize;
        }
    } 
}//for end  
//console.log("txt.d.fontSize",txt.d.fontSize);
return null;
}//dynamic font size

////////////////////////////////////////////////////

//Timer
getTimeEnd():number{
return this.timeEnd;
}
//Timer
setTimeEnd(n :number) :number{
this.timeEnd = n;
return this.timeEnd;
}

protected getMsDelta() :number{
if (this.timeStart ==null){   
    return 0;
} else{
let curTime = new Date().getTime();
return curTime - this.timeStart;
}
}
public setMsDelta(n :number) :number{
if (this.timeStart ==null){ return 0;}//error bilza not running
if (n > this.getTimeEnd() || n < 0){return 0;}//0 = this.timeStart
this.timeStart = new Date().getTime() - n;
return this.timeStart;
}


stop():boolean{
    this.timeStart = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
return true;    
}

////////////////////////////////////////////////////

setCanvas(width :number = 800,height :number|null = null){
    if (height ==null){
        height = this.util.aspectRatioHeight(width);
    }

this.pack = new Pack(this.canvas,width,height);
//---remove this from here?????
this.resizeAll(this.pack.canvasWidth(),this.pack.canvasHeight());
}
//
getCanvasHeight():number{
return this.pack.canvasHeight();    
}

getCanvasWidth():number{
return this.pack.canvasWidth();    
}
///insert moved to 03Canvas setup since it needs pack for comp.init 

//--Test created
chqCollision(x :number, y :number):IComponent | null{
    return null;
}

    
////---????????
    
////////////////////////////////////////////////////
}//ends
