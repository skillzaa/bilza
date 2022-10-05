import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
////////////////////////////////////////////////////////

export default class Background extends CompEngine {

constructor (corePropsDb :CorePropsDb,pack :Pack){ 
super(corePropsDb,pack);
   
this.drawLayer = 0;
// this.color.set(corePropsDb.color.value); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
// p.drawBackground("blue");
return true;
}
 

}