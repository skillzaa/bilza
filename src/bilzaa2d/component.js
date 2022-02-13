import { DrawLayer } from "./design/drawLayer.js";
import { XAlignment } from "./design/xAlignment.js";
import { YAlignment } from "./design/yAlignment.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class Component {
    constructor() {
        this.drawLayer = DrawLayer.MiddleGround;
        this.frameStart = 0; //component startand end frames
        this.frameEnd = 3000;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    // brilent do not send frame in draw args just send frame in update-
    draw(p) {
        return true;
    }
    update(frame, p) {
        return true;
    }
    moveX(x, p, xAlign = XAlignment.Mid) {
        switch (xAlign) {
            case XAlignment.Left:
                return x;
                break;
            case XAlignment.Right:
                return x - (this.width(p));
                break;
            case XAlignment.Mid:
                return x - (this.width(p) / 2);
                break;
            default:
                return x;
                break;
        }
    }
    moveY(y, p, yAlign = YAlignment.Bottom) {
        switch (yAlign) {
            case YAlignment.Bottom:
                return y;
                break;
            case YAlignment.Top:
                return y - (this.height(p));
                break;
            case YAlignment.Mid:
                return y - (this.height(p) / 2);
                break;
            default:
                return y;
                break;
        }
    }
}
