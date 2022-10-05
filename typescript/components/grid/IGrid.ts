import IComponent from "../../compDb/IComponent.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniBooleanDb from "../../animationsFacade/aniBooleanDb/AniBooleanDb.js";

import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";



export default interface IGrid extends IComponent{
    lineDash :number[];
    cellWidth : AniNumberDb;    
    cellHeight :AniNumberDb;
    showHorizontalLines :AniBooleanDb ;   
    showVerticalLines :AniBooleanDb ;   
    lineWidthVertical :AniNumberDb;
    lineWidthHorizontal :AniNumberDb;
    colorHorizontalLines :AniColorDb ;   
    colorVerticalLines :AniColorDb ; 
    colorNumbers :AniColorDb ;   
    showNumbers :AniBooleanDb ;   
    fontSize :AniNumberDb;
}