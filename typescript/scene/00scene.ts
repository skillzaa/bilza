import { IComponent,CompFactory as cf } from "../bilza.js";
import IScene from "./IScene.js";

export default class Scene implements IScene{

private startTime :number;
private duration :number;    
private comps :IComponent[];

constructor(startTime :number=0,duration :number=60){

this.startTime = startTime;
this.duration = duration;
this.comps = [];

}
//////////////////////////////////////
public getComps():IComponent[]{
this.init();    
return this.comps;
}
public getEndTime():number{
return this.startTime + this.duration;
}        
public getStartTime():number{
return this.startTime;
}        
public getDuration():number{
return this.duration;
}        
//////////////////////////////////////////
protected init(){

}
protected push(comp :IComponent){
this.comps.push(comp);
}
/////////////////////////////////////
}

