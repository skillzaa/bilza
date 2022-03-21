import Bilza  from "../src/index.js";
//---lets create a 60 seconds clip
let bilzaa = new Bilza("bilza",800,350,15000);

//-- lets create a title that will stay for the entire duration
//----The permanent Title
bilzaa.add.grid();
bilzaa.add.frameCounter(0,300,bilzaa.getTimeEnd());

let one = bilzaa.add.textTempl.demo("Demo Text",3000);
one.d.y = 10;
let two = bilzaa.add.textTempl.txt("normal txt",6000,bilzaa.getTimeEnd(),"red");
two.d.y = 150;
let three = bilzaa.add.textTempl.txtBg("Text Bg",9000);
three.d.y = 200;
///////////////////////////////
bilzaa.start();
