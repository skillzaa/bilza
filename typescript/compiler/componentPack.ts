




export default class ComponentPack{
public canvasWidth :number;    
public canvasHeight :number;
public charsWidth :(chars:string,fontSize:number,fontName:string)=>number;


constructor(
    canvasWidth :number,
    canvasHeight :number,
    charsWidth:(chars:string,fontSize:number,fontName:string)=>number
){

this.canvasWidth = canvasWidth ;
this.canvasHeight = canvasHeight ;
this.charsWidth = charsWidth;
}


////////////////////////////////////    
}