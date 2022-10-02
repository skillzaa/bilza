import IComponent from "../componentFacade/IComponent.js";
import IEngineComp from "../EngineComponent/IEngineComp.js";

import FillRect from "../components/fillRect/fillRect.js";
import Background from "../components/background/background.js";


////////////////////////////////////////////////////////////////
export default function getComps(compsDb :IComponent[]):IEngineComp[]{

const comps :IEngineComp[] = [];

for (let i = 0; i < compsDb.length; i++) {
    const compDb = compsDb[i];
    switch (compDb.compType) {
        case "fillRect":
        // const fillRect = new FillRect(0,60,"red");    
        // comps.push(fillRect);
            break;
        case "fillRect":
        // const background = new Background(0,60);    
        // comps.push(background);
            break;
        default:
        break;
    }    
}
return comps;
}

