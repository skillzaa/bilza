import LineStruct from "./lineStruct.js";

/**
 * lineSeg Component
 * lineStruct need 9 args here are 7 the remaing r x2,y2 that we can take from user seperately.
 * each line can have its own args, if not provided then they will be filled in from class variables.
 * --No animation except those that can be applied on the comp
 */


export default class Seg {    
private readonly startX :number;
private readonly startY :number;
public color :string;
public lineWidth :number;
public lineCap :0|1|2;
public lineJoin :0|1|2;
public lineDash:[number,number];
//////////////////////////////////////
private data : LineStruct[]; 
private localData : LineStruct[]; 


constructor(
data : LineStruct[],x :number,y :number,color:string="black", 
//--optional
lineWidth :number = 4,
lineCap :0|1|2 = 0,
lineJoin :0|1|2 = 0,
lineDash:[number,number] = [1,0]
) {

this.startX= x;
this.startY= y;
this.color= color;
this.data = data;
this.lineWidth = lineWidth,
this.lineCap = lineCap;
this.lineJoin = lineJoin;
this.lineDash = lineDash;

this.localData = [];
}


add(x :number,y  :number,
    lineWidth :number = this.lineWidth,
    lineCap :0|1|2 = this.lineCap,
    lineJoin :0|1|2 = this.lineJoin,
    lineDash:[number,number] = this.lineDash
):Seg{

if (this.localData.length == 0){
    const l = new LineStruct (this.startX,this.startY,
        x,y, this.color ,lineWidth,lineCap,lineJoin,lineDash);
        this.localData.push(l);

}else {

    const endX = this.localData[this.localData.length-1].x2;
    const endY = this.localData[this.localData.length-1].y2;

    const l = new LineStruct (endX,endY,
        x,y,this.color,lineWidth,lineCap,lineJoin,lineDash);
    this.localData.push(l);
}
return this;
}

save(){
   for (let i = 0; i < this.localData.length; i++) {
    const line = this.localData[i];
    this.data.push(line);
   } 
}
}