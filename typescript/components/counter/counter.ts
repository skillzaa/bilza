import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../text/textTemplates.js";
import Text from "../text/text.js";


export default class Counter extends Component<ObjectData> {
private tt :TextTemplates;
hdg:Text;
constructor (duration :number = 300,loc :string = "rb"){
super(DataFn,duration);

this.drawLayer = DrawLayer.MiddleGround;   
this.tt = new TextTemplates();
switch (loc) {
    case "rt":
this.hdg = this.tt.rt(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "rm":
this.hdg = this.tt.rm(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "rb":
this.hdg = this.tt.rb(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "lt":
this.hdg = this.tt.lt(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "lm":
this.hdg = this.tt.lm(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "lb":
this.hdg = this.tt.lb(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "mt":
this.hdg = this.tt.mt(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "mm":
this.hdg = this.tt.mm(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
    case "mb":
this.hdg = this.tt.mb(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;

default:
this.hdg = this.tt.rb(this.getStartTime(),this.getEndTime(),"sec:0000","#008000");        
break;
}
this.hdg.d.content = "sec:0000";
}
width( p: Pack ): number {
return this.hdg.width(p);;
}
height(p: Pack): number {
    return this.hdg.height(p);
}
update(msDelat :number, p: Pack): boolean {
let frame = msDelat/1000; //to seconds
this.hdg.d.content = this.d.prefix + parseInt(frame.toString());

    return true;
    // return super.update(frame, p);
}
draw(p: Pack): boolean {
this.hdg.draw(p);    
return true;
}
}