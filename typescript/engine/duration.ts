import {DrawLayer,IComponent,Pack} from "../Bilza.js";

export default class Duration {
private _pvt_duration_val :number; //the size of video-length in milli seconds     
constructor(){
//14-may-2022-duration in seconds-dafault=0;    
this._pvt_duration_val = 0; 
}
////////////////////////////////////////////////////
//14-may-2022-Return the length of the video
public len(inMilliSeconds :boolean = true):number{
    if (inMilliSeconds){
        return (this._pvt_duration_val * 1000);
    }else {
        return (this._pvt_duration_val);
    }
}
//14-may-2022-The only place to extend duration
public extend(n :number):number {
this._pvt_duration_val += n;
    return this._pvt_duration_val;
}
///////////////////
public adjectWhileInsert (comp :IComponent):boolean{
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
        comp.setStartTime(this.len(false));
        //--3 : Add comp duration to this.duration .
        this.extend(comp.duration());
        r = true;   
        break;
    
        case comp.insertTypeOptions.Insert:
        //--1 : stop if startTime > bil.duration(false);
            if (comp.getStartTime(false) > this.len()){
                throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.len())} seconds.`);
            }
        //--2 : now check if endTime of comp is larger than the bil or not (check endTime)
        //false means in seconds
        if (comp.getEndTime(false) <= this.len()){
            //no need to change anything
            r = true;
        }else {
            let overlap = comp.getEndTime(false) - this.len();
            this.extend(overlap);
            r = true;
        }          
            break;
    
        default:
            break;
    }
    
return r;
}
    
}//duration