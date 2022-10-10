import IComponent from "../../compDb/IComponent.js";
import {AniNumberDb,AniStringDb,AniColorDb,AniBooleanDb} from "../../animations/animations.js";



export default interface ICanvasBorder extends IComponent{
borderWidth :AniNumberDb;
}