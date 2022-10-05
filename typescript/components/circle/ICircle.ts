import IComponent from "../../compDb/IComponent.js";
import {AniBooleanDb , AniColorDb , AniNumberDb} from "../../animationsFacade/animationsDb.js";



export default interface ICircle extends IComponent{
    startAngle :AniNumberDb;
    endAngle :AniNumberDb;
    filled :AniBooleanDb;
    lineWidth :AniNumberDb; 
    strokeWidth :AniNumberDb; 
    strokeColor :AniColorDb; 
}