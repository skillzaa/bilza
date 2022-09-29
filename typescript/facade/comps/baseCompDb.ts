import CoreProps from "./coreProps.js";


export default class BaseCompDb extends CoreProps {
public readonly startTime :number;
public readonly endTime :number;
constructor(id :string,startTime :number,endTime :number){
super(id);
this.startTime = startTime;
this.endTime = endTime;
}

    
}