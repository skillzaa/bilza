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

addGrid(cellWidth :number=10,cellHeight :number=10,color :string | null= null ):Grid{

const newColor = color == null ? hsl(this.themeHue_0_to_360) : color ;    

const grid = cf.grid(cellWidth,cellHeight,newColor);
this.add(grid);
return grid;
}

addBltPt(content :string,entryTimePlus :number=0, exitTimeMinus :number=0,x :number=50, y :number=5,Hue_0_to_360 :number|null=null):Text{
// const newColor = color == null ? hsl(this.themeHue_0_to_360) : color ;    
const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360 ;    

    const comp = cf.text( content);
    this.add(comp,entryTimePlus,exitTimeMinus);
    comp.templ.bltPt(y);
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

addCanvasBorder(color :string|null=null , borderWidth :number=0.5,entryTimePlus :number=0, exitTimeMinus :number=0){
const newColor = color == null ? 
hsl(this.themeHue_0_to_360) : color ;    

const comp = cf.canvasBorder(newColor,borderWidth);
this.add(comp,entryTimePlus,exitTimeMinus);
}
//.................
}//slide ends here
