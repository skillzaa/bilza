import { Component } from "../bilzaa2d/index.js";
import { TextTemplates } from "../components/text/text.js";
import { GridTemplates } from "../components/grid/grid.js";
export default class SlideH1L2 extends Component {
    constructor(frameStart = 1, heading = "The Heading", lineOne = "This is line one", lineTwo = "This is line two") {
        super();
        this.frameStart = frameStart;
        this.grid = GridTemplates.dashedGrid();
        this.h = TextTemplates.h1(heading);
        this.h.visible = false;
        this.h.frameStart = this.frameStart + 1;
        this.lineOne = TextTemplates.lineMid(lineOne, "blue");
        this.lineOne.visible = false;
        this.lineOne.frameStart = this.frameStart + 2;
        this.lineOne.y = 40;
        this.lineTwo = TextTemplates.lineMid("and educational content", "blue");
        this.lineTwo.visible = false;
        this.lineTwo.y = 65;
        this.lineTwo.frameStart = this.frameStart + 3;
    }
    width(p) {
        return 100;
    }
    height(p) {
        return 200;
    }
    update(frame, p) {
        if (frame >= this.h.frameStart) {
            this.h.visible = true;
        }
        if (frame >= this.lineOne.frameStart) {
            this.lineOne.visible = true;
        }
        if (frame >= this.lineTwo.frameStart) {
            this.lineTwo.visible = true;
        }
        return true;
    }
    draw(p) {
        //----------------------------------
        if (this.h.visible == true) {
            this.h.draw(p);
        }
        if (this.lineOne.visible == true) {
            this.lineOne.draw(p);
        }
        if (this.lineTwo.visible == true) {
            this.lineTwo.draw(p);
        }
        //----------------------------------
        return true;
    }
}
