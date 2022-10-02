import IComponent from "../componentFacade/IComponent.js";
import IComponentPack from "./IComponentPack.js";


/**
 * ComponentPack is used for packing all the required data for creation of a component. It is used so that the component API does not break
 * 
 * ComponentPack contains the external references to link this component to the engine And also containes the arguments that every componeent req
 * for args we use set functions to set them later- thats how we can gen new version from same version.
 * 
 */



export default class ComponentPack implements IComponentPack{
public id :string;    
public startTime :number;    
public endTime :number;    
public canvasWidth :number;    
public canvasHeight :number;
public charsWidth :(chars:string,fontSize:number,fontName:string)=>number;

constructor(
    canvasWidth :number,
    canvasHeight :number,
    charsWidth:(chars:string,fontSize:number,fontName:string)=>number
){
////////////////////////    
this.id = "";
this.startTime = 0;
this.endTime = 0;    
//////////////////////////
this.canvasWidth = canvasWidth ;
this.canvasHeight = canvasHeight ;
this.charsWidth = charsWidth;
}

setStartTime(startTime :number):number{
this.startTime = startTime;
return this.startTime;
}
setEndTime(endTime :number):number{
this.endTime = endTime;
return this.endTime;
}

setId(id :string):string{
this.id = id;
return this.id;
}

////////////////////////////////////    
}