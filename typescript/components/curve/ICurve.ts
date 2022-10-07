import IComponent from "../../compDb/IComponent.js";

import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";



export default interface ICurve extends IComponent{
    startX              : AniNumberDb;
    startY              : AniNumberDb;
    midX                : AniNumberDb;
    midY                : AniNumberDb;
    endX                : AniNumberDb;
    endY                : AniNumberDb;
    lineWidth           : AniNumberDb;
    bracketWidth        : AniNumberDb;
    colorBracket        : AniColorDb;
}