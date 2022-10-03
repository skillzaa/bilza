import IComponent from "../compDb/ICompDb.js";
import IComponentPack from "./IComponentPack.js";
import Time from "../compEngine/time.js";
import Component from "../compEngine/compEngine.js";

/**
 * ComponentPack is used for packing all the required data for creation of a component. It is used so that the component API does not break
 * 
 * ComponentPack contains the external references to link this component to the engine And also containes the arguments that every componeent req
 * for args we use set functions to set them later- thats how we can gen new version from same version.
 * 
 */



export default class ComponentPack implements IComponentPack{
public id :string;    
public insertAction :string;    
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
this.insertAction = "";    
//////////////////////////
this.canvasWidth = canvasWidth ;
this.canvasHeight = canvasHeight ;
this.charsWidth = charsWidth;
}

init(compDb :Component){
//compDb id is not readonly but engine comp id is 
    this.id = compDb.id ;
    this.startTime = compDb.startTime ;
    this.endTime = compDb.endTime ;
    this.insertAction = compDb.insertAction ;
}
////////////////////////////////////    
}