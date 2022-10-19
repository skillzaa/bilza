import IComponent from "../compDb/IComponent.js";
import CompFactory from "../facade/coreCompsFactory.js";
// import SceneComp from "./SceneComp.js";


 
export default interface IScene {
    getComps():IComponent[];
    getStartTime():number;
    getEndTime():number;
    duration():number;
    add(startTime :number,endTime :number):CompFactory;
} 