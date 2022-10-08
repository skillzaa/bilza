import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor, } from "../../animations/animations.js";
export default class Curve extends CompEngine {
    constructor(propsDb, pack) {
        super(propsDb, pack);
        this.startX = new AniNumber(propsDb.startX);
        this.startY = new AniNumber(propsDb.startY);
        this.midX = new AniNumber(propsDb.midX);
        this.midY = new AniNumber(propsDb.midY);
        this.endX = new AniNumber(propsDb.endX);
        this.endY = new AniNumber(propsDb.endY);
        this.lineWidth = new AniNumber(propsDb.lineWidth);
        this.bracketWidth = new AniNumber(propsDb.bracketWidth);
        this.colorBracket = new AniColor(propsDb.colorBracket);
        this.showBracket = new AniBoolean(propsDb.showBracket);
        this.color.set(propsDb.color.value());
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        this.midX.update(msDelta);
        this.midY.update(msDelta);
        this.endX.update(msDelta);
        this.endY.update(msDelta);
        this.colorBracket.update(msDelta);
        this.bracketWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        p.quadraticCurveTo(this.x.value() + this.resolveX(this.startX.value()), this.y.value() + this.resolveY(this.startY.value()), this.x.value() + this.resolveX(this.midX.value()), this.y.value() + this.resolveY(this.midY.value()), this.x.value() + this.resolveX(this.endX.value()), this.y.value() + this.resolveY(this.endY.value()), this.style);
        if (this.showBracket.value() == true) {
            this.style.strokeStyle = this.colorBracket.value();
            this.style.lineWidth = this.bracketWidth.value();
            p.beginPath();
            p.moveTo(this.x.value() + this.resolveX(this.startX.value()), this.y.value() + this.resolveY(this.startY.value()));
            p.lineTo(this.x.value() + this.resolveX(this.midX.value()), this.y.value() + this.resolveY(this.midY.value()), this.style);
            p.lineTo(this.x.value() + this.resolveX(this.endX.value()), this.y.value() + this.resolveY(this.endY.value()), this.style);
            p.stroke();
        }
        this.postDraw(p);
        return true;
    }
    resolveX(no) {
        return (this.width.value() / 100) * no;
    }
    resolveY(no) {
        return (this.height.value() / 100) * no;
    }
}
