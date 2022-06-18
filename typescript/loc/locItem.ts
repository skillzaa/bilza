import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";

import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";

export default class LocItem {
    x :number | OffScreenXOpt;
    y :number | OffScreenYOpt;
    xAlign :XAlignment;
    yAlign :YAlignment;
    xExtra :number;
    yExtra :number;

constructor(x :number | OffScreenXOpt,y :number |OffScreenYOpt, xAlign :XAlignment = XAlignment.Left, yAlign :YAlignment = YAlignment.Top,xExtra :number=0,yExtra :number = 0){
    this.x =x ;
    this.y =y ;
    this.xAlign =xAlign;
    this.yAlign =yAlign;
    this.xExtra =xExtra;
    this.yExtra =yExtra;        
}

}
