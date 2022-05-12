import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";

import DWidthHeight from "./DWidthHeight.js";

export default function dynamicCanvasHtWd(widthInPercent :number = 95,heightInPercent :number | null=null):DWidthHeight{

    let dWidthHeight = new DWidthHeight(); 
    dWidthHeight.width = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);

    if (heightInPercent !== null){
        dWidthHeight.height = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
}
return dWidthHeight;
}