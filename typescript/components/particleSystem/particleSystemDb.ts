import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
 
import ParticalSystem from "./particleSystem.js";
import IParticleSystem from "./IParticleSystem.js";

import Pack from "../../pack/pack.js";
import {AniNumberDb,AniBooleanDb,AniColorDb} from "../../animations/animations.js";
 
//////////////////////////////////////////
export default class ParticleSystemDb extends CompDb implements IParticleSystem {

   public count :AniNumberDb;
   public particleSize :AniNumberDb;
   public delay :AniNumberDb;
   public lineWidth :AniNumberDb;
   public filled :AniBooleanDb;
   public lineColor :AniColorDb;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,count :number= 20,color :string="#008000",delay :number=50){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

//xxxxxxxxxxxxxxxxxxxxxxxxxxx

this.count = new AniNumberDb( count );
this.particleSize = new AniNumberDb( 5 );
this.lineWidth = new AniNumberDb(1);
this.filled = new AniBooleanDb(true);
this.lineColor = new AniColorDb(color);
this.delay = new AniNumberDb(delay);
//---core prop
this.color.set(color);
} 
 
getEngineComp(pack :Pack):compEngine{
   const comp = new ParticalSystem(this,pack);
   return comp; 
}
    
}