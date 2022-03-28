'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Component {
    constructor(DataFn, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        this.drawLayer = exports.DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.display = true;
        this.selected = false;
        this.msStart = msStart;
        this.msEnd = msEnd;
        this.setStart(msStart);
        this.setEnd(msEnd);
    }
    getSelected() {
        return this.selected;
    }
    setSelected(b) {
        this.selected = b;
        return this.selected;
    }
    getDisplay() {
        return this.display;
    }
    setDisplay(b) {
        this.display = b;
        return this.display;
    }
    getStart() {
        return this.msStart;
    }
    setStart(n = 0) {
        this.msStart = n;
        return n;
    }
    getEnd() {
        return this.msEnd;
    }
    setEnd(n = Number.MAX_SAFE_INTEGER) {
        this.msEnd = n;
        return n;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        return true;
    }
    addTransition(msStart) {
        return this.compData.add(msStart);
    }
    checkCollision(x, y, p) {
        return false;
    }
    shadowsOff() {
        this.style.shadowBlur = 0;
        this.style.shadowOffsetX = 0;
        this.style.shadowOffsetY = 0;
    }
}

class Pack {
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

var LineCapStyle;
(function (LineCapStyle) {
    LineCapStyle["Round"] = "round";
    LineCapStyle["Butt"] = "butt";
    LineCapStyle["Square"] = "square";
})(LineCapStyle || (LineCapStyle = {}));

exports.FontNames = void 0;
(function (FontNames) {
    FontNames["Arial"] = "Arial";
    FontNames["ArialBlack"] = "Arial Black";
    FontNames["Verdana"] = "Verdana";
    FontNames["Tahoma"] = "Tahoma";
    FontNames["Impact"] = "Impact";
    FontNames["Times"] = "Times";
    FontNames["Helvetica"] = "Helvetica";
    FontNames["TimesNewRoman"] = "Times New Roman";
    FontNames["Didot"] = "Didot";
    FontNames["Calibri"] = "Calibri";
    FontNames["Georgia"] = "Georgia";
    FontNames["AmericanTypewriter"] = "American Typewriter";
    FontNames["Courier"] = "Courier";
    FontNames["CourierNew"] = "Courier New";
    FontNames["LucidaConsole"] = "Lucida Console";
    FontNames["Monaco"] = "Monaco";
    FontNames["BradleyHand"] = "Bradley Hand";
    FontNames["BrushScriptMT"] = "Brush Script MT";
    FontNames["BrushScript"] = "Brush Script";
    FontNames["Luminari"] = "Luminari";
})(exports.FontNames || (exports.FontNames = {}));

class Style {
    constructor(frameStart = 0) {
        this.frameStart = frameStart;
        this.fontSize = 25;
        this.fontName = exports.FontNames.Luminari;
        this.fillStyle = "green";
        this.strokeStyle = "red";
        this.lineWidth = 2;
        this.shadowColor = "black";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.globalAlpha = 1;
        this.lineCap = LineCapStyle.Round;
        this.lineDash = [];
    }
    merge(incom) {
        if (incom.lineCap !== null) {
            this.lineCap = incom.lineCap;
        }
        if (incom.globalAlpha !== null) {
            this.globalAlpha = incom.globalAlpha;
        }
        if (incom.shadowBlur !== null) {
            this.shadowBlur = incom.shadowBlur;
        }
        if (incom.shadowOffsetY !== null) {
            this.shadowOffsetY = incom.shadowOffsetY;
        }
        if (incom.shadowOffsetX !== null) {
            this.shadowOffsetX = incom.shadowOffsetX;
        }
        if (incom.lineWidth !== null) {
            this.lineWidth = incom.lineWidth;
        }
        if (incom.shadowColor !== null) {
            this.shadowColor = incom.shadowColor;
        }
        if (incom.strokeStyle !== null) {
            this.strokeStyle = incom.strokeStyle;
        }
        if (incom.fillStyle !== null) {
            this.fillStyle = incom.fillStyle;
        }
        if (incom.fontSize !== null) {
            this.fontSize = incom.fontSize;
        }
        if (incom.fontName !== null) {
            this.fontName = incom.fontName;
        }
        if (incom.lineDash !== null) {
            this.lineDash = incom.lineDash;
        }
    }
}

class Background {
    constructor() {
        this.color = "#efeee3";
    }
}

class CompsArrayObj {
    constructor() {
        this.comps = [];
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == drawLayer) {
                if (comp.getStart() <= msDelta && comp.getEnd() > msDelta) {
                    pack.save();
                    comp.update(msDelta, pack);
                    comp.draw(pack);
                    pack.restore();
                }
            }
        }
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
    }
}

class BilzaTimer extends CompsArrayObj {
    constructor(timeEnd = Number.MAX_SAFE_INTEGER) {
        super();
        this.timeStart = null;
        this.timeEnd = timeEnd;
        this.interval = null;
        this.msPerFrame = 1000;
    }
    getTimeEnd() {
        return this.timeEnd;
    }
    setTimeEnd(n) {
        this.timeEnd = n;
        return this.timeEnd;
    }
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    stop() {
        this.timeStart = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
    }
}

class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(timeEnd);
        this.canvasId = canvasId;
        this.pack = new Pack(canvasWidth, canvasHeight, this.canvasId);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(width, height, this.canvasId);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
}

class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER);
        this.background = new Background();
        this.add = new CompFactory(this.comps);
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = window.setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.getMsDelta();
        if (msDelta >= this.timeEnd) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.drawByDrawLayer(msDelta, exports.DrawLayer.BackGround, this.pack);
        this.drawByDrawLayer(msDelta, exports.DrawLayer.ForeGround, this.pack);
        this.drawByDrawLayer(msDelta, exports.DrawLayer.MiddleGround, this.pack);
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    mergeClip(clip) {
        for (let i = 0; i < clip.length; i++) {
            this.comps.push(clip[i]);
        }
        return true;
    }
}

exports.DrawLayer = void 0;
(function (DrawLayer) {
    DrawLayer["BackGround"] = "BACKGROUND";
    DrawLayer["MiddleGround"] = "MIDDLEGROUND";
    DrawLayer["ForeGround"] = "FOREGROUND";
})(exports.DrawLayer || (exports.DrawLayer = {}));

class Transition {
    constructor(newDataObjFn) {
        this.newDataObjFn = newDataObjFn;
        this.data = this.newDataObjFn();
        this.transitions = [];
    }
    add(msStart) {
        let f = this.newDataObjFn();
        for (const key in f) {
            f[key] = null;
        }
        f.msStart = msStart;
        this.transitions.push(f);
        return f;
    }
    insert(f) {
        this.transitions.push(f);
        return f;
    }
    apply(msDelta) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trs = this.transitions[i];
            if (trs.msStart <= msDelta) {
                this.merge(trs);
                this.transitions.splice(i, 1);
            }
        }
    }
    merge(subset) {
        for (const key in this.data) {
            if (subset.hasOwnProperty(key)) {
                if (subset[key] !== null) {
                    this.data[key] = subset[key];
                }
            }
        }
        return true;
    }
}

class ObjectData$5 {
    constructor() {
        this.msStart = 0;
        this.x = 50;
        this.y = 50;
        this.content = "text!";
        this.widthMargin = 0;
        this.widthBorder = 0;
        this.widthPadding = 0;
        this.boundingRectXYExtra = [50, 50];
        this.colorBoundingRect = "black";
        this.colorMargin = "red";
        this.colorBorder = "green";
        this.colorPadding = "blue";
        this.colorContentBg = "yellow";
        this.fontColor = "black";
        this.fontSize = 32;
        this.fontFamily = exports.FontNames.Courier;
        this.flagDrawMargin = false;
        this.flagDrawBorder = false;
        this.flagDrawPadding = false;
        this.flagDrawContentArea = false;
        this.flagDrawBoundingRectangle = false;
        this.flagDrawText = true;
        this.flagTextShadow = false;
        this.flagBoundingRectShadow = false;
        this.textShadowColor = "grey";
        this.textShadowOffsetX = 10;
        this.textShadowOffsetY = 10;
        this.textShadowBlur = 5;
        this.boundingRectShadowColor = "grey";
        this.boundingRectShadowOffsetX = 15;
        this.boundingRectShadowOffsetY = 15;
        this.boundingRectShadowBlur = 5;
    }
}
function DataFn$5() {
    let td = new ObjectData$5();
    return td;
}

class CalcData {
    constructor() {
        this.marginX = 0;
        this.marginY = 0;
        this.borderX = 0;
        this.borderY = 0;
        this.paddingX = 0;
        this.paddingY = 0;
        this.contentAreaX = 0;
        this.contentAreaY = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
    }
}

class Text extends Component {
    constructor(content = "", fontColor = "black", fontSize = 40, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        super(DataFn$5, msStart, msEnd);
        this.calcData = new CalcData();
        this.fontFamilyNames = exports.FontNames;
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.fontColor = fontColor;
        this.d.fontSize = fontSize;
    }
    width(p) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth);
    }
    height(p, perc = 0) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight);
    }
    update(ms, p) {
        this.compData.apply(ms);
        this.calcData.marginX = this.d.x;
        this.calcData.marginY = this.d.y;
        this.calcData.borderX = this.d.x + this.d.widthMargin;
        this.calcData.borderY = this.d.y + this.d.widthMargin;
        this.calcData.paddingX = this.d.x + this.d.widthMargin + this.d.widthBorder;
        this.calcData.paddingY = this.d.y + this.d.widthMargin + this.d.widthBorder;
        this.calcData.contentAreaX = this.d.x + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        this.calcData.contentAreaY = this.d.y + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        this.calcData.contentWidth = this.contentWidth(p);
        this.calcData.contentHeight = this.contentHeight(p);
        return true;
    }
    draw(p) {
        this.drawMargin(p);
        this.drawBorder(p);
        this.drawPadding(p);
        this.drawContentArea(p);
        this.drawText(p);
        this.drawBoundingRectangle(p);
        return true;
    }
    drawContentArea(p) {
        if (this.d.flagDrawContentArea == false) {
            return;
        }
        this.style.fillStyle = this.d.colorContentBg;
        p.drawFillRect(this.calcData.contentAreaX, this.calcData.contentAreaY, this.contentWidth(p), this.contentHeight(p), this.style);
    }
    drawText(p) {
        if (this.d.flagDrawText == false) {
            return;
        }
        if (this.d.flagTextShadow == true) {
            this.style.shadowColor = this.d.textShadowColor;
            this.style.shadowOffsetX = this.d.textShadowOffsetX;
            this.style.shadowOffsetY = this.d.textShadowOffsetY;
            this.style.shadowBlur = this.d.textShadowBlur;
        }
        else {
            this.style.shadowOffsetX = 0;
            this.style.shadowOffsetY = 0;
            this.style.shadowBlur = 0;
        }
        this.style.fillStyle = this.d.fontColor;
        this.style.fontSize = this.d.fontSize;
        this.style.fontName = this.d.fontFamily;
        p.drawText(this.d.content, this.calcData.contentAreaX, this.calcData.contentAreaY, this.style);
    }
    contentHeight(p, perc = 40) {
        let charHt = p.charsWidth("X", this.d.fontSize, this.d.fontFamily);
        charHt += (charHt / 100 * perc);
        return charHt;
    }
    contentWidth(p) {
        let r = p.charsWidth(this.d.content, this.d.fontSize, this.d.fontFamily);
        return r;
    }
    drawPadding(p) {
        if (this.d.flagDrawPadding == false) {
            return;
        }
        this.style.fillStyle = this.d.colorPadding;
        p.drawFillRect(this.calcData.paddingX, this.calcData.paddingY, (this.d.widthPadding * 2) + this.calcData.contentWidth, (this.d.widthPadding * 2) + this.calcData.contentHeight, this.style);
    }
    drawBorder(p) {
        if (this.d.flagDrawBorder == false) {
            return;
        }
        this.style.fillStyle = this.d.colorBorder;
        p.drawFillRect(this.calcData.borderX, this.calcData.borderY, ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawMargin(p) {
        if (this.d.flagDrawMargin == false) {
            return;
        }
        this.style.fillStyle = this.d.colorMargin;
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.widthMargin;
        p.drawFillRect(this.calcData.marginX, this.calcData.marginY, ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawBoundingRectangle(p, color = "red", lineWidth = 4) {
        if (this.d.flagDrawBoundingRectangle == false) {
            return;
        }
        if (this.d.flagBoundingRectShadow == true) {
            this.style.fillStyle = this.d.colorBoundingRect;
            this.style.strokeStyle = this.d.colorBoundingRect;
            this.style.shadowColor = this.d.boundingRectShadowColor;
            this.style.shadowOffsetX = this.d.boundingRectShadowOffsetX;
            this.style.shadowOffsetY = this.d.boundingRectShadowOffsetY;
            this.style.shadowBlur = this.d.boundingRectShadowBlur;
        }
        else {
            this.style.shadowOffsetX = 0;
            this.style.shadowOffsetY = 0;
            this.style.shadowBlur = 0;
        }
        p.drawRect(this.d.x - (this.d.boundingRectXYExtra[0] / 2), this.d.y - (this.d.boundingRectXYExtra[1] / 2), this.width(p) + this.d.boundingRectXYExtra[0], this.height(p) + this.d.boundingRectXYExtra[1], this.style);
    }
    checkCollision(x, y, p) {
        if (x > this.d.x && x < this.width(p)) {
            if (y > this.d.y && y < this.height(p)) {
                return true;
            }
        }
        return false;
    }
}

function DataFn$4() {
    let td = new ObjectData$4();
    return td;
}
class ObjectData$4 {
    constructor() {
        this.msStart = 0;
        this.fontSize = 8;
        this.cellWidth = 50;
        this.cellHeight = 50;
        this.colorHorizontalLines = "grey";
        this.colorVerticalLines = "grey";
        this.colorNumbers = "grey";
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
        this.lineWidthVertical = 1;
        this.lineWidthHorizontal = 1;
        this.lineDash = [];
    }
}

class Grid extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn$4, msStart, msEnd);
        this.drawLayer = exports.DrawLayer.BackGround;
    }
    draw(p) {
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_x = x + width;
        do {
            this.style.strokeStyle = this.d.colorHorizontalLines;
            this.style.lineDash = this.d.lineDash;
            this.style.lineWidth = this.d.lineWidthHorizontal;
            p.drawLine(x, y, end_x, y, this.style);
            if (this.d.flagDrawNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                this.drawText(p, y, x, y);
            }
            y += this.d.cellHeight;
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_y = y + height;
        do {
            this.style.strokeStyle = this.d.colorVerticalLines;
            this.style.lineWidth = this.d.lineWidthVertical;
            this.style.lineDash = this.d.lineDash;
            p.drawLine(x, y, x, end_y, this.style);
            if (this.d.flagDrawNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                this.drawText(p, x, x, y);
            }
            x += this.d.cellWidth;
        } while (width > x);
    }
    drawText(p, content, x, y) {
        this.style.fontSize = this.d.fontSize;
        this.style.strokeStyle = this.d.colorNumbers;
        this.style.fillStyle = this.d.colorNumbers;
        p.drawText(content.toString(), x + this.d.lineWidthVertical - 2, y + this.d.lineWidthHorizontal, this.style);
    }
}

class ObjectData$3 {
    constructor() {
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.fontSize = 30;
        this.content = "sec: ";
        this.frame = 0;
        this.padding = 4;
        this.colorRectangle = "black";
        this.colorNumbers = "yellow";
    }
}
function DataFn$3() {
    let td = new ObjectData$3();
    return td;
}

class Counter extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn$3, msStart, msEnd);
        this.drawLayer = exports.DrawLayer.MiddleGround;
    }
    width(p) {
        this.style.fontSize = this.d.fontSize;
        const thestr = `   ${this.d.content}   ${parseInt(this.d.frame.toString())} `;
        const contentWidth = p.textWidth(thestr, this.style);
        return ((contentWidth + (this.d.padding * 2)) + 10);
    }
    height(p) {
        this.style.fontSize = this.d.fontSize;
        return p.textWidth("Xi", this.style);
    }
    update(msDelat, p) {
        this.d.frame = msDelat / 1000;
        return true;
    }
    draw(p) {
        let s = "Frame:" + parseInt(this.d.frame.toString());
        this.style.fillStyle = this.d.colorRectangle;
        p.drawFillRect(this.d.x, this.d.y, this.width(p) + this.d.padding, this.height(p) + this.d.padding, this.style);
        this.style.fillStyle = this.d.colorNumbers;
        p.drawText(s, this.d.x + (this.d.padding), this.d.y + (this.d.padding), this.style);
        return true;
    }
}

class ObjectData$2 {
    constructor() {
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.radius = 100;
        this.fill = true;
    }
}
function DataFn$2() {
    let td = new ObjectData$2();
    return td;
}

class Circle extends Component {
    constructor() {
        super(DataFn$2);
    }
    width(p) {
        return this.d.radius * 2;
    }
    height(p) {
        return this.d.radius * 2;
    }
    draw(p) {
        if (this.d.startAngle >= 7) {
            this.d.startAngle = 0;
        }
        else {
            this.d.startAngle++;
        }
        p.drawCircle(this.d.x, this.d.y, this.d.radius, this.d.fill, this.style, this.d.startAngle);
        return true;
    }
}

class ObjectData$1 {
    constructor() {
        this.msStart = 0;
        this.count = 200;
    }
}
function DataFn$1() {
    let td = new ObjectData$1();
    return td;
}

class RandomBgShapes extends Component {
    constructor() {
        super(DataFn$1);
        this.drawLayer = exports.DrawLayer.BackGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        this.style.fillStyle = "#f2edba";
        this.style.strokeStyle = "#efeee3";
        for (let i = 0; i < this.d.count; i++) {
            p.drawCircle((Math.ceil(Math.random() * 1000)), Math.ceil(Math.random() * 600), 15, true, this.style);
        }
        return true;
    }
}

class ObjectData {
    constructor() {
        this.msStart = 0;
        this.align = "left";
        this.x = 50;
        this.y = 50;
        this.listDim = [];
        this.dimFontColor = "#efeded";
        this.dimBgColor = "#6B726D";
        this.dimBorderColor = "grey";
        this.listFocus = [];
        this.focusFontColor = "blue";
        this.focusBgColor = "white";
        this.focusBorderColor = "blue";
        this.listHighlight = [];
        this.highlightFontColor = "red";
        this.highlightBgColor = "#0404a3";
        this.highlightBorderColor = "red";
        this.fontSize = 30;
        this.colorBg = "blue";
        this.paddingX = 4;
        this.paddingY = 4;
        this.gap = 4;
        this.fontColor = "black";
        this.items = [];
    }
}
function DataFn() {
    let td = new ObjectData();
    return td;
}

class List extends Component {
    constructor(x = 10, y = 10, fontSize = 30, msStart = 0, msEnd = 80000) {
        super(DataFn, msStart, msEnd);
        this.widthExtra = 10;
        this.d.x = x;
        this.d.y = y;
        this.d.fontSize = fontSize;
    }
    width(p) {
        let wd = 0;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            if (item.width(p) > wd) {
                wd = item.width(p);
            }
        }
        const wdPadding = wd + (this.d.paddingX * 4);
        return wdPadding + (wdPadding / 100 * this.widthExtra);
    }
    height(p, perc = 0) {
        let ht = this.d.paddingY;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            ht += item.height(p);
            ht += this.d.gap;
        }
        return ht + (this.d.paddingY);
    }
    update(ms, p) {
        let startX = this.d.x;
        let startY = this.d.y + this.d.paddingY;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.d.fontSize = this.d.fontSize;
            item.d.fontColor = this.d.fontColor;
            item.d.x = startX + this.setX(item, p);
            let itemY = startY + this.d.gap;
            item.d.y = itemY;
            startY = itemY;
            startY += item.height(p);
            item.update(ms, p);
        }
        this.updateFocus();
        this.updateHighlight();
        this.updateDim();
        this.compData.apply(ms);
        return true;
    }
    updateFocus() {
        for (let i = 0; i < this.d.listFocus.length; i++) {
            this.d.items[this.d.listFocus[i]].d.fontColor = this.d.focusFontColor;
            this.d.items[this.d.listFocus[i]].d.colorPadding = this.d.focusBgColor;
            this.d.items[this.d.listFocus[i]].d.colorBorder = this.d.focusBorderColor;
        }
    }
    updateHighlight() {
        for (let i = 0; i < this.d.listHighlight.length; i++) {
            this.d.items[this.d.listHighlight[i]].d.fontColor = this.d.highlightFontColor;
            this.d.items[this.d.listHighlight[i]].d.colorPadding = this.d.highlightBgColor;
            this.d.items[this.d.listHighlight[i]].d.colorBorder = this.d.highlightBorderColor;
        }
    }
    updateDim() {
        for (let i = 0; i < this.d.listDim.length; i++) {
            this.d.items[this.d.listDim[i]].d.fontColor = this.d.dimFontColor;
            this.d.items[this.d.listDim[i]].d.colorPadding = this.d.dimBgColor;
            this.d.items[this.d.listDim[i]].d.colorBorder = this.d.dimBorderColor;
        }
    }
    draw(p) {
        this.style.fillStyle = this.d.colorBg;
        p.drawFillRect(this.d.x, this.d.y, this.width(p), this.height(p), this.style);
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            item.draw(p);
        }
        return true;
    }
    addItem(content = "") {
        let item = new Text(content);
        item.d.widthMargin = 2;
        item.d.widthBorder = 2;
        item.d.widthPadding = 2;
        item.d.flagDrawMargin = false;
        item.d.flagDrawBorder = true;
        item.d.flagDrawPadding = true;
        item.d.flagDrawContentArea = false;
        item.d.flagDrawBoundingRectangle = false;
        item.d.flagDrawText = true;
        item.d.colorBorder = "#4242ff";
        item.d.colorPadding = this.d.colorBg;
        item.d.fontColor = "yellow";
        item.d.fontSize = this.d.fontSize;
        this.d.items.push(item);
    }
    setX(item, p) {
        const movableArea = this.width(p) - item.width(p);
        let answer = 0;
        switch (this.d.align) {
            case "left":
                answer = 0;
                break;
            case "right":
                answer = movableArea - this.d.paddingX;
                break;
            case "centre":
                answer = movableArea / 2;
        }
        return answer;
    }
}

class TextTemplates {
    constructor(comps) {
        this.addToArray = comps;
    }
    demo(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", fontSize = 40, x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(g);
        g.d.flagDrawBorder = true;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = true;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true;
        g.d.colorMargin = "red";
        g.d.colorBorder = "green";
        g.d.colorPadding = "blue";
        g.d.colorContentBg = "black";
        g.d.widthBorder = 10;
        g.d.widthMargin = 10;
        g.d.widthPadding = 10;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    txt(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "black", fontSize = 40, x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = false;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = false;
        g.d.flagDrawText = true;
        g.d.fontFamily = exports.FontNames.Helvetica;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    txtBg(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "yellow", fontSize = 50, bgColor = "#051854", x = 100, y = 100) {
        let g = new Text(content, fontColor, fontSize, msStart, msEnd);
        g.d.colorContentBg = bgColor;
        this.addToArray.push(g);
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true;
        g.d.fontFamily = exports.FontNames.Helvetica;
        g.d.x = x;
        g.d.y = y;
        return g;
    }
    shadowRect(content = "Bilza.js", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, fontColor = "black", rectColor = "black", fontSize = 50, x = 100, y = 100) {
        let one = new Text(content, fontColor, fontSize, msStart, msEnd);
        this.addToArray.push(one);
        one.d.flagDrawBoundingRectangle = true;
        one.d.flagBoundingRectShadow = true;
        one.d.flagTextShadow = true;
        one.d.x = x;
        one.d.colorBoundingRect = rectColor;
        one.d.y = y;
        return one;
    }
}

class GridTemplates {
    constructor(comps) {
        this.addToArray = comps;
    }
    dashed(linesColor = "#dee1e2") {
        let g = new Grid();
        g.shadowsOff();
        this.addToArray.push(g);
        g.d.flagDrawNumbers = false;
        g.d.colorNumbers = "red";
        g.d.lineWidthHorizontal = 1;
        g.d.lineWidthVertical = 1;
        g.d.fontSize = 15;
        g.d.colorHorizontalLines = linesColor;
        g.d.colorVerticalLines = linesColor;
        g.d.lineDash = [15, 5];
        return g;
    }
    demo() {
        let grid = new Grid();
        this.addToArray.push(grid);
        grid.d.flagDrawNumbers = true;
        grid.data.colorNumbers = "red";
        grid.d.fontSize = 12;
        grid.d.cellWidth = 100;
        grid.d.cellHeight = 20;
        grid.d.colorHorizontalLines = "blue";
        grid.d.colorVerticalLines = "brown";
        grid.d.lineWidthVertical = 10;
        grid.d.lineWidthHorizontal = 2;
        return grid;
    }
    simple(linesColor = "#dee1e2") {
        let grid = new Grid();
        this.addToArray.push(grid);
        grid.d.colorHorizontalLines = linesColor;
        grid.d.colorVerticalLines = linesColor;
        return grid;
    }
}

class CompFactory {
    constructor(comps = []) {
        this.addToArray = comps;
        this.textTempl = new TextTemplates(comps);
        this.gridTempl = new GridTemplates(comps);
    }
    text(content = "", fontColor = "black", fontSize = 40, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        let bs = new Text(content, fontColor, fontSize, msStart, msEnd, x, y);
        this.addToArray.push(bs);
        return bs;
    }
    list(x = 10, y = 10, fontSize = 30, msStart = 0, msEnd = 80000) {
        let bs = new List(x, y, fontSize, msStart, msEnd);
        this.addToArray.push(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new Grid(msStart, msEnd);
        this.addToArray.push(g);
        return g;
    }
    counter(x = 100, y = 100, msEnd = Number.MAX_SAFE_INTEGER) {
        let item = new Counter();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
    }
    randomBgShapes() {
        let item = new RandomBgShapes();
        this.addToArray.push(item);
    }
    spit() { return this.addToArray; }
}

exports.CompFactory = CompFactory;
exports.Component = Component;
exports.Pack = Pack;
exports.Style = Style;
exports.Transition = Transition;
exports["default"] = Bilza;
