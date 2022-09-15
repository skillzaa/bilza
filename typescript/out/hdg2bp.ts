import Bilza, {Ui,hsl,Scene,Scenes} from "../bilza.js";

let bil = new Bilza("bilza", 70);

const themeColorNumber = 0;
//--Beautiful
bil.alwaysOn().grid(10,10,hsl(themeColorNumber,80,80));
bil.alwaysOn().frameCounter(themeColorNumber);
bil.background.color.set(hsl(themeColorNumber,100,10));
//=============================================
const slide = Scenes.hdg2bp(
    0,10,themeColorNumber, //Start time , end time and theme color
    "This is the Main Title",
    "The Bullet point # 01",2,
    "The Bullet point # 02",4,
    "The footnote",6,
);
bil.addScene(slide);
//-------------------
const ui = new Ui(bil);
bil.draw();