import LineStruct from "./lineStruct.js";




export default class Seg {
private readonly startX :number;
private readonly startY :number;
private readonly color :string;
private data : LineStruct[]; 
private localData : LineStruct[]; 


constructor(x :number,y :number,color:string, data : LineStruct[]){
this.startX= x;
this.startY= y;
this.color= color;
this.data = data;
this.localData = [];
}


add(x :number,y :number):Seg{
if (this.localData.length == 0){
    const l = new LineStruct (this.startX,this.startY,
        x,y,"black",5,0,0,[1,0]);

        this.localData.push(l);
}else {
    const endX = this.localData[this.localData.length-1].x2;
    const endY = this.localData[this.localData.length-1].y2;
    const l = new LineStruct (endX,endY,
        x,y,"black",5,0,0,[1,0]);

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