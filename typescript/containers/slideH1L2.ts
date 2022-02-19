import {Component,Pack,Style,Transition,Position } from "../bilzaa2d/index.js";
import Text,{TextTemplates} from "../components/text/text.js";
import Grid,{GridTemplates} from "../components/grid/grid.js";



export default class SlideH1L2 extends Component {
    
grid :Grid;
h :Text;
lineOne :Text;
lineTwo :Text;

constructor (frameStart=1, heading:string="The Heading",lineOne:string="This is line one",lineTwo:string="This is line two"){
    super();
    this.frameStart = frameStart;
    this.grid = GridTemplates.dashedGrid();
    
this.h = TextTemplates.h1(heading);
this.h.visible = false;
this.h.frameStart = this.frameStart + 1;

this.lineOne = TextTemplates.lineMid(lineOne,"blue");
this.lineOne.visible = false;
this.lineOne.frameStart = this.frameStart + 2;
this.lineOne.y = 40;

this.lineTwo = TextTemplates.lineMid("and educational content","blue");
this.lineTwo.visible = false;
this.lineTwo.y = 65;
this.lineTwo.frameStart = this.frameStart + 3;

}
width( p: Pack ): number {
return 100;
}
height(p: Pack): number {
return 200;

}
update(frame: number, p: Pack): boolean {
    if (frame >= this.h.frameStart){
        this.h.visible = true;
    }
    if (frame >= this.lineOne.frameStart){
        this.lineOne.visible = true;
    }
    if (frame >= this.lineTwo.frameStart){
        this.lineTwo.visible = true;
    }
    return true;
}
draw(p: Pack): boolean {
//----------------------------------
if (this.h.visible == true){
    this.h.draw(p);
}
if (this.lineOne.visible == true){
    this.lineOne.draw(p);
}
if (this.lineTwo.visible == true){
    this.lineTwo.draw(p);
}
//----------------------------------
return true;
}


}