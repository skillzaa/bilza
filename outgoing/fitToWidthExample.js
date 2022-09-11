
import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,55,70));

bil.insert.alwaysOn(cf.grid());
bil.background.color.set(hsl(0,5,30));
//--------------------
const comp01 = getComp(0);
comp01.y.set(10);

const comp02 = getComp(120);
comp02.y.set(70);
//---The following 2 lines are the only
//--difference between both comp01 and comp02
comp02.width.set(30);
comp02.fitToWidth.set(true);

//-------------------
const ui = new Ui(bil);
bil.draw();


//--------------------
function getComp(color){
const comp = cf.text("fitToWidth",hsl(240));
comp.x.set(0);
comp.theme.color(color);
comp.showBackground.set(true);
comp.fontSize.set(200);

bil.insert.add(comp,0,30);
return comp;
}
