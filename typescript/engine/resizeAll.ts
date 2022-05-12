import {IComponent} from "../Bilza.js";

export default function resizeAll(comps :IComponent[],width :number = 800,height :number = 400):boolean{
    for (let i = 0; i < comps.length; i++) {
        const element = comps[i];
        element.resize(width,height); 
    }
    return true;
}

