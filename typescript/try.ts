import Bilza, {IComponent, Ui, CompFactory as cf,PremadeSpriteSheets, hsl} from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.background.color.set(hsl(240, 100, 85));

const fc = cf.particleSystem(10,hsl(0),2);
fc.particleSize.set(3);
bil.insert.add(fc,0,30);

const ui = new Ui(bil);
bil.draw();