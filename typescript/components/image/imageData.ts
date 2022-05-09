import CompDataBase from "../../design/CompDataBase.js";  
import {XAlignment} from "../compsDesign/xAlignment.js";
import {YAlignment} from "../compsDesign/yAlignment.js";

export class ImageData extends CompDataBase{
    xAlignment :XAlignment;
    yAlignment :YAlignment;
       
widthPercent :number;
heightPercent :number;
constructor(){
    super();
this.msStart =0; 
this.x = 0 ;
this.y = 0 ;
this.widthPercent = 10;
this.heightPercent = 10;
this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;

}
};
 

export default function DataFn ():ImageData  {
let td = new ImageData();
return td;
}
