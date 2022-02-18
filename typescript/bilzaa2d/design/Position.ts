import {XAlignment,YAlignment} from "./alignment.js";
export default class Position {
x :number;
y :number;
xAlignment :XAlignment;
yAlignment :YAlignment;

constructor(x=0,y=0){
this.xAlignment = XAlignment.Left;
this.yAlignment = YAlignment.Top;
this.x = x;
this.y = y;
}


}