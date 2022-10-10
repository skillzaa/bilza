import IComponent from "../../compDb/IComponent.js";
import {AniNumberDb,AniColorDb,AniStringDb,AniBooleanDb} from "../../animations/animations.js";



export default interface IRect extends IComponent{
lineWidth :AniNumberDb;
}