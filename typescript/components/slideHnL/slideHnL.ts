import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import TextTemplates from "../../compFactory/textTemplates.js";
import Text from "../text/text.js";
let dimSeq: [number, number];
export default class SlideHnL extends Component<ObjectData> {
hdg :Text;
lis :Text[];
private dimSeqArray :typeof dimSeq[];
private tt :TextTemplates;
//Args==> content-color-x-y-widthPerc-heightPerc
constructor (contentHdg :string="The Title")
{
    super(DataFn);
    this.tt = new TextTemplates();
    this.hdg = this.tt.h1(contentHdg,"#ff0000");
    this.hdg.d.y = 5;
    this.lis = [];
    this.drawLayer = DrawLayer.MiddleGround;
    this.dimSeqArray = [];
    
}
dimSeq(itemIndex:number,TPlusSec :number){
    this.dimSeqArray.push([itemIndex,TPlusSec]);
    // this.dimSeqArray.push([22,55]);
    // this.dimSeqArray.push([67,21]);
    // console.log(this.dimSeqArray);
}
protected applyDimSeq(msDelta: number){
for (let i = 0; i < this.dimSeqArray.length; i++) {
    const element = this.dimSeqArray[i];
    if(element[1] <= (this.getLocalMsDelta(msDelta))){
        this.lis[element[0]].d.flagDim = false;
    }
}
}
getLocalMsDelta(msDeltaGlobal :number){
return Math.abs(Math.ceil(msDeltaGlobal - this.getStartTime()));
}
addItem(content :string){
let item = this.tt.li(content,"#0000ff",null,50);   
    if (this.d.flagStartDim == true){
        item.d.flagDim = true;
    }
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
    console.log("localMsDelta",this.getLocalMsDelta(msDelta));
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