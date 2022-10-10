import IComponent from "../../compDb/IComponent.js";

import {AniNumberDb,AniBooleanDb,AniPercDb,AniColorDb} from "../../animations/animations.js";



export default interface ICurve extends IComponent{
    startX              : AniNumberDb;
    startY              : AniNumberDb;
    midX                : AniNumberDb;
    midY                : AniNumberDb;
    endX                : AniNumberDb;
    endY                : AniNumberDb;
    lineWidth           : AniNumberDb;
    bracketWidth        : AniNumberDb;
    showBracket         : AniBooleanDb;
    colorBracket        : AniColorDb;
}