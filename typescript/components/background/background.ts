import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
////////////////////////////////////////////////////////

export default class Background extends CompEngine {

constructor (corePropsDb :CorePropsDb,pack :Pack,color :string="#000000"){ 
super(corePropsDb,pack);
   
this.drawLayer = 0;
this.color.set(color); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
return true;
}
 

}