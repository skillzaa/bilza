import CtxData from "./ctxData.js";



export default class TransitionData {
public    ctxData:CtxData;
public    startFrame :number;
constructor(frame=0){
this.ctxData = new CtxData();
this.startFrame = frame;
}


}