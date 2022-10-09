


export default class LineStruct {

x1 :number;    
y1 :number;    
x2 :number;    
y2 :number;    
color :string;    
lineWidth :number;    
// opacity :number;    
lineCap  :0 | 1 | 2;    
lineJoin :0 | 1 | 2;    
lineDash :[line:number, gap:number];

//.....
constructor(
    x1 :number,y1 :number,x2 :number,y2 :number,
    color :string = "black",
    lineWidth :number = 3,
    lineCap :0|1|2,
    lineJoin :0|1|2 = 0,
    lineDash:[number,number] = [1,0]
    ){
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.color = color;
this.lineWidth = lineWidth;
this.lineCap = lineCap;
this.lineJoin = lineJoin;
this.lineDash = lineDash;

}



}