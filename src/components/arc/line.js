import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, } from "../../animations/animations.js";
export default class Line extends CompEngine {
    constructor(corePropsDb, pack) {
        super(corePropsDb, pack);
        this.lineWidth = new AniNumber(corePropsDb.lineWidth);
        this.x2 = new AniNumber(corePropsDb.x2);
        this.y2 = new AniNumber(corePropsDb.y2);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.x2.update(msDelta);
        this.y2.update(msDelta);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
        p.drawLine(this.x.value(), this.y.value(), this.x2.value(), this.y2.value(), this.style);
        this.postDraw(p);
        return true;
    }
    compWidth() {
        return Math.floor(Math.abs(this.x2.value() - this.x.value()));
    }
    compHeight() {
        return this.lineWidth.value();
    }
}
