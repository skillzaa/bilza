import { IComponent,CompFactory} from "../bilza.js";
// import SceneComp from "./SceneComp.js";



export default interface IScene {
    getComps():IComponent[];
    getStartTime():number;
    getEndTime():number;
    duration():number;
    add(startTime :number,endTime :number):CompFactory;
} 