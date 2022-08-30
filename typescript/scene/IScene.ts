import { IComponent} from "../bilza.js";

export default interface IScene {
    getComps():IComponent[];
    duration():number;
    push(comp :IComponent,startTimeSec :number, endTimeSec :number):void;
} 