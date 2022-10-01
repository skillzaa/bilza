import IComponent  from "./IComponent.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../db/backgroundDb.js";
import Compiler from "../compiler/compiler.js";

//--30-9-2022-This level does not export any object just API
export default class Bilza {
//--The background API just has 1 AniColorDb    
public background: BackgroundDb;
private engine:EngineDb;
private comps :IComponent[];
private bil :Engine | null;
constructor(canvasId :string="bilza",canvasWidthPerc :number=70){
this.engine = new EngineDb(canvasId,canvasWidthPerc);
this.background = new BackgroundDb("green");
this.comps = [];
this.bil = null;
// this.comps.push(this.background);
}

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
start(){

} 
stop(){

}
draw(timeSec :number=0){
const compiler = new Compiler();
this.bil = compiler.genApp(this.engine,this.comps);
this.bil.draw();
console.log("bil",this.bil);
}


isRunning(){

}

resizeCanvas(){

}

////////////////////////////////////
}