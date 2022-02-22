import { Cornor } from "../design/cornor.js";
export default class Xy {
    constructor(cornor = Cornor.leftTop) {
        this.cornor = cornor;
    }
    X(xperc, comp_width, canvasWidth) {
        xperc = this.setBWZeronHundred(xperc);
        let x = 0;
        switch (this.cornor) {
            case Cornor.leftTop:
                x = ((canvasWidth / 100) * xperc);
                break;
            default:
                break;
        }
        return x;
    }
    Y(yperc, comp_width, canvasHeight) {
        yperc = this.setBWZeronHundred(yperc);
        let y = 0;
        switch (this.cornor) {
            case Cornor.leftTop:
                y = ((canvasHeight / 100) * yperc);
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
}
