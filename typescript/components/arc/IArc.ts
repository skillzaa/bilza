import IComponent from "../../compDb/IComponent.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";



export default interface IArc extends IComponent{
    // startX      : AniNumberDb;
    // startY      : AniNumberDb;
    midX        : AniNumberDb;
    midY        : AniNumberDb;
    endX        : AniNumberDb;
    endY        : AniNumberDb;
    lineWidth   : AniNumberDb;
}