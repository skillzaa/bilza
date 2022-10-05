import CompDb  from "../compDb/compDb.js";
import EngineDb from "../engine/engineDb.js";
import Engine from "../engine/engine.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
import Compiler from "../compiler/compiler.js";

//--30-9-2022-This level does not export any object just API
export default class Bilza {
//--The background API just has 1 AniColorDb    
public background: BackgroundDb;
private engine:EngineDb;
private comps :CompDb[];
private bil :Engine | null;

constructor(canvasId :string="bilza",canvasWidthPerc :number=70){


this.engine = new EngineDb(canvasId,canvasWidthPerc);
this.comps = [];
//--this.background is in comps and avaialbe on top level also
this.background = new BackgroundDb(0,0,"alwaysOn","#efeee3");
this.background.alwaysOn = true;
this.comps.push(this.background);
// this.background.alwaysOn = true;

//--collection of comp DB classes
this.bil = null;
}
//--does not need ComponentPack since this is DB object
add(secStart :number,secEnd :number):CompFactory{
const cf = new CompFactory(secStart,secEnd,this.comps,"add",this.engine.canvasWidth,this.engine.canvasHeight);
return cf;
}
alwaysOn():CompFactory{
const cf = new CompFactory(0,1,this.comps,"alwaysOn",this.engine.canvasWidth,this.engine.canvasHeight);
return cf;
}
append(duration :number):CompFactory{
const cf = new CompFactory(0,duration,this.comps,"append",this.engine.canvasWidth,this.engine.canvasHeight);
return cf;
}


init(){
if (this.bil !== null){return;}
const compiler = new Compiler();
this.bil = compiler.genApp(this.engine,this.comps);
// this.bil.init();
}

draw(timeSec :number=0){
if (this.bil !== null){
    this.bil.draw(timeSec);
    }else {
        this.init(); 
        this.draw()
    }
}

start(){
    this.init();
    if (this.bil == null){throw new Error("init error"); }
    this.bil.start();
}

stop( ){
if (this.bil == null){throw new Error("init error"); }
this.bil.stop();
}



resizeCanvas(){

}

////////////////////////////////////
}