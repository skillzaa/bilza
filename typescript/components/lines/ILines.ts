import IComponent from "../../compDb/IComponent.js";

import {AniNumberDb,AniBooleanDb,AniPercDb,AniColorDb} from "../../animationsFacade/animationsDb.js";
import LineStruct from "./lineStruct.js";



export default interface ILines extends IComponent{
data : LineStruct[];

add(x1 :number,y1 :number,x2 :number,y2 :number,
    color? :string,lineWidth? :number,lineCap? :0|1|2,lineJoin? :0|1|2,lineDash? :[number,number]):void;    
}