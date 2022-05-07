import {IComponent} from "../Bilza.js";
import TextTemplates from "../components/text/textTemplates.js";
import Text from "../components/text/text.js";

export default class TextTemplWrapper {
private insert :(comp :IComponent)=>IComponent;
private tt :TextTemplates;
constructor(insert :(comp :IComponent)=>IComponent){
    this.insert = insert;
    this.tt = new TextTemplates();
}


h1(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",colorHax :string="#000000"):Text{
let txt = this.tt.h1(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}

jt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="JUMBO TRON",colorHax :string="#008000"):Text{
let txt = this.tt.jt(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
lb(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Bottom",colorHax :string="#008000"):Text{
let txt = this.tt.lb(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
lm(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Mid",colorHax :string="#008000"):Text{
let txt = this.tt.lm(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
lt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Left Top",colorHax :string="#008000"):Text{
let txt = this.tt.lt(startTimeSeconds,endTimeSeconds,content,colorHax);
this.insert(txt);
return txt;
}
mt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Top",colorHax :string="#008000"):Text{
let txt = this.tt.mt(startTimeSeconds,endTimeSeconds,content,colorHax);
this.insert(txt);
return txt;
}
mm(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Mid",colorHax :string="#008000"):Text{
let txt = this.tt.mm(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
mb(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Mid Bottom",colorHax :string="#008000"):Text{
let txt = this.tt.mb(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
rb(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Bottom",colorHax :string="#008000"):Text{
let txt = this.tt.rb(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
rm(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Mid",colorHax :string="#008000"):Text{
let txt = this.tt.rm(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
rt(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="Right Top",colorHax :string="#008000"):Text{
let txt = this.tt.rt(startTimeSeconds,endTimeSeconds,content,colorHax);
//----very imp
this.insert(txt);
return txt;
}
bulletPointMid(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="bulletPointMid",colorHax :string="#008000",y=50):Text{
let txt = this.tt.bulletPointMid(startTimeSeconds,endTimeSeconds,content,colorHax,y);
//----very imp
this.insert(txt);
return txt;
}

}//class