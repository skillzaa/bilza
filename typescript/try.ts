import Bilza, {Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(1000,500);
bil.insert.alwaysOn(cf.grid());
bil.background.color.set(hsl(0,5,30));

//--------------------
// const comp01 = getComp(0);
// comp01.y.set(1);

const comp = cf.text("fitToWidth",hsl(240));
    comp.setxy(0,20);

    comp.theme.color(120);
    // comp.showBackground.set(true);
    comp.fontSize.set(100);
    comp.width.set(100);
    comp.fitToWidth.set(true);

    bil.insert.add(comp,0,30);

//-------------------
const ui = new Ui(bil);
bil.draw();

//--------------------
function getComp(color:number){
    const comp = cf.text("fitToWidth",hsl(240));
    comp.x.set(0);
    comp.theme.color(color);
    // comp.showBackground.set(true);
    comp.fontSize.set(300);

    bil.insert.add(comp,0,30);
    return comp;
}
