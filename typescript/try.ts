import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set(hsl(240,100,15));
bil.insert.alwaysOn(cf.grid());
getPic(4,2);
getPic(54,2);
getPic(4,50);
getPic(54,50);

function getPic(x :number,y :number){
const pic = cf.pic("../compProjects/00images/house.jpg");
pic.setxy(x,y);
pic.width.set(10);
pic.height.set(10);
pic.border.set(2);
pic.colorBorder.set("red");

pic.width.oscillate(0,20,10,45,4);
pic.height.oscillate(0,20,10,45,4);
bil.insert.add(pic,0,20);
}
//--------------------
const ui = new Ui(bil);
bil.draw();
