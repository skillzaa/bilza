import Scene from "../scene/scene.js";
import {CompFactory as cf ,hsl} from "../bilza.js";
import Grid from "../components/grid.js";
import Text from "../components/text.js";

export default class Slide extends Scene{
public readonly themeHue_0_to_360 :number;

constructor(startTime :number,endTime :number,themeHue_0_to_360 :number=240){
super(startTime,endTime);
this.themeHue_0_to_360 = themeHue_0_to_360;    
}

addBltPt(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
// const newColor = color == null ? hsl(this.themeHue_0_to_360) : color ;    
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    

    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.bltPt(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addBoldLine(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    

    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.boldLine(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH1(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    

    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h1(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH2(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    

    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h2(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH3(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    
    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h3(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH4(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
    const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    
    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h4(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH5(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    
    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h5(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addH6(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    
    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h6(x,y);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}
addGpHdg(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    
    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.h2(x,y);
    comp.align(0,0);
    comp.entryAni.topIn();
    comp.exitAni.fadeOut();
    comp.theme.color(newColor);
//---importantay
    return comp;
}

addGrid(cellWidth :number=10,cellHeight :number=10,color :string | null= null ):Grid{

const newColor = color == null ? hsl(this.themeHue_0_to_360) : color ;    

const grid = cf.grid(cellWidth,cellHeight,newColor);
this.add(grid);
return grid;
}

addCanvasBorder(borderWidth :number=0.5,entryTimePlus :number=0, exitTimeMinus :number=0,color :string | null= null ){
const newColor = color == null ? 
hsl(this.themeHue_0_to_360) : color ;    
const comp = cf.canvasBorder(newColor,borderWidth);
this.add(comp,entryTimePlus,exitTimeMinus);
}

addFrameCounter(entryTimePlus :number=0, exitTimeMinus :number=0,x :number=90, y :number=90,Hue_0_to_360 :number | null= null){

const newColor = Hue_0_to_360 == null ? 
this.themeHue_0_to_360 : Hue_0_to_360 ;    

const comp = cf.frameCounter((newColor));
comp.setxy(x,y);
this.add(comp,entryTimePlus,exitTimeMinus);
comp.entryAni.fadeIn()
comp.exitAni.fadeOut();
}
//.................
}//slide ends here
