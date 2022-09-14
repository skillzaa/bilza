import Bilza, {Ui,hsl,getRandom,Scene} from "./bilza.js";
import jt from "./scenes/jt.js";
import swingJt from "./scenes/swingJt.js";
import welcome from "./scenes/welcome.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(1000,500);
// bil.insert.alwaysOn(cf.grid());
bil.alwaysOn().grid();
bil.alwaysOn().frameCounter();
bil.background.color.set(hsl(0,5,30));

//=============================================

bil.add(0,9).text("Scene Again").templ.hdg().theme.color(0)
.entryAni.leftIn().exitAni.fadeOut();

const j = jt(4,8,"Message from Scene",240);
bil.addScene(j);

const sj = swingJt(9,20,"Swinging",240);
bil.addScene(sj);

// const wel = welcome(8,20,0);
//-------------------
const ui = new Ui(bil);
bil.draw();
// console.log(j);