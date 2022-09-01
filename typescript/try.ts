import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";

const bil = new Bilza("bilza",70);
bil.insert.add( cf.grid(10,10,hsl(0))  , 0 , 60 );

const txt = cf.text("Demo Text");
bil.insert.add(txt,5,10);

txt.templ.jumbotron();
txt.theme.color( 240 );
txt.entryAni.leftIn()
txt.exitAni.rightOut();

const ui = new Ui(bil);
bil.draw();

