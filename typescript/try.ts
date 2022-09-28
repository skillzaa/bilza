import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";
// import Text from "./components/text/text.js";
let bil = new Bilza("bilza", 70);

// bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
// bil.background.color.set(hsl(240,30,10));

//=============================================
// const title = bil.add(0,15).text("Markers",hsl(120));

const rect = bil.add(0,60).fillRect("green");
rect.x.set(10);
rect.y.set(10);
rect.width.set(10);
rect.height.set(10);

rect.x.animate(0,10,10,90);
// console.log(title.constructor.name)    
// console.log("title instanceof Text", title instanceof Text)    



const ui = new Ui(bil);
bil.draw();
    