import Pack from "../pack/pack.js";
import Component from "../component/component.js";

export default class Text extends Component {
content:string;
constructor (content:string,x :number=0,y :number=0){
    super();
this.content = content;    
}
width(p:Pack):number {
return p.ctx().chars_width(this.content);
// return 200;    
}
height(p:Pack):number {
return p.ctx().chars_width("Xi");    
}

draw(p:Pack):boolean{
    // p.ctx().setFont(this.fontSize);
    this.ctxData.strokeStyle = "#d64848";
p.ctx().drawText(this.content,this.ctxData);    
return true;
}

// update(frame: number, p: Pack): boolean {
// for (let i = 0; i < this.animations.length; i++) {
//     const ani = this.animations[i];
//     if (ani.x !== null && ani.startFrame < frame){
//         this.x = ani.x;
//     }
//     if (ani.fontSize !== null && ani.startFrame < frame){
//            p.ctx().setFontSize(ani.fontSize);
//     }
// }
// return true;    
// }
}