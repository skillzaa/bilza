import IComponent from "../../compDb/IComponent.js";
import {AniNumberDb,AniBooleanDb,AniColorDb} from "../../animationsFacade/animationsDb.js";


 
export default interface IParticleSystem extends IComponent{

count :AniNumberDb;
delay :AniNumberDb;
particleSize :AniNumberDb;
lineWidth :AniNumberDb;
filled :AniBooleanDb;
lineColor :AniColorDb;

}