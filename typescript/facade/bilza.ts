import CompDb  from "../compDb/compDb.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
import CompFactory from "./coreCompsFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
import Compiler from "../compiler/compiler.js";
import LineShapes from "./lineShapes.js";
import Scene from "../scene/scene.js";
import Scenes from "../scene/scenes.js";
import Linker from "./linker.js";
//--30-9-2022-This level does not export any object just API
export default class Bilza {
//--The background API just has 1 AniColorDb    
public background: BackgroundDb;
private engine:EngineDb;
private comps :CompDb[];
private bil :Engine | null;

public lineShapes :LineShapes;
//----------------------------------------------------
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.engine = new EngineDb(canvasId,canvasWidthPerc);
this.comps = [];
//--this.background is in comps and avaialbe on top level also
this.background = new BackgroundDb( this.getLinker(0,1,"alwaysOn") ,"#efeee3");
this.background.alwaysOn = true;
this.comps.push(this.background);
//--collection of comp DB classes
this.bil = null;
this.lineShapes = new LineShapes( this.getLinker(0,1,"add") );
}

//--does not need ComponentPack since this is DB object
public add(secStart :number,secEnd :number):CompFactory{
const cf = new CompFactory(this.getLinker(secStart,secEnd,"add"));
return cf;
}
public alwaysOn():CompFactory{
const cf = new CompFactory(this.getLinker(0,1,"alwaysOn"));
return cf;
}
public append(duration :number):CompFactory{
const cf = new CompFactory(this.getLinker(0,duration,"append"));
return cf;    
}


private init(){
if (this.bil !== null){return;}
const compiler = new Compiler();
this.bil = null;
this.bil = compiler.genApp(this.engine,this.comps);
// this.bil.init();
}

public draw(timeSec :number=0){
if (this.bil !== null){
    this.bil.draw(timeSec);
    }else {
        this.init(); 
        this.draw()
    }
}

public start(){
    this.init();
    if (this.bil == null){throw new Error("init error"); }
    this.bil.start();
}

public stop( ){
if (this.bil == null){throw new Error("init error"); }
this.bil.stop();
}

getEngine():Engine | null{    
return this.bil;    
}

public resizeCanvas(wd :number,ht :number | null){
if (this.bil == null){throw new Error("init error");}    
this.bil.resizeCanvas(wd,ht);
}

public getScene(startTime :number, endTime :number):Scene{
const l = this.getLinker(startTime,endTime,"add");    
const sp = new Scene( l );
return sp;    
}
public addScene(startTime :number, endTime :number):Scenes{
const scene = this.getScene(startTime,endTime);    
return new Scenes( scene );
}

private getLinker(startTime :number, endTime :number, insertAction :"add"|"append" | "alwaysOn"):Linker{
const linker = new Linker(startTime,endTime,this.comps,insertAction,this.engine.canvasWidth,this.engine.canvasHeight,this.engine.charsWidth);
return linker;    
}
////////////////////////////////////
}