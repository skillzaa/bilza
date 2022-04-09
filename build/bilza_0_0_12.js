class Component {
    constructor(DataFn, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        this.drawLayer = DrawLayer.MiddleGround;
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
    shadowsOn() {
        this.style.shadowBlur = 6;
        this.style.shadowOffsetX = 10;
        this.style.shadowOffsetY = 10;
        this.style.shadowColor = "grey";
    }
    resize(width, height) {
        return 0;
    }
    drawBoundingRectangle(p) {
        this.style.strokeStyle = this.d.colorBoundingRectangle;
        p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
}

class Pack {
    constructor(canvasId = "bilza", width = 0, height = 0) {
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
        return this.ctx.fillStyle;
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

var FontNames;
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
})(FontNames || (FontNames = {}));

class Style {
    constructor(msStart = 0) {
        this.msStart = msStart;
        this.fontSize = 25;
        this.fontName = FontNames.Luminari;
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
    resize(width = 800, height = 400) {
        for (let i = 0; i < this.comps.length; i++) {
            const element = this.comps[i];
            element.resize(width, height);
        }
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
        return true;
    }
}

class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(timeEnd);
        this.canvasId = canvasId;
        this.dynamicResizing = true;
        this.pack = new Pack(this.canvasId, canvasWidth, canvasHeight);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(this.canvasId, width, height);
        if (this.dynamicResizing == true) {
            this.resize(width, height);
        }
    }
    getCanvasHeight() {
        return this.pack.canvasHeight();
    }
    getCanvasWidth() {
        return this.pack.canvasWidth();
    }
}

class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(canvasId = "bilza", canvasWidth, canvasHeight, timeEnd);
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
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
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

var DrawLayer;
(function (DrawLayer) {
    DrawLayer["BackGround"] = "BACKGROUND";
    DrawLayer["MiddleGround"] = "MIDDLEGROUND";
    DrawLayer["ForeGround"] = "FOREGROUND";
})(DrawLayer || (DrawLayer = {}));

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

class CompDataBase {
    constructor() {
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.positioned = true;
        this.responsive = true;
        this.visible = true;
        this.colorShadow = "grey";
        this.displayShadow = false;
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.colorBoundingRectangle = "black";
    }
}

class ObjectData$8 extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.content = "Text";
        this.x = 0;
        this.y = 0;
        this.padding = 2;
        this.margin = 2;
        this.colorMargin = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
        this.widthPercent = 10;
        this.flagDrawMargin = true;
        this.flagDrawBg = true;
    }
}
function DataFn$8() {
    let td = new ObjectData$8();
    return td;
}

class Text extends Component {
    constructor(content = "", color = "black", x = 0, y = 0, widthPercent = 10) {
        super(DataFn$8);
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.color = color;
        this.d.colorMargin = color;
        this.d.widthPercent = widthPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return (p.textWidth(this.d.content, this.style) + this.factorsWOFontSize());
    }
    height(p) {
        return (p.textWidth("Wi", this.style) + this.factorsWOFontSize());
    }
    update(msDelta, p) {
        this.setFontSizePerWidth(p);
        return true;
    }
    draw(p) {
        if (this.d.flagDrawBg == true) {
            this.drawBg(p);
        }
        if (this.d.flagDrawMargin == true) {
            this.drawMargin(p);
        }
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        p.drawText(this.d.content, p.xPerc(this.d.x) + (this.d.padding + this.d.margin), p.yPerc(this.d.y) + (this.d.padding + this.d.margin), this.style);
        return true;
    }
    setFontSizePerWidth(p) {
        let curFont = this.style.fontSize;
        let curWd = this.width(p);
        let reqWd = (p.canvasWidth() / 100 * this.d.widthPercent);
        this.style.fontSize = Math.abs(Math.ceil(curFont / curWd * reqWd));
    }
    drawMargin(p) {
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.margin;
        p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    drawBg(p) {
        this.style.fillStyle = this.d.colorBg;
        p.drawFillRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    factorsWOFontSize() {
        return (this.d.padding * 2) + (this.d.margin * 2);
    }
}

function DataFn$7() {
    let td = new ObjectData$7();
    return td;
}
class ObjectData$7 extends CompDataBase {
    constructor() {
        super();
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
        super(DataFn$7, msStart, msEnd);
        this.drawLayer = DrawLayer.BackGround;
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

class ObjectData$6 extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 10;
        this.y = 10;
        this.widthPercent = 200;
        this.heightPercent = 50;
        this.color = "red";
        this.widthPercent = 10;
        this.heightPercent = 10;
    }
}
function DataFn$6() {
    let td = new ObjectData$6();
    return td;
}

class FillRect extends Component {
    constructor(widthPercent = 10, heightPercent = 10) {
        super(DataFn$6);
        this.d.widthPercent = widthPercent;
        this.d.heightPercent = heightPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return ((p.canvasWidth() / 100) * this.d.widthPercent);
    }
    height(p) {
        return ((p.canvasHeight() / 100) * this.d.heightPercent);
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        let newX = p.xPerc(this.d.x);
        let newY = p.yPerc(this.d.y);
        p.drawFillRect(newX, newY, this.width(p), this.height(p), this.style);
        return true;
    }
    resize(width, height) {
        return 0;
    }
}

class ObjectData$5 extends CompDataBase {
    constructor() {
        super();
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
function DataFn$5() {
    let td = new ObjectData$5();
    return td;
}

class Counter extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn$5, msStart, msEnd);
        this.drawLayer = DrawLayer.MiddleGround;
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

class ObjectData$4 extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.radius = 100;
        this.fill = true;
    }
}
function DataFn$4() {
    let td = new ObjectData$4();
    return td;
}

class Circle extends Component {
    constructor() {
        super(DataFn$4);
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

class ObjectData$3 extends CompDataBase {
    constructor() {
        super();
        this.count = 200;
    }
}
function DataFn$3() {
    let td = new ObjectData$3();
    return td;
}

class BgShapes extends Component {
    constructor(count = 100) {
        super(DataFn$3);
        this.d.count = count;
        this.drawLayer = DrawLayer.BackGround;
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
            p.drawCircle(Math.ceil(Math.random() * p.canvasWidth()), Math.ceil(Math.random() * p.canvasHeight()), 15, true, this.style);
        }
        return true;
    }
}

class ObjectData$2 extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 800;
        this.y2 = 100;
        this.lineWidth = 2;
        this.color = "red";
        this.colorShadow = "grey";
    }
}
function DataFn$2() {
    let td = new ObjectData$2();
    return td;
}

class Line extends Component {
    constructor(x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        super(DataFn$2);
        this.d.x1 = x1;
        this.d.y1 = y1;
        this.d.x2 = x2;
        this.d.y2 = y2;
        this.d.color = color;
        this.d.lineWidth = lineWidth;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return Math.abs(this.d.x1 - this.d.x2);
    }
    height(p) {
        return Math.abs(this.d.y1 - this.d.y2);
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        this.style.lineWidth = this.d.lineWidth;
        p.drawLine(p.xPerc(this.d.x1), p.yPerc(this.d.y1), p.xPerc(this.d.x2), p.yPerc(this.d.y2), this.style);
        return true;
    }
}

class ObjectData$1 extends CompDataBase {
    constructor() {
        super();
        this.lineWidth = 5;
        this.flagFilled = true;
        this.color = "red";
    }
}
function DataFn$1() {
    let td = new ObjectData$1();
    return td;
}

class Vertex {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Lines extends Component {
    constructor(x = 0, y = 0) {
        super(DataFn$1);
        this.moveTo = new Vertex(x, y);
        this.vertices = [];
    }
    draw(p) {
        if (this.vertices.length < 2) {
            console.warn("Lines component needs atleast 3 pair of vertices");
            return false;
        }
        p.commitCtxData(this.style);
        p.ctx.beginPath();
        if (this.d.responsive == true) {
            p.ctx.moveTo(p.xPerc(this.moveTo.x), p.yPerc(this.moveTo.y));
        }
        else {
            p.ctx.moveTo((this.moveTo.x), (this.moveTo.y));
        }
        for (let i = 0; i < this.vertices.length; i++) {
            const pos = this.vertices[i];
            if (this.d.responsive == true) {
                p.ctx.lineTo(p.xPerc(pos.x), p.yPerc(pos.y));
            }
            else {
                p.ctx.lineTo((pos.x), (pos.y));
            }
        }
        p.ctx.closePath();
        if (this.d.flagFilled == true) {
            p.ctx.fill();
        }
        else {
            p.ctx.stroke();
        }
        return true;
    }
    add(x = 0, y = 0) {
        let v = new Vertex(x, y);
        this.vertices.push(v);
    }
}

class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 10;
        this.y = 10;
        this.color = "grey";
        this.widthPercent = 10;
        this.heightPercent = 10;
    }
}
function DataFn() {
    let td = new ObjectData();
    return td;
}

class Rect extends Component {
    constructor(widthPercent = 10, heightPercent = 10) {
        super(DataFn);
        this.d.widthPercent = widthPercent;
        this.d.heightPercent = heightPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return ((p.canvasWidth() / 100) * this.d.widthPercent);
    }
    height(p) {
        return ((p.canvasHeight() / 100) * this.d.heightPercent);
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        let newX = p.xPerc(this.d.x);
        let newY = p.yPerc(this.d.y);
        p.drawRect(newX, newY, this.width(p), this.height(p), this.style);
        return true;
    }
}

class TextTemplates {
    constructor(comps) {
        this.addToArray = comps;
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
    bgShapes(count = 100) {
        let bs = new BgShapes();
        this.addToArray.push(bs);
        return bs;
    }
    text(content = "", color = "black", x = 0, y = 0, widthPercent = 10) {
        let bs = new Text(content, color, x, y, widthPercent);
        this.addToArray.push(bs);
        return bs;
    }
    rect() {
        let bs = new Rect();
        this.addToArray.push(bs);
        return bs;
    }
    fillRect() {
        let bs = new FillRect();
        this.addToArray.push(bs);
        return bs;
    }
    lines(x = 0, y = 0) {
        let bs = new Lines(x, y);
        this.addToArray.push(bs);
        return bs;
    }
    line(x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        let bs = new Line(x1, y1, x2, y2, color, lineWidth);
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
        return item;
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
        return item;
    }
    spit() { return this.addToArray; }
}

export { CompFactory, Component, DrawLayer, FontNames, Pack, Style, Transition, Bilza as default };
