import { IComponent} from "../bilza.js";

export default interface IScene {
    getComps():IComponent[];
    getStartTime():number;
    getEndTime():number;
    duration():number;
    add(comp :IComponent,startTimeSec :number, endTimeSec :number):void;
} 