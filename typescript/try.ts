import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

/**
 * 8-sep-2022
 * The Scene Module
 *  - h1bp3 is a function that returns scene object
 *  - The scene obj takes in starting and ending time throught h1bp3 function. These timings decides at what point the scene will be inserted in the main animation.
 * - The first 2 variables of a function returning Scene obj will always be start time and end time after that the scene can take its own arguments.
 * - The Scene Object is not ment for editing. There should be minimum editability in a scene object since scene is for packing components and grouping them. IF WE WANT TO EDIT A SCENE GO TO THE SCENE FILE AND EDIT THAT. After all a scene is just bilza code why to create a new layer of dublication.
 * - When One plan his animation he should first the scenes and then make each scene individually and finally insert them. DO NOT TRY TO MAKE SCENES MORE ALTERABLE AND RE-USABLE FOR MANY SITUATIONS. KEEP IT SIMPLE.   
 *   when we add item to the scene inside h1bp3 function we must add those items immediately after creation since adding (scene.add) will run comp.setTimings and that will set the duration of the comp. We need duration if we want to attach entry/exit animations for that we need the final time of the comp entry or exit.
 * - Inside h1bp3 the timings that we give to comp while scene.add are addToStartTime and subtractFromEndTime. This concept is very important since the main purpose of a scene is to group comps by same time of entry and exit.
 */
import h1bp3 from "./scenes/h1bp3.js";
import testScene from "./scenes/testScene.js";
import swingJt from "./scenes/swingJt.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(0,20,30));

//--------------------
const fc = cf.frameCounter(hsl(120));
bil.insert.add(fc,0,50);
//--------------------

const jt = swingJt(0,30,"Welcome To Bilza.js",300);

bil.insert.addScene(jt);

//--------------------
const ui = new Ui(bil);
bil.draw();

