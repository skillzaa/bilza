import IComponent from "../../compDb/IComponent.js";
import {AniNumberDb,AniColorDb , AniBooleanDb} from "../../animations/animations.js";
///////////////////////////////////////
export default interface IArrow extends IComponent{

    x2 : AniNumberDb;
    y2 : AniNumberDb;
    headWidth :AniNumberDb;
    headHeight :AniNumberDb;
    headFilled :AniBooleanDb;
    colorHead :AniColorDb;
    lineWidth :AniNumberDb;    

}