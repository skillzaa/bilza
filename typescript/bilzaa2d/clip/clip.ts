import {Component,Pack,Style,Transition,IDrawable } from "../../bilzaa2d/index.js";


export default class Clip extends Component {
private comps:IDrawable[];    
constructor (){
    super();
    this.comps = []; 

}
add(comp:IDrawable):IDrawable{
    this.comps.push(comp);
    return comp;
}
width( p: Pack ): number {
return 100;
}
height(p: Pack): number {
    return 100;
}
draw(p: Pack): boolean {
  this.comps.forEach( comp => comp.draw(p));  
    return true;
}
update(frame: number, p: Pack): boolean {
// this.comps.forEach( comp => comp.draw(p));  

// this.compData.apply(frame); //--important!!
return true;    
}

}