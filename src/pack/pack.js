export default class Pack {
    constructor(width = 0, height = 0, canvasId = "bilzaa2d") {
        let lookForCanvas = document.getElementById(canvasId);
        if (lookForCanvas == null) {
            this.canvas = document.createElement('canvas');
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(this.canvas);
        }
        else {
            this.canvas = lookForCanvas;
        }
        this.canvas.id = canvasId;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.position = "static";
        this.canvas.style.border = "1px solid blue";
        if (this.canvas == null) {
            throw new Error("canvas not found");
        }
        if (width == 0) {
            this.canvas.width = window.innerWidth;
        }
        else {
            this.canvas.width = width;
        }
        if (height == 0) {
            this.canvas.height = window.innerHeight;
        }
        else {
            this.canvas.height = height;
        }
        this.ctx = this.canvas.getContext('2d');
        if (this.ctx == null) {
            throw new Error("could not obtain drawing context");
        }
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
    quadraticCurveTo(start, end, controlPoint, style) {
        this.commitCtxData(style);
        this.beginPath();
        this.moveTo(start);
        this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, end.x, end.y);
        this.stroke();
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
    charsWidth(chars = "", fontSize, fontName) {
        this.ctx.save();
        this.setFont(fontSize, fontName);
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    textWidth(chars, incomTempl) {
        this.ctx.save();
        this.commitCtxData(incomTempl);
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
    line(startX, startY, endX, endY) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    beginPath() {
        this.ctx.beginPath();
    }
    closePath() {
        this.ctx.closePath();
    }
    moveTo(pos) {
        this.ctx.moveTo(pos.x, pos.y);
    }
    lineTo(x, y, style) {
        this.commitCtxData(style);
        this.ctx.lineTo(x, y);
    }
    fill(style) {
        this.commitCtxData(style);
        this.ctx.fill();
    }
    stroke() {
        this.ctx.stroke();
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
    arcTo(start, end, style, radius = 20) {
        this.commitCtxData(style);
        this.ctx.arcTo(start.x, start.y, end.x, end.y, radius);
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
        this.ctx.textBaseline = "top";
        this.ctx.fillText(content, x, y);
    }
    drawIcon(code, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.textBaseline = "top";
        this.ctx.fillText(String.fromCharCode(code), x, y);
    }
    drawTextstroke(content, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.textBaseline = "top";
        this.ctx.strokeText(content, x, y);
    }
    drawLines(positions, incomCtx, fill = true) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.moveTo(positions[0].x, positions[0].y);
        for (let i = 1; i < positions.length; i++) {
            const pos = positions[i];
            this.ctx.lineTo(pos.x, pos.y);
        }
        this.ctx.closePath();
        if (fill == true) {
            this.ctx.fill();
        }
        else {
            this.ctx.stroke();
        }
    }
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
        if (incomCtx.lineDash !== null) {
            this.ctx.setLineDash(incomCtx.lineDash);
        }
        this.setFont(incomCtx.fontSize, incomCtx.fontName);
    }
    setFont(fontSize, fontName) {
        let f = `${fontSize}px ${fontName}`;
        this.ctx.font = f;
    }
    xPerc(perc) {
        let checked = this.setBwZeroNhundred(perc);
        return ((this.canvas.width / 100) * checked);
    }
    yPerc(perc) {
        let checked = this.setBwZeroNhundred(perc);
        return ((this.canvas.height / 100) * checked);
    }
    setBwZeroNhundred(n) {
        if (n < 0) {
            return 0;
        }
        if (n > 100) {
            return 100;
        }
        return n;
    }
}
