import {DrawLayer,IComponent,Pack } from "../Bilza";


export default class Comps {
public compArray :IComponent[];    
    
constructor(){
this.compArray = [];    
}
public push(comp :IComponent):IComponent{
this.compArray.push(comp);
return comp;
}
public initAll(pack :Pack):boolean{
    for (let i = 0; i < this.compArray.length; i++) {
        this.compArray[i].init(pack);    
    }
return true;
}
    
}//comps