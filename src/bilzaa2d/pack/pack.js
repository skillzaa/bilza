export default class Pack {
    constructor(canvasId = "bilzaa2d") {
        // this.ctxData = ctxDefaultInit();
        this.fontName = "serf";
        this.fontSize = 25;
        // @ts-expect-error
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // @ts-expect-error    
        this.ctx = this.canvas.getContext('2d');
    }
    drawBackground(color = "blue") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    canvasWidth() {
        return this.canvas.width;
    }
    canvasHeight() {
        return this.canvas.height;
    }
    restore() {
        this.ctx.restore();
    }
    save() {
        this.ctx.save();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    chars_width(chars = "", fontSize = this.fontSize, fontName = this.fontName) {
        this.ctx.save();
        //dont miss gap "px_"
        let f = this.fontSize + "px " + this.fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    textWidth(chars = "", incomTempl) {
        this.commitCtxData(incomTempl);
        this.ctx.save();
        //dont miss gap "px_"
        let f = this.fontSize + "px " + this.fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    drawLine(startX, startY, endX, endY, incomTempl) {
        this.commitCtxData(incomTempl);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    resetCtx() {
    }
    drawRect(x, y, width, height, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
    }
    drawFillRect(x, y, width, height, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.fillRect(x, y, width, height);
    }
    drawCircle(x, y, radius, fill, incomCtx, startAngle = 0, endAngle = 2 * Math.PI) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.arc(x + radius, y + radius, radius, startAngle, endAngle, false);
        if (fill == true) {
            this.ctx.fill();
        }
        this.ctx.stroke();
    }
    drawText(content, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged place directly   
        this.ctx.fillText(content, x, y);
    }
    drawIcon(code, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged place directly   
        this.ctx.fillText(String.fromCharCode(code), x, y);
    }
    drawTextstroke(content, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged   
        this.ctx.strokeText(content, x, y);
    }
    // x and y are not here
    commitCtxData(incomCtx) {
        if (incomCtx.lineCap !== null) {
            this.ctx.lineCap = "round";
        }
        if (incomCtx.globalAlpha !== null) {
            this.ctx.globalAlpha = incomCtx.globalAlpha;
        }
        if (incomCtx.shadowBlur !== null) {
            this.ctx.shadowBlur = incomCtx.shadowBlur;
        }
        if (incomCtx.shadowOffsetY !== null) {
            this.ctx.shadowOffsetY = incomCtx.shadowOffsetY;
        }
        if (incomCtx.shadowOffsetX !== null) {
            this.ctx.shadowOffsetX = incomCtx.shadowOffsetX;
        }
        if (incomCtx.lineWidth !== null) {
            this.ctx.lineWidth = incomCtx.lineWidth;
        }
        if (incomCtx.shadowColor !== null) {
            this.ctx.shadowColor = incomCtx.shadowColor;
        }
        if (incomCtx.strokeStyle !== null) {
            this.ctx.strokeStyle = incomCtx.strokeStyle;
        }
        if (incomCtx.fillStyle !== null) {
            this.ctx.fillStyle = incomCtx.fillStyle;
        }
        if (incomCtx.fontSize !== null) {
            this.fontSize = incomCtx.fontSize;
        }
        if (incomCtx.fontName !== null) {
            this.fontName = incomCtx.fontName;
        }
        if (incomCtx.lineDashWidth !== null && incomCtx.lineDashGap !== null) {
            this.ctx.setLineDash([incomCtx.lineDashWidth, incomCtx.lineDashGap]);
        }
        this.ctx.font = this.fontSize + "px " + this.fontName;
    }
}
