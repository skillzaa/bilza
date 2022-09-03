import Bilza, {Slide,Ui, CompFactory as cf,hsl,getRandom,Scene} from "./bilza.js";
const bil = new Bilza("bilza",70);
bil.background.color.set("darkblue");
//--Step-2 Creating Elements

//-- create a Grid Element
const grid = cf.grid(10,10, "grey");
//--insert.add will make the gird show from second 0 to 15.
bil.insert.add( grid, 0 , 15 );

//---create a frameCounter component that counts running seconds.
const frameCounter = cf.frameCounter( "yellow" );
bil.insert.add( frameCounter  , 0 , 15 );
//--------------------

//--create Text element

const txt = cf.text("Welcome To Bilza.js");

bil.insert.add(txt,2,8);


txt.templ.jumbotron();
txt.theme.color( 0 );
txt.entryAni.topIn()
txt.exitAni.fadeOut();

//--------------------
const ui = new Ui(bil);
bil.draw();