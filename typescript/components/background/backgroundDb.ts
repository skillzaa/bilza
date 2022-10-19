import {AniNumberDb,AniStringDb,AniColorDb,AniBooleanDb} from "../../animations/animations.js";

import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
import CompEngine from "../../compEngine/compEngine.js";
import Pack from "../../pack/pack.js";
import Linker from "../../facade/linker.js";

export default class BackgroundDb extends CompDb {
public color:AniColorDb;


constructor(linker :Linker, color :string="#efeee3")
{
super(linker);
  
this.color = new AniColorDb(color);
}

 
getEngineComp(pack :Pack):CompEngine{
    const comp = new Background(this,pack);
    return comp; 
 }

 
}