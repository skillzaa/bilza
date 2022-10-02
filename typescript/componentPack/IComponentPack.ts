

export default interface IComponentPack{

startTime :number;    
endTime :number;    
canvasWidth :number;    
canvasHeight :number;
charsWidth :(chars:string,fontSize:number,fontName:string)=>number;

setStartTime(startTime :number):number;
setEndTime(endTime :number):number;
setId(id:string):string;


}