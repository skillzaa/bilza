import TextBase from "./textBase.js";

export default class Text extends TextBase{
    constructor(content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10){
super(content,color,x,y,widthPercent,heightPercent);
    }
} 