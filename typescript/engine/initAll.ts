import {IComponent,Pack} from "../Bilza.js";


export default function initAll(comps :IComponent[],pack :Pack):boolean{
    for (let i = 0; i < comps.length; i++) {
    comps[i].init(pack);    
    }
    return true;
}
