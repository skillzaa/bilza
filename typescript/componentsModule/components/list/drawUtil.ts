import Text from "../text/text.js";
import {Pack} from "../../../Bilza.js";
import Style from "../../../design/style.js";
import {ObjectData} from "./DataFn.js";

export default class DrawUtil {  
d :ObjectData;
constructor(d :ObjectData ){
this.d = d;
}    
//----------------
drawBg(p :Pack, width :number,height :number, style :Style){
    style.fillStyle = this.d.colorBg;
    style.strokeStyle = this.d.colorBg;
    p.drawFillRect(
    p.xPerc(this.d.x) ,
    p.yPerc(this.d.y) ,
    width,
    height,
    style);
}
drawBorder(p :Pack, width :number,height :number, style :Style){
    style.fillStyle = this.d.colorBorder;
    style.strokeStyle = this.d.colorBorder;
    p.drawFillRect(
    p.xPerc(this.d.x)-this.d.widthBorder,
    p.yPerc(this.d.y)-this.d.widthBorder,
    width + (this.d.widthBorder * 2),
    height + (this.d.widthBorder * 2),
    style);
}
/////////////////////////////////    
}//ListUtil
