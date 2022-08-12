
import {DrawLayer,IComponent,Pack} from "../bilza.js";

export default function getCanvasElement(canvasId :string="bilza") {
    
let lookForCanvas = document.getElementById(canvasId)as HTMLCanvasElement;

    if (lookForCanvas == null){
        let canvas = document.createElement('canvas');
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        canvas.id = canvasId; // Html5 canvas does not have id
        canvas.style.position = "static";
                if (canvas == null ){
                    throw new Error("canvas not found");
                }else {
                    return canvas;
                }
    }else {
        let canvas = lookForCanvas;
        canvas.id = canvasId; // Html5 canvas does not have id
        canvas.style.position = "static";
            if (canvas == null ){
                throw new Error("canvas not found");
            }else {
                return canvas;
            }
    }   
         
} 