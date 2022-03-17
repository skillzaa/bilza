import {Style,Pack,IDrawable,DrawLayer,Transition,IFrameStart} from "../../index.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component  <T extends IFrameStart> implements IDrawable {
protected compData:Transition<T>;
public d :T;
public data :T;
//...........
public drawLayer : DrawLayer; 
public frameStart :number;   
public frameEnd :number;
public id :string;
// public name :string;
public display :boolean;
public selected :boolean;
public style:Style;

constructor (DataFn :()=>T){
this.compData = new Transition(DataFn);    
this.d = this.compData.data;
this.data = this.compData.data;
// this.d.content = content;
//-----------------------------------------
this.drawLayer = DrawLayer.MiddleGround;
this.id = Math.random().toString(36).slice(2);
this.style = new Style();

// this.name = name;
this.frameStart = 0; //component startand end frames
this.display = true;
this.selected = false;
this.frameEnd = 3600;
}
width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}

addTransition(frameStart:number){
return this.compData.add(frameStart);
}
// brilent do not send frame in draw args just send frame in update-
draw(p: Pack): boolean {
    return true;
}
update(frame: number, p: Pack): boolean {
return true;    
}


}