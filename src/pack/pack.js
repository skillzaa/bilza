import getCanvasElement from "../functions/getCanvasElement.js";
import aspectRatioHeight from "../functions/aspectRatioHeight.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
export default class Pack {
    constructor(canvasId, screenWidthInPercent = 70) {
        this.canvasId = canvasId;
        this.canvas = getCanvasElement(this.canvasId);
        this.dynamicCanvas(screenWidthInPercent, null);
        this.ctx = this.getNewCtx();
        this.disableOpacity = false;
    }
    getNewCtx() {
        let ctx = this.canvas.getContext('2d');
        if (ctx == null) {
            throw new Error("could not obtain drawing context");
        }
        else {
            return ctx;
        }
    }
    drawBackground(color = "blue") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        return this.ctx.fillStyle;
    }
    canvasWidth() {
        return this.canvas.width;
    }
    canvasHeight() {
        return this.canvas.height;
    }
    quadraticCurveTo(startX, startY, midX, midY, endX, endY, style) {
        this.commitCtxData(style);
        this.beginPath();
        this.moveTo(startX, startY);
        this.ctx.quadraticCurveTo(midX, midY, endX, endY);
        this.stroke();
    }
    restore() {
        this.ctx.restore();
    }
    save() {
        this.ctx.save();
    }
    drawImage(image, x, y, width, height) {
        this.ctx.drawImage(image, x, y, width, height);
    }
    drawImageSrcDest(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
        this.ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    charsWidth(chars, fontSize, fontName) {
        this.ctx.save();
        this.setFont(fontSize, fontName);
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
    moveTo(x, y) {
        this.ctx.moveTo(x, y);
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
    arcTo(startX, startY, endX, endY, radius = 20, style) {
        this.commitCtxData(style);
        this.ctx.arcTo(startX, startY, endX, endY, radius);
    }
    drawCircle(x = 0, y = 0, radius = 25, fill = false, startAngle = 0, endAngle = (2 * Math.PI), incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, startAngle, endAngle, false);
        if (fill == true) {
            this.ctx.fill();
        }
        this.ctx.stroke();
    }
    textBaseline(opt) {
        switch (opt) {
            case "top":
                this.ctx.textBaseline = "top";
                break;
            case "middle":
                this.ctx.textBaseline = "middle";
                break;
            case "bottom":
                this.ctx.textBaseline = "middle";
                break;
            case "alphabetic":
                this.ctx.textBaseline = "alphabetic";
                break;
            case "hanging":
                this.ctx.textBaseline = "hanging";
                break;
            default:
                break;
        }
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
    commitCtxData(style) {
        if (style.shadowBlur !== null) {
            this.ctx.shadowBlur = style.shadowBlur;
        }
        if (style.shadowOffsetY !== null) {
            this.ctx.shadowOffsetY = style.shadowOffsetY;
        }
        if (style.shadowOffsetX !== null) {
            this.ctx.shadowOffsetX = style.shadowOffsetX;
        }
        if (style.shadowColor !== null) {
            this.ctx.shadowColor = style.shadowColor;
        }
        if (style.strokeStyle !== null) {
            this.ctx.strokeStyle = style.strokeStyle;
        }
        if (style.fillStyle !== null) {
            this.ctx.fillStyle = style.fillStyle;
        }
        if (style.lineDash !== null) {
            this.ctx.setLineDash(style.lineDash);
        }
        if (style.lineCap !== null) {
            this.ctx.lineCap = style.lineCap;
        }
        if (style.lineWidth !== null) {
            this.ctx.lineWidth = style.lineWidth;
        }
        if (style.lineJoin !== null) {
            this.ctx.lineJoin = style.lineJoin;
        }
        if (style.opacity !== null) {
            if (this.disableOpacity == true) {
                this.ctx.globalAlpha = 1;
            }
            else {
                this.ctx.globalAlpha = style.opacity / 100;
            }
        }
        this.setFont(style.fontSize, style.fontFamily);
    }
    setFont(fontSize, fontName) {
        let f = `${fontSize}px ${fontName}`;
        this.ctx.font = f;
    }
    dynCanvasWidth(widthInPercent = 80) {
        return window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
    }
    dynCanvasHeight(widthInPix, heightInPercent = null) {
        if (heightInPercent !== null) {
            return window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
        }
        else {
            return aspectRatioHeight(widthInPix);
        }
    }
    measureText(txt, style) {
        this.ctx.save();
        this.commitCtxData(style);
        const metric = this.ctx.measureText(txt);
        this.ctx.restore();
        return metric;
    }
    resizeCanvas(width, height) {
        this.canvas.width = width;
        if (height == null) {
            this.canvas.height = aspectRatioHeight(width);
        }
        else {
            this.canvas.height = height;
        }
    }
    dynamicCanvas(widthInPercent = 95, heightInPercent = null) {
        let wd = this.dynCanvasWidth(widthInPercent);
        this.resizeCanvas(wd, this.dynCanvasHeight(wd, heightInPercent));
        return true;
    }
    rotate(degrees, reverse = false) {
        const rad = degrees * (Math.PI / 180);
        if (reverse == false) {
            this.ctx.rotate(rad);
        }
        else {
            this.ctx.rotate(-rad);
        }
    }
    rotateRad(radians, reverse = false) {
        if (reverse == false) {
            this.ctx.rotate(radians);
        }
        else {
            this.ctx.rotate(-radians);
        }
    }
    translate(x, y) {
        this.ctx.translate(x, y);
    }
    setTransform(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.ctx.setTransform(a, b, c, d, e, f);
    }
}
