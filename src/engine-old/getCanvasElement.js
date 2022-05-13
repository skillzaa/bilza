export default function getCanvasElement(canvasId = "bilza") {
    let lookForCanvas = document.getElementById(canvasId);
    if (lookForCanvas == null) {
        let canvas = document.createElement('canvas');
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        canvas.id = canvasId;
        canvas.style.position = "static";
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        else {
            return canvas;
        }
    }
    else {
        let canvas = lookForCanvas;
        canvas.id = canvasId;
        canvas.style.position = "static";
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        else {
            return canvas;
        }
    }
}
