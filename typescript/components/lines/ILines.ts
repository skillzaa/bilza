import IComponent from "../../compDb/IComponent.js";
import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";


/////////////////////////////////////////////////////
export default interface ILines extends IComponent{
data : LineStruct[];

add(x1 :number,y1 :number,x2 :number,y2 :number,
    lineWidth? :number,lineCap? :0|1|2,lineJoin? :0|1|2,lineDash? :[number,number]):void;    
    
    
seg( x :number,y :number,
    // color? :string,
    lineWidth? :number,
    lineCap? :0|1|2,
    lineJoin? :0|1|2,
    lineDash? :[number,number]
    ):Seg;



}

