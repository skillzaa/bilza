import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set(hsl(0,5,30));
bil.insert.alwaysOn(cf.grid());
//--------------------
const comp = cf.text("ABCDEFG",hsl(240));

comp.setxy(10,10);
comp.setPaddings(0);

comp.fontSize.set(80);
//-- Height is 20% but still this will not change the size of the comp since that is dependent upon fontSize and we have not allowed that to be changed
comp.height.set(20);
//--- This will trigger just once
comp.shrinkToHeight.set(true);

comp.theme.color(0);
comp.showBackground.set(true);

bil.insert.add(comp,0,30);
//--------------------
const ui = new Ui(bil);
bil.draw();
