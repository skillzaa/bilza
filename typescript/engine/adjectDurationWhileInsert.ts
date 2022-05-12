import { IComponent } from "../Bilza";
/**
 * ---JUST 2 TWO VARIABLES
 * The purpose of adjectDurationWhileInsert is to adjest 2 TWO variables before inserting a component :
 *  --- Bil Duration : unlike component duration (which is a constant) bilDuration can be changed and is the result of other component durations etc.
 * --- Comp setStartTime() : The time when the comp will start inside the video.
 */

export default function adjectDurationWhileInsert (comp :IComponent,bilDuration :number,extendDuration :(n:number)=>number):boolean{
let r = false;    
    
    switch (comp.insertType) {
        case comp.insertTypeOptions.AlwaysOn:
        r = true;    
        break;
    
        case comp.insertTypeOptions.Append:
        //--1 : comp.duration cant be > 0 
        if (comp.duration() < 1) {
            throw new Error("for Insert operation to succeed you need component duration greater than 0");
        }
        //--2 : set comp startTime = bilza.len() now.
        comp.setStartTime(bilDuration);
        //--3 : Add comp duration to this.duration .
        extendDuration(comp.duration());
        r = true;   
        break;
    
        case comp.insertTypeOptions.Insert:
        //--1 : stop if startTime > bil.duration(false);
            if (comp.getStartTime(false) > bilDuration){
                throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${bilDuration} , this creates a blank space of ${Math.ceil(comp.getStartTime() - bilDuration)} seconds.`);
            }
        //--2 : now check if endTime of comp is larger than the bil or not (check endTime)
        //false means in seconds
        if (comp.getEndTime(false) <= bilDuration){
            //no need to change anything
            r = true;
        }else {
            let overlap = comp.getEndTime(false) - bilDuration;
            extendDuration(overlap);
            r = true;
        }          
            break;
    
        default:
            break;
    }
    
return r;
}
    