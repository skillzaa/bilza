import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set(hsl(240,25,30));
bil.insert.alwaysOn(cf.grid());
//--------------------
let startFrame = 0;
//--------------------
for (let row = 0; row < 100; row+=10) {
    for (let col = 0; col < 100; col+=10) {
        //....................................
        const comp = cf.text(` ${startFrame} `,hsl(60));
        comp.setPaddings(0);
        comp.showBackground.set(true);
        comp.colorBackground.set(hsl(240,50,20));
        comp.border.set(0);
        comp.x.set(row);        
        comp.y.set(col);      
        comp.width.set(10);
        comp.height.set(10);
        comp.fitToWidth.set(true);
        comp.shrinkToHeight.set(true);
        bil.insert.add(comp,startFrame,120);
        startFrame++;  
        //....................................        
    }
}
//--------------------
const ui = new Ui(bil);
bil.draw();
