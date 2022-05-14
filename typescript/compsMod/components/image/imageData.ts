import CompDataBase from "../../BaseComponent/CompDataBase.js";  
import {XAlignment} from "../../BaseComponent/xAlignment.js";
import {YAlignment} from "../../BaseComponent/yAlignment.js";

export class ImageData extends CompDataBase{
    xAlignment :XAlignment;
    yAlignment :YAlignment;
       
dynWidthPercent :number;
dynHeightPercent :number;

useDynResize :boolean;
constructor(){
    super();
this.msStart =0; 
this.x = 0 ;
this.y = 0 ;
this.dynWidthPercent = 30;
this.dynHeightPercent = 50;
this.useDynResize = true;
this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;

}
};
 

export default function DataFn ():ImageData  {
let td = new ImageData();
return td;
}
