import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import Text from "../text/text.js";
let dimSeq: [number, number];
export default class SlideHnL extends Component<ObjectData> {
hdg :Text;
lis :Text[];
private dimSeqArray :typeof dimSeq[];
private unDimSeqArray :typeof dimSeq[];
private tt :TextTemplates;
//Args==> content-color-x-y-widthPerc-heightPerc
constructor (contentHdg :string="The Title",startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER)
{
    super(DataFn);
    this.tt = new TextTemplates();
    this.hdg = this.tt.h1(contentHdg,"#ff0000");
    this.hdg.d.y = 5;
    this.lis = [];
    this.drawLayer = DrawLayer.MiddleGround;
    this.dimSeqArray = [];
    this.unDimSeqArray = [];
    this.setStartTime(startTimeSeconds * 1000); //into mili sec
    this.setEndTime(endTimeSeconds * 1000);
    
}
unDimSeq(itemIndex:number,TPlusSec :number){
    this.unDimSeqArray.push([itemIndex,TPlusSec]);
}
dimSeq(itemIndex:number,TPlusSec :number){
    this.dimSeqArray.push([itemIndex,TPlusSec]);
}
protected applyUnDimSeq(msDelta: number){
for (let i = 0; i < this.unDimSeqArray.length; i++) {
    const element = this.unDimSeqArray[i];
    if(element[1] <= (this.getLocalMsDelta(msDelta))){
        this.lis[element[0]].d.flagDim = false;
    }
}
}
protected applyDimSeq(msDelta: number){
for (let i = 0; i < this.dimSeqArray.length; i++) {
    const element = this.dimSeqArray[i];
    if(element[1] <= (this.getLocalMsDelta(msDelta))){
        this.lis[element[0]].d.flagDim = true;
    }
}
}
getLocalMsDelta(msDeltaGlobal :number){
return Math.abs(Math.ceil(msDeltaGlobal - this.getStartTime()));
}
addItem(content :string, startDim:boolean=true, unDimSecond :number = Number.MAX_SAFE_INTEGER){
let item = this.tt.li(content,"#0000ff",null,50);   
    if (startDim == true){
        item.d.flagDim = true;
    }
this.unDimSeq(this.lis.length -1, unDimSecond * 1000);//convert to ms    
this.lis.push(item);
return item; 
}

width(p:Pack):number {
return 0;
}
height(p:Pack):number {
return 0;
}

update(msDelta: number, p: Pack): boolean {
    this.applyDimSeq(msDelta);
    this.applyUnDimSeq(msDelta);
    // console.log("localMsDelta",this.getLocalMsDelta(msDelta));
    return true;
}

draw(p:Pack):boolean{
this.hdg.draw(p);
this.drawLis(p);    
return true;
}
drawLis(p :Pack){
let y = this.d.listStartY;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].d.y = y;
            if (this.d.applyWdHtPerc == true){
                this.lis[i].setFontSize(p);
            }
            this.lis[i].d.maxDisplayChars = this.d.maxLiChars;
            this.lis[i].draw(p);
            let ht = this.lis[i].height(p); 
            y +=  this.lis[i].d.heightPercent + this.d.listGapFactor;
        }    
}

}//class