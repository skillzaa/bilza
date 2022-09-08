
import { Scene,CompFactory as cf ,hsl} from "../bilza.js";
import Grid from "../components/grid.js";
import Text from "../components/text.js";

export default class Slide extends  Scene{

constructor(startTime :number,endTime :number){
super(startTime,endTime)
}

addGrid( hslValue :string=hsl(240) ):Grid{
const grid = cf.grid(10,10,hslValue);
this.add(grid);
return grid;
}

addH1(content :string,Hue_0_to_360 :number=0):Text{
    const comp = cf.text( content);
    comp.templ.h1();
    comp.theme.color(Hue_0_to_360);
    this.add(comp);

    return comp;
}

//.................
}//slide ends here
