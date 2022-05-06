import {DrawLayer,IComponent} from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import Text from "../components/text/text.js";
//----------Templates
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";

export default class Bilza extends BilzaCanvasSetup {
//==================PUBLIC API
public add :CompFactory; 
public textTempl :TextTemplWrapper; 
public gridTempl :GridTemplates; 
public background :Background;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",timeEndSec=60,canvasWidth=800,canvasHeight :null|number=300){
//internal seq of args is different from enternal seq of args    
super(canvasId,canvasWidth,canvasHeight,timeEndSec);
this.background = new Background();
this.add = new CompFactory(this.insert.bind(this));
this.textTempl = new TextTemplWrapper(this.insert.bind(this));
this.gridTempl = new GridTemplates(this.insert.bind(this));
} 
//--moved her due to  
insert(comp:IComponent):IComponent{
    // comp.init(this.pack);
    this.comps.push(comp);
    return comp;
}
insertAt(comp:IComponent, second :number):IComponent{
    let secondMs = second * 1000;
    let startTime = comp.getStartTime();
    let endTime = comp.getEndTime();
    comp.setStartTime(startTime + secondMs);
    comp.setEndTime(endTime + secondMs);
        if (this.getTimeEnd() < comp.getEndTime()){
            this.setTimeEnd(comp.getEndTime());
        }
    this.comps.push(comp);
    return comp;
}
//-- this is not in bilzaTimer due to this.draw
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
    // this.frame += 1; /// use later if req internally
let msDelta = this.getMsDelta();
    //stop if completed
if(msDelta >= this.timeEnd){ this.stop();}     
this.pack.clearCanvas();          
//--keep the draw sequence : bg-bg-middle-foreground
this.pack.drawBackground(this.background.color); //fornow         
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

dynamicCanvas(widthInPercent :number=100,heightInPercent :number=100):boolean{
let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
if (wd < 100 || ht < 100){ //--dont make too small canvas
    return false;
}else {
    this.setCanvas(wd,ht);  
return true;
}
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

public init(){
    for (let i = 0; i < this.comps.length; i++) {
    this.comps[i].init(this.pack);    
    }
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
}//ends
