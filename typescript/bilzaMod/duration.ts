
export default class Duration {
//the size of video-length in milli seconds         
private _pvt_duration_val :number; 
 
constructor(){
this._pvt_duration_val = 0; 
}
////////////////////////////////////////////////////
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
public set(n :number):number {
this._pvt_duration_val = n;
    return this._pvt_duration_val;
}
  
}//duration