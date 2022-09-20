import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Wave extends BaseComponent {
    constructor() {
        super();
        this.radius = 1;
        this.numberOfWaves = 6;
        this.incX = 0.9;
        this.altitude = 100;
        this.counter = 0;
        this.midLineColor = "red";
        this.showMidLine = true;
        this.waveColor = "blue";
        this.width.set(50);
        this.height.set(50);
        this.increase = 0;
    }
    draw(p) {
        this.preDraw(p);
        this.increase = Math.PI * this.numberOfWaves / this.width.value();
        this.style.fillStyle = this.waveColor;
        this.style.strokeStyle = this.waveColor;
        let oldX = this.contentX() + this.width.value();
        let x = this.contentX() + this.width.value();
        let oldY = 0;
        for (x; x >= this.contentX(); x -= this.incX) {
            let y = (Math.sin(this.counter) * this.height.value() / 2);
            y += (this.contentY() + (this.height.value() / 2));
            this.counter += this.increase;
            this.style.lineWidth = 3;
            p.beginPath();
            p.moveTo(oldX, oldY);
            p.lineTo(x, y, this.style);
            p.stroke();
            oldX = x;
            oldY = y;
        }
        this.style.fillStyle = this.midLineColor;
        this.style.strokeStyle = this.midLineColor;
        p.beginPath();
        p.moveTo(this.contentX(), this.contentY() + (this.height.value() / 2));
        p.lineTo(this.contentX() + this.width.value(), this.contentY() + (this.height.value() / 2), this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}
