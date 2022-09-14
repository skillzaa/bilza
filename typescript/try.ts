import Bilza, {Ui,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);
// bil.insert.alwaysOn(cf.grid());
bil.alwaysOn().grid();
bil.alwaysOn().frameCounter();
bil.background.color.set(hsl(0,5,30));

//=============================================

bil.add(0,20).text("blabla").templ.hdg().theme.color(0);

//-------------------
const ui = new Ui(bil);
bil.draw();
console.log(bil);