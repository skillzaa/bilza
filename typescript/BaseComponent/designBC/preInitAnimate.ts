

export default class  PreInitAnimate {

timeFrom :number;
timeTo :number;
xFrom :number;
xTo :number;
yFrom :number;
yTo :number;
 
xExtraFrom :number;
xExtraTo :number;
yExtraFrom :number;
yExtraTo :number

constructor(timeFrom :number,timeTo :number,
xFrom :number, xTo :number,yFrom :number, yTo :number,
 
xExtraFrom :number=0,xExtraTo :number=0,yExtraFrom :number=0,
yExtraTo :number=0
){
this.timeFrom = timeFrom; 
this.timeTo = timeTo ;
this.xFrom = xFrom ;
this.xTo = xTo ;
this.yFrom = yFrom; 
this.yTo = yTo ;
this.xExtraFrom = xExtraFrom ;
this.xExtraTo = xExtraTo ;
this.yExtraFrom = yExtraFrom ;
this.yExtraTo = yExtraTo ;
    
}
}
