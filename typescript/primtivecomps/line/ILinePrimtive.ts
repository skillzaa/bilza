import IPrimtive from "../IPrimtive";




export default interface ILinePrimtive extends IPrimtive {
    x1 :number;
    y1 :number;
    x2 :number;
    y2 :number;
    color :string;
    lineWidth :number;
    lineCap :0|1|2 ;
    lineJoin :0|1|2 ;
    lineDash:[number,number] ; 
}