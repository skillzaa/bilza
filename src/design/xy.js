import { Cornor } from "./cornor.js";
export default class Xy {
    constructor(x = 0, y = 0, width = 0, height = 0, cornor = Cornor.leftTop) {
        this.cornor = cornor;
        this.x = this.setBWZeronHundredOrNull(x);
        this.y = this.setBWZeronHundredOrNull(y);
        this.width = this.setBWZeronHundred(width);
        this.height = this.setBWZeronHundred(height);
    }
    X(canvasWidth) {
        if (this.x == null) {
            return null;
        }
        let x = 0;
        switch (this.cornor) {
            case Cornor.leftTop:
                x = ((canvasWidth / 100) * this.x);
                break;
            default:
                break;
        }
        return x;
    }
    Y(canvasHeight) {
        if (this.y == null) {
            return null;
        }
        let y = 0;
        switch (this.cornor) {
            case Cornor.leftTop:
                y = ((canvasHeight / 100) * this.y);
                break;
            default:
                break;
        }
        return y;
    }
    setBWZeronHundred(n) {
        if (n < 0) {
            return 0;
        }
        if (n > 100) {
            return 100;
        }
        return n;
    }
    setBWZeronHundredOrNull(n) {
        if (n == null) {
            return null;
        }
        if (n < 0) {
            return 0;
        }
        if (n > 100) {
            return 100;
        }
        return n;
    }
}
