import IComponent from "../../compDb/IComponent.js";
import {AniNumberDb,AniColorDb,AniStringDb,AniBooleanDb} from "../../animationsFacade/animationsDb.js";
import {FontFamily}  from "../../pack/fontFamily.js";



export default interface IRect extends IComponent{

    content :AniStringDb;
    fontFamily :FontFamily;
    maxDisplayChars :AniNumberDb; 
    fitToWidth :AniBooleanDb; 
}