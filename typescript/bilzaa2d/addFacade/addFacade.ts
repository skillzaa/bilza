import {IDrawable,Component,Text} from "../../index.js";
// import Text from "../../components/text/text.js";
import DataFn,{ObjectData,CalcData} from "../../components/text/DataFn.js";
import AddTextTemplates from "./addTextTemplates.js";

export default class AddFacade {
private addToArray :IDrawable[];
textTempl :AddTextTemplates;

constructor(comps :IDrawable[]){
this.addToArray = comps;
this.textTempl = new AddTextTemplates(comps);
}

text(content :string ="..!", frameStart :number =0, frameEnd :number = 5000):Text{
    let bs = new Text(DataFn);
    bs.frameStart = frameStart;
    bs.frameEnd = frameEnd;
    bs.d.content = content;
    this.addToArray.push(bs);
    return bs;    
}

}