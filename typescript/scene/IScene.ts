import { IComponent} from "../bilza.js";

export default interface IScene {
// startTime :number;
// duration :number;    
    getComps():IComponent[];
    getEndTime():number;
    getStartTime():number;
}