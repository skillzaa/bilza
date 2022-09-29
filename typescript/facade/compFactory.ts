import FillRect from "../components/fillRect.js";
import IEngineComp from "../component/IEngineComp.js";

export default class CompFactory {
private readonly startTime :number;
private readonly endTime :number;
private actionType :string;
private insert : (comp :IEngineComp,startTime :number,endTime :number,actionType :string)=>IEngineComp;

////////////////////////////////////////////////////
constructor(startTime :number,endTime :number,actionType :string="add", insert : (comp :IEngineComp,startTime :number,endTime :number,actionType :string)=>IEngineComp){

this.insert = insert;
this.startTime = startTime;
this.endTime = endTime;
this.actionType = actionType;
}

/////////--------components functions---///////////
    
}