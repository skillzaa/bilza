import { IComponent } from "../Bilza";


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
            if (comp.getStartTime() >= bilDuration){
                throw new Error("to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames");
            }
        //--2 : now check if endTime of comp is larger than the bil or not
        if (comp.getEndTime() <= bilDuration){
            //no need to change anything
            r = true;
        }else {
            let overlap = comp.getEndTime() - bilDuration;
            extendDuration(overlap);
            r = true;
        }  
        
            break;
    
        default:
            break;
    }
    
return r;
}
    