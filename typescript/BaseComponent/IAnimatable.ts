import {OffScreenXOpt,OffScreenYOpt,XAlignment,YAlignment} from "../bilza.js";

export default interface IAnimatable{

    goto(atFrame :number,x :number|OffScreenXOpt , y :number|OffScreenYOpt,xAlign ?:XAlignment,yAlign ?:YAlignment,xExtra ?:number,yExtra ?:number):boolean; 

    animate(timeFrom :number,timeTo :number,
        xFrom :number |OffScreenXOpt,xTo :number |OffScreenXOpt, yFrom :number|OffScreenYOpt,yTo :number |OffScreenYOpt,
        
        xAlignFrom ?:XAlignment,xAlignTo ?:XAlignment,
        yAlignFrom ?:YAlignment,yAlignTo ?:YAlignment,
        
        xExtraFrom ?:number,xExtraTo ?:number,yExtraFrom ?:number,yExtraTo ?:number):boolean;

}
